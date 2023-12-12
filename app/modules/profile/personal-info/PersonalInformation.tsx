import { View, Text } from 'react-native';
import React from 'react';
import styles from './PersonalInformationStyles';
import { AgentOnBoardTextInput } from '../../../components';
import { useInputRef } from '../../../hooks';
import { Placeholder } from '../../../constants';
import usePersonalInformation from './usePersonalInformation';

const PersonalInformation = () => {
  const { focusNextTextInput, refLastName, refEmail } = useInputRef();
  const { formik } = usePersonalInformation();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AgentOnBoardTextInput
          placeholder={Placeholder.firstName}
          style={styles.textInputStyles}
          formik={formik}
          name="firstName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refLastName)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refLastName}
          placeholder={Placeholder.lastName}
          style={styles.textInputStyles}
          formik={formik}
          name="lastName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refEmail)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refEmail}
          placeholder={Placeholder.email}
          style={styles.textInputStyles}
          formik={formik}
          name="email"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refLastName)}
          returnKeyType="done"
        />
        <View style={styles.mobileNumberView}>
          <Text style={styles.mobileNumberText}>0000000000</Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalInformation;
