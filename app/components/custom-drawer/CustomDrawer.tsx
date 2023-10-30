import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Image, ScrollView, ScrollViewProps, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Routes, ScreenStrings } from '../../constants';
import { Colors } from '../../theme';
import styles from './CustomDrawerStyles';
import useCustomDrawer from './useCustomDrawer';

const CustomDrawer = (
  props: React.JSX.IntrinsicAttributes &
    ScrollViewProps & {
      children: React.ReactNode;
    } & React.RefAttributes<ScrollView>,
) => {
  const { signOut, navigation } = useCustomDrawer();
  return (
    <DrawerContentScrollView
      {...props}
      style={styles.drawerContentView}>
      <View style={styles.drawerView}>
        <View style={styles.drawerProfile}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
            }}
            style={styles.userImage}
          />
          <Text style={styles.profileText}>Data From api</Text>
          <Text style={styles.profileText}>Data from api</Text>
        </View>
      </View>
      <DrawerItem
        label={Routes.IncomeReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <View style={styles.hrLine} />
      <Text style={styles.appName}>{ScreenStrings.appName}</Text>
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={[styles.textColor]}
      />

      <TouchableOpacity style={[styles.buttonCommonStyles, styles.shareButton]}>
        <Text style={styles.buttonText}>{ScreenStrings.share}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.logoutButton, styles.buttonCommonStyles]}
        onPress={signOut}>
        <Text style={styles.buttonText}>{ScreenStrings.logout}</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
