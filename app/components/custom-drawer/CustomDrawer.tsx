import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Image, ScrollView, ScrollViewProps, Text, View } from 'react-native';
import { Routes, ScreenStrings } from '../../constants';
import styles from './CustomDrawerStyles';
import useCustomDrawer from './useCustomDrawer';

const CustomDrawer = (
  props: React.JSX.IntrinsicAttributes &
    ScrollViewProps & {
      children: React.ReactNode;
    } & React.RefAttributes<ScrollView>,
) => {
  const { signOut, navigation, onShare } = useCustomDrawer();
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContentView}>
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
        label={Routes.RechargeReports}
        onPress={() => navigation.navigate(Routes.RechargeReports)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.MoneyTransferReport}
        onPress={() => navigation.navigate(Routes.MoneyTransferReport)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.AccountStatement}
        onPress={() => navigation.navigate(Routes.AccountStatement)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.OperatorReport}
        onPress={() => navigation.navigate(Routes.OperatorReport)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.IncomeReport}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.PaymentRequestReports}
        onPress={() => navigation.navigate(Routes.PaymentRequestReports)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.PaymentRequest}
        onPress={() =>
          navigation.navigate(Routes.PaymentRequestStack, {
            screen: Routes.PaymentRequest,
          })
        }
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.BalanceReturnRequest}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.Dispute}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.MyCommission}
        onPress={() =>
          navigation.navigate(Routes.MyCommissionStack, {
            screen: Routes.MyCommission,
          })
        }
        labelStyle={styles.labelStyle}
      />
      <View style={styles.hrLine} />
      <Text style={styles.appName}>{ScreenStrings.appName}</Text>
      <DrawerItem
        label={Routes.About}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={styles.labelStyle}
      />
      <DrawerItem
        label={Routes.ContactUs}
        onPress={() => navigation.navigate(Routes.IncomeReport)}
        labelStyle={styles.bottomLabelStyle}
      />
      <DrawerItem
        label={ScreenStrings.share}
        onPress={onShare}
        labelStyle={styles.bottomLabelStyle}
      />
      <DrawerItem
        label={ScreenStrings.logout}
        onPress={signOut}
        labelStyle={styles.bottomLabelStyle}
      />

      {/* <TouchableOpacity
        style={[styles.buttonCommonStyles, styles.shareButton]}
        onPress={onShare}>
        <Text style={styles.buttonText}>{ScreenStrings.share}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.logoutButton, styles.buttonCommonStyles]}
        onPress={signOut}>
        <Text style={styles.buttonText}>{ScreenStrings.logout}</Text>
      </TouchableOpacity> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
