import { CalendarBlank, MagnifyingGlass } from 'phosphor-react-native';
import React, { useContext } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Placeholder, ScreenStrings } from '../../constants';
import { FilterToggle } from '../../hooks';
import { Colors, moderateScale } from '../../theme';
import styles from './SearchHeaderStyles';
import { Props } from './types';
import useSearchHeader from './useSearchHeader';

const SearchHeader = ({ Icon, name, Filter, Flag, IsDate }: Props) => {
  const { viewFilter, setViewFilters } = useContext(FilterToggle);
  const toggleFilter = () => {
    setViewFilters(!viewFilter);
  };
  const {
    navigation,
    showMode,
    isDatePop,
    setDatePop,
    date,
    showDate,
    toDate,
    showToDate,
  } = useSearchHeader();
  return (
    <View style={styles.container}>
      <View style={styles.iconnTitle}>
        <View style={styles.arrowNTitle}>
          {Icon && (
            <Pressable onPress={navigation.goBack}>
              <Icon size={moderateScale(25)} color={Colors.dark} />
            </Pressable>
          )}
          <Text style={styles.titleText}>{name}</Text>
        </View>
        {Filter && (
          <Pressable onPress={toggleFilter}>
            <Filter size={moderateScale(25)} color={Colors.dark} />
          </Pressable>
        )}
      </View>
      {Flag && (
        <View style={styles.searchBarView}>
          <View style={styles.textInputView}>
            <MagnifyingGlass
              size={moderateScale(25)}
              weight="bold"
              color={Colors.dark}
            />
            <TextInput
              placeholder={Placeholder.searchHeaderPlaceholder}
              style={styles.textInput}
              placeholderTextColor={Colors.gray}
            />
          </View>
          {IsDate && (
            <>
              <TouchableOpacity onPress={() => setDatePop(!isDatePop)}>
                <CalendarBlank
                  size={moderateScale(25)}
                  weight="bold"
                  color={Colors.light}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
      {isDatePop && (
        <View style={styles.pressableRow}>
          <Pressable
            style={styles.datePressable}
            onPress={() => showMode('from')}>
            {showDate ? (
              <Text style={styles.centeredText}>
                {date.toISOString().slice(0, 10)}
              </Text>
            ) : (
              <Text style={styles.centeredText}>{ScreenStrings.from}</Text>
            )}
          </Pressable>
          <Pressable
            style={styles.datePressable}
            onPress={() => showMode('to')}>
            {showToDate ? (
              <Text style={styles.centeredText}>
                {toDate.toISOString().slice(0, 10)}
              </Text>
            ) : (
              <Text style={styles.centeredText}>{ScreenStrings.get}</Text>
            )}
          </Pressable>
          <Pressable style={styles.getPressable}>
            <Text style={styles.centeredText}>{ScreenStrings.get}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default SearchHeader;
