import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import styles from './AepsLedgerReportStyles';
import Orientation from 'react-native-orientation-locker';

const AepsLedgerReport = () => {
  useEffect(() => {
    Orientation.lockToLandscape();
    return () => Orientation.lockToPortrait();
  });
  return (
    <View style={styles.container}>
      <Text>AepsLedgerReport</Text>
    </View>
  );
};

export default AepsLedgerReport;
