import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { Mobile, MyCommission } from '../modules';
import { SearchHeader } from '../components';
import { ArrowLeft } from 'phosphor-react-native';

const StackMyCommission = createNativeStackNavigator();

const MyCommissionStack = () => {
  return (
    <StackMyCommission.Navigator>
      <StackMyCommission.Screen
        name={Routes.MyCommission}
        component={MyCommission}
        options={{
          header: () => (
            <SearchHeader
              IsDate={false}
              name={Routes.MyCommission}
              Flag={false}
              Icon={ArrowLeft}
            />
          ),
        }}
      />
      <StackMyCommission.Screen
        name={Routes.Mobile}
        component={Mobile}
        options={{
          header: () => (
            <SearchHeader
              IsDate={false}
              name={Routes.Mobile}
              Flag={false}
              Icon={ArrowLeft}
            />
          ),
        }}
      />
    </StackMyCommission.Navigator>
  );
};

export default MyCommissionStack;
