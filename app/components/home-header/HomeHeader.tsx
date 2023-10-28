import { Bell, DotsThreeVertical, List } from 'phosphor-react-native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenStrings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styles from './HomeHeaderStyles';
import useHomeHeader from './useHomeHeader';

const HomeHeader = () => {
  const { navigation } = useHomeHeader();

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={Colors.dark}
        translucent={false}
      />
      <View style={styles.mainContainer}>
        <View style={[styles.headerTitle, styles.directionRow]}>
          <View style={styles.directionRow}>
            <TouchableOpacity onPress={navigation.openDrawer}>
              <List
                size={moderateScale(28)}
                weight="bold"
                color={Colors.light}
              />
            </TouchableOpacity>
            <Text style={styles.textAppName}>{ScreenStrings.appName}</Text>
          </View>
          <View style={styles.directionRow}>
            <TouchableOpacity
              onPress={navigation.openDrawer}
              style={styles.iconBell}>
              <Bell
                size={moderateScale(32)}
                weight="bold"
                color={Colors.light}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <DotsThreeVertical
                size={moderateScale(32)}
                weight="bold"
                color={Colors.light}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.balanceView}>
          <View>
            <Text style={[styles.textStyles]}>Balance</Text>
            <Text style={[styles.textStyles, styles.textBalance]}>
              ₹XXXXXXXX
            </Text>
          </View>
          <View>
            <Text style={[styles.textStyles]}>AES Balance</Text>
            <Text style={[styles.textStyles, styles.textBalance]}>
              ₹XXXXXXXX
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeHeader;
