import React from 'react';
import { View } from 'react-native';
import { PhotoComponent } from '../../providers';
import styles from './KycStyles';
import { ScrollView } from 'react-native';

const Kyc = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.photoComponentContainer}
        showsVerticalScrollIndicator={false}>
        <PhotoComponent serialNumber={1} photoText="Profile Photo" />
        <PhotoComponent serialNumber={2} photoText="Shop Photo" />
        <PhotoComponent serialNumber={3} photoText="GST Registration Photo" />
        <PhotoComponent serialNumber={4} photoText="PAN Photo" />
        <PhotoComponent serialNumber={5} photoText="Cancel Check" />
        <PhotoComponent serialNumber={6} photoText="Address Proof Photo" />
      </ScrollView>
    </View>
  );
};

export default Kyc;
