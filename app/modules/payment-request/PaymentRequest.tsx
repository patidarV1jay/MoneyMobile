import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './PaymentRequestStyles';
import { Images } from '../../assets';
import Card from './Card';

const PaymentRequest = () => {
  return (
    <View style={styles.container}>
      <Card name="Bank Details" source={Images.bank} />
      <Card name="Fund Request" source={Images.loanPayment} />
      <Card name="Fund Request Request" source={Images.bank} />
    </View>
  );
};

export default PaymentRequest;
