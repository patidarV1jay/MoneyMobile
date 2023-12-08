import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { ScreenStrings } from '../../constants';
import styles from './IncomeReport Styles';

const AepsLedgerReport = () => {
  useEffect(() => {
    Orientation.lockToLandscape();
    return () => Orientation.lockToPortrait();
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sheetHeader}>
        <Text>{ScreenStrings.id}</Text>
        <Text>{ScreenStrings.name}</Text>
        <Text>{ScreenStrings.opBal}</Text>
        <Text>{ScreenStrings.clBal}</Text>
        <Text>{ScreenStrings.crAmount}</Text>
        <Text>{ScreenStrings.drAmount}</Text>
        <Text>{ScreenStrings.sales}</Text>
        <Text>{ScreenStrings.profit}</Text>
        <Text>{ScreenStrings.charges}</Text>
        <Text>{ScreenStrings.pending}</Text>
        <Text>{ScreenStrings.action}</Text>
      </View>
    </ScrollView>
  );
};

export default AepsLedgerReport;
