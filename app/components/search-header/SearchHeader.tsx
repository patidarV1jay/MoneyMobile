import React, { useContext } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Placeholder } from '../../constants';
import { FilterToggle } from '../../hooks';
import { Colors, moderateScale } from '../../theme';
import styles from './SearchHeaderStyles';
import { Props } from './types';
import useSearchHeader from './useSearchHeader';

const SearchHeader = ({ Icon, name, Filter,Flag }: Props) => {
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
      {
       Flag &&
        <TextInput
        placeholder={Placeholder.searchHeaderPlaceholder}
        style={styles.textInput}
        placeholderTextColor={Colors.offShade}
        />
      }
      {/* <View style={{ backgroundColor:Colors.headerColor,position:'absolute',height:100,width:'90%',alignSelf:'center',top:verticleScale(100)}}>
      </View> */}
    </View>
  );
};

export default SearchHeader;
