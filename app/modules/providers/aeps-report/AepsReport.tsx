import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { ScreenStrings } from '../../../constants';
import styles from './AepsReportStyles';
import useAepsReport from './useAepsReport';

const AepsLedgerReport = () => {
  useEffect(() => {
    Orientation.lockToLandscape();
    return () => Orientation.lockToPortrait();
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sheetHeader}>
        <Text>{ScreenStrings.id}</Text>
        <Text>{ScreenStrings.dateTime}</Text>
        <Text>{ScreenStrings.txnid}</Text>
        <Text>{ScreenStrings.description}</Text>
        <Text>{ScreenStrings.op}</Text>
        <Text>{ScreenStrings.debit}</Text>
        <Text>{ScreenStrings.credit}</Text>
        <Text>{ScreenStrings.profit}</Text>
        <Text>{ScreenStrings.cl}</Text>
      </View>
    </ScrollView>
  );
};

export default AepsLedgerReport;
