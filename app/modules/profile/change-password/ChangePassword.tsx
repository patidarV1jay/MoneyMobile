import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AgentOnBoardTextInput } from '../../../components';
import { Placeholder, ScreenStrings } from '../../../constants';
import { useInputRef } from '../../../hooks';
import styles from './ChangePasswordStyles';
import useChangePassword from './useChangePassword';
const ChangePassword = () => {
  const { focusNextTextInput, refNewPassword, refCofirmPassword } =
    useInputRef();
  const { formik } = useChangePassword();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AgentOnBoardTextInput
          placeholder={Placeholder.currentPassword}
          style={styles.textInputStyles}
          formik={formik}
          name="currentPassword"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refNewPassword)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refNewPassword}
          placeholder={Placeholder.newPassword}
          style={styles.textInputStyles}
          formik={formik}
          name="newPassword"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refCofirmPassword)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refCofirmPassword}
          placeholder={Placeholder.confirmPassword}
          style={styles.textInputStyles}
          formik={formik}
          name="confirmPassword"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateText}>{ScreenStrings.update}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
