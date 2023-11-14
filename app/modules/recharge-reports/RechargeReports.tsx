import { View, Text } from 'react-native';
import React from 'react';
import styles from './RechargeReportsStyles';
import { FilterWindow } from '../../components';

const RechargeReports = () => {
  return (
    <View style={styles.container}>
      <Text>RechargeReports</Text>
      <FilterWindow />
    </View>
  );
};

export default RechargeReports;
