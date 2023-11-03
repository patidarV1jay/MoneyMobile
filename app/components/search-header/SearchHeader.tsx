import React from 'react';
import {
    Pressable,
    Text,
    TextInput,
    View
} from 'react-native';
import { Placeholder } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styles from './SearchHeaderStyles';
import { Props } from './types';
import useSearchHeader from './useSearchHeader';

const SearchHeader = ({ Icon, name }: Props) => {
  const { navigation } = useSearchHeader();
  return (
    <View style={styles.container}>
      <View style={styles.arrowNTitle}>
        {Icon && (
          <Pressable style={styles.iconView} onPress={navigation.goBack}>
            <Icon size={moderateScale(25)} color={Colors.light} />
          </Pressable>
        )}
        <Text style={styles.titleText}>{name}</Text>
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
