import React, { useContext } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Placeholder } from '../../constants';
import { FilterToggle } from '../../hooks';
import { Colors, moderateScale } from '../../theme';
import styles from './SearchHeaderStyles';
import { Props } from './types';
import useSearchHeader from './useSearchHeader';
import { CalendarBlank, MagnifyingGlass } from 'phosphor-react-native';

const SearchHeader = ({ Icon, name, Filter, Flag, IsDate }: Props) => {
  const { viewFilter, setViewFilters } = useContext(FilterToggle);
  const toggleFilter = () => {
    setViewFilters(!viewFilter);
  };
  const { navigation } = useSearchHeader();
  return (
    <View style={styles.container}>
      <View style={styles.iconnTitle}>
        <View style={styles.arrowNTitle}>
          {Icon && (
            <Pressable onPress={navigation.goBack}>
              <Icon size={moderateScale(25)} color={Colors.light} />
            </Pressable>
          )}
          <Text style={styles.titleText}>{name}</Text>
        </View>
        {Filter && (
          <Pressable onPress={toggleFilter}>
            <Filter size={moderateScale(25)} color={Colors.light} />
          </Pressable>
        )}
      </View>
      {Flag && (
        <View style={styles.searchBarView}>
          <View style={styles.textInputView}>
            <MagnifyingGlass
              size={moderateScale(25)}
              weight="bold"
              color={Colors.light}
            />
            <TextInput
              placeholder={Placeholder.searchHeaderPlaceholder}
              style={styles.textInput}
              placeholderTextColor={Colors.offShade}
            />
          </View>
          {IsDate && (
            <CalendarBlank
              size={moderateScale(25)}
              weight="bold"
              color={Colors.light}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default SearchHeader;
