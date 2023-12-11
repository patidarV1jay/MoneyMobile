import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChangePassword, ProfileScreen } from '../modules';
import { Routes } from '../constants';
import { SearchHeader } from '../components';
import { ArrowLeft } from 'phosphor-react-native';

const StackProfile = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.Profile}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackProfile.Screen
        name={Routes.ChangePassword}
        component={ChangePassword}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.ChangePassword}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
    </StackProfile.Navigator>
  );
};

export default ProfileStack;
