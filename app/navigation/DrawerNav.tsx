import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components';
import DrawerScreen from './DrawerScreen';
import { Routes } from '../constants';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer children={undefined} {...props} />}>
      <Drawer.Screen name={Routes.DrawerScreen} component={DrawerScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
