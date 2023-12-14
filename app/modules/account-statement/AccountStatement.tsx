import React from 'react';
import { Text, View } from 'react-native';
import { FilterWindow, ReceiptModal } from '../../components';
import { ScreenStrings } from '../../constants';
import styles from './AccountStatementStyles';
import useAccountStatement from './useAccountStatement';

const AccountStatement = () => {
  const { toggleReceiptVisibility, setReceiptVisible, isReceiptVisible } =
    useAccountStatement();

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
          <Text style={styles.successText}>{ScreenStrings.success}</Text>
          <Text style={styles.viewText} onPress={toggleReceiptVisibility}>
            {ScreenStrings.view}
          </Text>
        </View>
      </View>
      <ReceiptModal
        isReceiptVisible={isReceiptVisible}
        toggleReceiptVisibility={toggleReceiptVisibility}
        setReceiptVisible={setReceiptVisible}
      />
      <FilterWindow />
    </View>
  );
};

export default AccountStatement;
