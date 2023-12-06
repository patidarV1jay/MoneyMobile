import { ArrowLeft, MagnifyingGlass } from 'phosphor-react-native';
import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FilterToggle } from '../../hooks';
import { Colors, moderateScale } from '../../theme';
import styles from './AepsReportHeaderStyles';
import useAepsReportHeader from './useAepsReportHeader';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  name: string;
}
const SearchHeader = ({ name }: Props) => {
  const { viewFilter, setViewFilters } = useContext(FilterToggle);
  const toggleFilter = () => {
    setViewFilters(!viewFilter);
  };
  const { navigation, isSearch, toggleSearchbar } = useAepsReportHeader();
  return (
    <View style={styles.container}>
      {!isSearch ? (
        <View style={styles.iconnTitle}>
          <View style={styles.arrowNTitle}>
            <Pressable onPress={navigation.goBack}>
              <ArrowLeft size={moderateScale(25)} color={Colors.light} />
            </Pressable>

            <Text style={styles.titleText}>{name}</Text>
          </View>

          <Pressable onPress={toggleSearchbar}>
            <MagnifyingGlass size={moderateScale(25)} color={Colors.light} />
          </Pressable>
        </View>
      ) : (
        <View style={styles.iconnTitle}>
          <View style={styles.arrowNTitle}>
            <Pressable onPress={toggleSearchbar}>
              <ArrowLeft size={moderateScale(25)} color={Colors.light} />
            </Pressable>

            <TextInput
              placeholder="Search..."
              style={styles.searchBar}
              placeholderTextColor={Colors.offShade}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchHeader;
