import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { HomeHeader, SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  DthProvider,
  ElectricityProvider,
  HomeScreen,
  MoneyTransfer1,
  PanCard,
  PostPaid,
} from '../modules';
import ProviderStack from './ProviderStack';

const StackHome = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{ header: () => <HomeHeader /> }}
      />
      <StackHome.Screen
        name={Routes.ElectricityProvider}
        component={ElectricityProvider}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.ElectricityProvider}
              Flag={true}
            />
          ),
        }}
      />
      <StackHome.Screen
        name={Routes.PostpaidProvider}
        component={PostPaid}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.PostpaidProvider}
              Flag={true}
            />
          ),
        }}
      />
      <StackHome.Screen
        name={Routes.DthProvider}
        component={DthProvider}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.DthProvider}
              Flag={true}
            />
          ),
        }}
      />
      <StackHome.Screen
        name={Routes.ProviderStack}
        component={ProviderStack}
        options={{
          headerShown: false,
        }}
      />
      <StackHome.Screen
        name={Routes.MoneyTransfer1}
        component={MoneyTransfer1}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.MoneyTransfer1}
              Flag={false}
            />
          ),
        }}
      />
      <StackHome.Screen
        name={Routes.PanCard}
        component={PanCard}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.PanCard}
              Flag={false}
            />
          ),
        }}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
