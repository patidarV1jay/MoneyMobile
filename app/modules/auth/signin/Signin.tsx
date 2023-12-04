import { At, Password } from 'phosphor-react-native';
import React, { FC } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../../assets';
import { CustomTextInput } from '../../../components';
import { Routes, ScreenStrings } from '../../../constants';
import styles from './SigninStyles';
import useSignin from './useSignin';
import { Colors, verticleScale } from '../../../theme';

const Signin: FC = () => {
  const { navigation, formik } = useSignin();
  const { handleSubmit } = formik;
  const navigateHome = () => {
    navigation.replace(Routes.DrawerNav, { screen: Routes.HomeScreen });
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.headerColor} />
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          keyboardVerticalOffset={verticleScale(-30)}
          behavior="position">
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
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.newUserText}>
                {ScreenStrings.newUser}
                <Text style={styles.registerText}>
                  {ScreenStrings.register}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Signin;
