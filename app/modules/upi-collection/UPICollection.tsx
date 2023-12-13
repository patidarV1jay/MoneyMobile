import React from 'react';
import {
  Animated,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ScreenStrings } from '../../constants';
import styles from './UPICollectionStyles';
import useUPICollection from './useUPICollection';
import UpiCollectionForm from './UpiCollectionForm';

const UPICollection = () => {
  const {
    width,
    logInColorInterpolate,
    signupColorInterpolate,
    borderColorLogin,
    borderColorSignup,
    animation,
    ScrollViewRef,
  } = useUPICollection();

  return (
    <View style={styles.container}>
      <View style={styles.scrollableButton}>
        <TouchableWithoutFeedback
          onPress={() =>
            ScrollViewRef.current && ScrollViewRef.current.scrollTo({ x: 0 })
          }>
          <Animated.View
            style={[
              styles.loginButton,
              {
                // backgroundColor: logInColorInterpolate,
                borderColor: borderColorLogin,
              },
            ]}>
            <Animated.Text
              style={[styles.upiQrCodeText, { color: logInColorInterpolate }]}>
              {ScreenStrings.upiQrCode}
            </Animated.Text>
            {/* <Animated.View
              style={{
                borderWidth: 5,
                borderColor: 'green',
                width: '100%',
                opacity: interpolateOpacityLogin,
                transform: [{ translateX: translatehrlogin }],
              }}
            /> */}
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            ScrollViewRef.current &&
            ScrollViewRef.current.scrollTo({ x: width })
          }>
          <Animated.View
            style={[
              styles.signupButton,
              {
                // backgroundColor: signupColorInterpolate,
                borderColor: borderColorSignup,
              },
            ]}>
            <Animated.Text
              style={[styles.upiQrCodeText, { color: signupColorInterpolate }]}>
              {ScreenStrings.upiCollection}
            </Animated.Text>
            {/* <Animated.View
              style={{
                borderWidth: 5,
                borderColor: 'green',
                width: '100%',
                opacity: interpolateOpacitySignup,
                transform: [{ translateX: translatehrsignup }],
              }}
            /> */}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animation,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        ref={ScrollViewRef}>
        <View style={styles.qrCodeContainer}>
          <Text>hey</Text>
        </View>
         <UpiCollectionForm />
      </ScrollView>
    </View>
  );
};

export default UPICollection;
