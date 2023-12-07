import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Images } from '../../../assets';
import { AEPSIcons } from '../../../constants';
import styles from './AEPSStyles';
import Section from './Section';
import useAEPS from './useAEPS';

const AEPS = () => {
  const {
    navigateAgentOnBoard,
    navigateAepsLedgerReport,
    navigateAepsReport,
    navigateBankOperations,
  } = useAEPS();
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={AEPSIcons}
          renderItem={({ item }) => {
            return (
              <TouchableWithoutFeedback
                style={styles.flatlistContainer}
                onPress={() => navigateBankOperations(item.name)}>
                <View style={styles.flatlistContainer}>
                  <Image source={item.source} style={styles.itemImage} />
                  <Text style={styles.itemNameText}>{item.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
          numColumns={2}
          key={2}
          columnWrapperStyle={{ marginBottom: 20 }}
        />
      </View>
      <Text style={styles.payoutText}>Payout</Text>
      <View style={styles.payoutView}>
        <View>
          <Image source={Images.wallet} style={styles.itemImage} />
          <Text style={styles.itemNameText}>Move to Wallet</Text>
        </View>
        <View>
          <Image source={Images.bank} style={styles.itemImage} />
          <Text style={styles.itemNameText}>Move to Bank</Text>
        </View>
      </View>
      <Section title="AEPS Ledger Report" onPress={navigateAepsLedgerReport} />
      <Section title="AEPS Report" onPress={navigateAepsReport} />
      <Section title="Agent On Boarding" onPress={navigateAgentOnBoard} />
    </View>
  );
};

export default AEPS;
