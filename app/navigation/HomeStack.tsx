import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { HomeHeader, SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  DthProvider,
  ElectricityProvider,
  HomeScreen,
  MobileProvider,
  PostPaid,
} from '../modules';

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
    </StackHome.Navigator>
  );
};

export default HomeStack;