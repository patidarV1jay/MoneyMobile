import { Bell, DotsThreeVertical, List } from 'phosphor-react-native';
import React from 'react';
import {
  Modal, StatusBar, Text, TouchableOpacity,
  TouchableWithoutFeedback, View
} from 'react-native';
import { ScreenStrings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styles from './HomeHeaderStyles';
import useHomeHeader from './useHomeHeader';

const HomeHeader = () => {
  const { navigation, popup, togglePopup, setPopup, navigateProfile } = useHomeHeader();

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

            <Modal transparent visible={popup} animationType="fade">
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    onTouchEnd={() => setPopup(false)}
                    style={styles.closeModalContainer}
                  />
                  <View style={styles.popupContainer}>
                    <TouchableWithoutFeedback onPress={navigateProfile}>
                      <Text style={styles.text}>{ScreenStrings.profile}</Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.text}>{ScreenStrings.addMoney}</Text>
                    <Text style={styles.text}>
                      {ScreenStrings.upiCollection}
                    </Text>
                  </View>
                </View>
                <View
                  onTouchEnd={() => setPopup(false)}
                  style={styles.closeModalContainer}
                />
              </View>
            </Modal>

            <TouchableOpacity onPress={togglePopup}>
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
            <Text style={[styles.textStyles]}>{ScreenStrings.balance}</Text>
            <Text style={[styles.textStyles, styles.textBalance]}>
              ₹XXXXXXXX
            </Text>
          </View>
          <View>
            <Text style={[styles.textStyles]}>{ScreenStrings.aesBalance}</Text>
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
