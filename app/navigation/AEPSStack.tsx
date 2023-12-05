import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { View } from 'react-native';
import { SearchHeader } from '../components';
import { Routes } from '../constants';
import { AEPS } from '../modules';

const StackAEPS = createNativeStackNavigator();

const AEPSStack = () => {
  return (
    <StackAEPS.Navigator>
      <StackAEPS.Screen
        name={Routes.Aeps}
        component={AEPS}
        options={{
          header: () => (
            <SearchHeader Icon={ArrowLeft} name={Routes.Aeps} Flag={false} />
          ),
        }}
      />
    </StackAEPS.Navigator>
  );
};

export default AEPSStack;
