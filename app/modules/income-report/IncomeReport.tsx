import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from '../../constants';
import { RootStackParamList } from '../../types';

const IncomeReport = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateHome = () => {
    navigation.navigate(Routes.HomeScreen);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>IncomeReport</Text>
      <TouchableOpacity onPress={navigateHome}>
        <Text>go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IncomeReport;
