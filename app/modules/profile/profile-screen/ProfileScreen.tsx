import {
  Keyhole,
  IdentificationCard,
  Info,
  AddressBook,
} from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Routes } from '../../../constants';
import { moderateScale } from '../../../theme';
import styles from './ProfileScreenStyles';
import useProfileScreen from './useProfileScreen';

type navigatePasswordChange = () => void;

const ProfileScreen = () => {
  const {
    navigatePasswordChange,
    navigateKyc,
    navigatePersonalInfo,
    navigateAddressDetails,
  } = useProfileScreen();
  const cards = (
    title: string,
    Icon: React.ComponentType<any>,
    navigatePasswordChange: navigatePasswordChange,
  ) => (
    <TouchableOpacity style={styles.button} onPress={navigatePasswordChange}>
      <Icon size={moderateScale(25)} weight="bold" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {cards(Routes.ChangePassword, Keyhole, navigatePasswordChange)}
      {cards(Routes.Kyc, IdentificationCard, navigateKyc)}
      {cards(Routes.PersonalInformation, Info, navigatePersonalInfo)}
      {cards(Routes.AddressDetails, AddressBook, navigateAddressDetails)}
    </View>
  );
};

export default ProfileScreen;
