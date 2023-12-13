import React from 'react';
import { Text, View } from 'react-native';
import styles from './ReceiptModalStyles';

interface Props {
  title: string;
  secondaryTitle: string;
}
const ReceiptCard = ({ title, secondaryTitle }: Props) => {
  return (
    <View style={styles.center}>
      <View style={styles.bottomSpace}>
        <Text style={styles.modalText}>{title}</Text>
        <Text style={styles.modalBalanceText}>9758415263</Text>
      </View>
      <View>
        <Text style={styles.modalText}>{secondaryTitle}</Text>
        <Text style={styles.modalBalanceText}>1.25</Text>
      </View>
    </View>
  );
};

export default ReceiptCard;
