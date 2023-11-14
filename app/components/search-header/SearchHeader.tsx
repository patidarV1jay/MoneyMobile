import React, { useContext } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Placeholder } from '../../constants';
import { FilterToggle } from '../../hooks';
import { Colors, moderateScale } from '../../theme';
import styles from './SearchHeaderStyles';
import { Props } from './types';
import useSearchHeader from './useSearchHeader';

const SearchHeader = ({ Icon, name, Filter }: Props) => {
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
        <Pressable onPress={toggleFilter}>
          <Filter size={moderateScale(25)} color={Colors.light} />
        </Pressable>
      </View>
      <TextInput
        placeholder={Placeholder.searchHeaderPlaceholder}
        style={styles.textInput}
        placeholderTextColor={Colors.offShade}
      />
    </View>
  );
};

export default SearchHeader;
