import { At, Password } from 'phosphor-react-native';
import React, { FC } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../../assets';
import { CustomTextInput } from '../../../components';
import { Routes, ScreenStrings } from '../../../constants';
import { Colors } from '../../../theme';
import styles from './SigninStyles';
import useSignin from './useSignin';

const Signin: FC = () => {
  const { navigation, isKeyboardVisible, formik } = useSignin();
  const { handleSubmit } = formik;
  const navigateHome = () => {
    navigation.replace(Routes.DrawerNav, { screen: Routes.HomeScreen });
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={Colors.headerColor}
        translucent={false}
      />
      <ScrollView
        style={styles.safeAreaViewContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={isKeyboardVisible ? true : false}>
        <Image source={Images.signin} style={styles.signinImage} />
        <View style={styles.siginContainer}>
          <Text style={styles.appNameText}>{ScreenStrings.appName}</Text>
          <View style={styles.customTextInputView}>
            <CustomTextInput
              placeholder="Email"
              style={styles.textInputStyles}
              formik={formik}
              name="email"
              styleView={styles.textInputView}
              Icon={At}
              styleErrorView={styles.errorView}
              styleErrorText={styles.errorText}
              secureTextEntry={false}
            />
          </View>
          <CustomTextInput
            placeholder="Password"
            style={styles.textInputStyles}
            formik={formik}
            name="password"
            styleView={styles.textInputView}
            Icon={Password}
            styleErrorView={styles.errorView}
            styleErrorText={styles.errorText}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSubmit as (event: HTMLElement) => void}>
            <Text style={styles.loginText}>{ScreenStrings.login}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              isKeyboardVisible
                ? styles.registerButton
                : styles.registerButtonBottom
            }>
            <Text style={styles.newUserText}>
              {ScreenStrings.newUser}
              <Text style={styles.registerText}>{ScreenStrings.register}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Signin;
