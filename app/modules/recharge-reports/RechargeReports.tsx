import { View, Text } from 'react-native';
import React from 'react';
import styles from './RechargeReportsStyles';
import { FilterWindow } from '../../components';

const RechargeReports = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.rechargeDetailsView}>
          <Text style={styles.text}>8794512666</Text>
          <Text style={styles.text}>RS 49.00</Text>
          <Text style={[styles.text, styles.datenTime]}>
            2021-05-05 01:03:17
          </Text>
        </View>
        <View style={styles.successnView}>
          <Text style={styles.successText}>Success</Text>
          <Text style={styles.viewText}>View</Text>
        </View>
      </View>
      <FilterWindow />
    </View>
  );
};

export default RechargeReports;
