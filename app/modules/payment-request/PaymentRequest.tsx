import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './PaymentRequestStyles';
import { Images } from '../../assets';
import Card from './Card';
import usePaymentRequest from './usePaymentRequest';

const PaymentRequest = () => {
  const {
    navigateBankDetails,
    navigateFundRequest,
    navigateFundRequestReport,
  } = usePaymentRequest();
  return (
    <View style={styles.container}>
      <Card
        name="Bank Details"
        source={Images.bank}
        onPress={navigateBankDetails}
      />
      <Card
        name="Fund Request"
        source={Images.loanPayment}
        onPress={navigateFundRequest}
      />
      <Card
        name="Fund Request Report"
        source={Images.bank}
        onPress={navigateFundRequestReport}
      />
    </View>
  );
};

export default PaymentRequest;
