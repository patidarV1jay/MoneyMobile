import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { SearchHeader } from '../components';
import { Routes } from '../constants';
import { MobileProvider } from '../modules';
import { ProviderDetails } from '../modules';

const StackProvider = createNativeStackNavigator();
const ProviderStack = () => {
  return (
    <StackProvider.Navigator>
      <StackProvider.Screen
        name={Routes.MobileProvider}
        component={MobileProvider}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.MobileProvider}
              Flag={true}
            />
          ),
        }}
      />
      <StackProvider.Screen
        name={Routes.ProviderDetails}
        component={ProviderDetails}
        options={{
          header: () => (
            <SearchHeader Icon={ArrowLeft} name="Mobile" Flag={false} />
          ),
        }}
      />
    </StackProvider.Navigator>
  );
};

export default ProviderStack;
