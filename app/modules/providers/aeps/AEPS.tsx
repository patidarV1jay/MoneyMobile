import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import styles from './AEPSStyles';
import { AEPSIcons } from '../../../constants';
import { Images } from '../../../assets';
import { CaretRight } from 'phosphor-react-native';
import { Colors, moderateScale } from '../../../theme';
import Section from './Section';

const AEPS = () => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={AEPSIcons}
          renderItem={({ item }) => {
            return (
              <View style={styles.flatlistContainer}>
                <Image source={item.source} style={styles.itemImage} />
                <Text style={styles.itemNameText}>{item.name}</Text>
              </View>
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
      <Section title="AEPS Ledger Report"/>
      <Section title="AEPS Report" />
      <Section title="Agent On Boarding" />
    </View>
  );
};

export default AEPS;
