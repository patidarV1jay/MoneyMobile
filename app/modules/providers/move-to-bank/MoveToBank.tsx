import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScreenStrings } from '../../../constants';
import styles from './MoveToBankStyles';
import { PlusCircle } from 'phosphor-react-native';
import { moderateScale } from '../../../theme';
import { TouchableOpacity } from 'react-native';
import useMoveToBank from './useMoveToBank';

const MoveToBank = () => {
  const { navigateBeneficiary } = useMoveToBank();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.aepsBalance}>AEPS Balance: 0.00</Text>
        <Text style={styles.headerNumber}>{ScreenStrings.number}</Text>
        <View style={styles.numberView}>
          <Text style={styles.numberText}> 9797979797</Text>
          <Pressable style={styles.searchButton}>
            <Text style={[styles.numberText, styles.searchText]}>
              {ScreenStrings.search}
            </Text>
          </Pressable>
        </View>
      </View>
      <TouchableOpacity style={styles.plusButton} onPress={navigateBeneficiary}>
        <PlusCircle size={moderateScale(58)} weight="fill" />
      </TouchableOpacity>
    </View>
  );
};

export default MoveToBank;
