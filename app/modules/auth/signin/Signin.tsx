import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Routes } from '../../../constants';
import { RootStackParamList } from '../../../types';

const Signin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateHome = () => {
    navigation.replace(Routes.DrawerNav, { screen: Routes.HomeScreen });
  };

  return (
    <SafeAreaView>
      <Text>Signin</Text>
      <TouchableOpacity onPress={navigateHome}>
        <Text>Navigate To HomeScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signin;
