import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AgentOnBoardTextInput } from '../../../components';
import { Placeholder, ScreenStrings } from '../../../constants';
import { useInputRef } from '../../../hooks';
import styles from './MoveToWalletStyles';
import useMoveToWallet from './useMoveToWallet';

const MoveToWallet = () => {
  const { formik } = useMoveToWallet();
  const { refRemark, refPassword, focusNextTextInput } = useInputRef();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.aepsView}>
          <Text style={styles.aepsBalanceText}>{ScreenStrings.aesBalance}</Text>
          <Text style={styles.aepsBalanceText}>0.00</Text>
        </View>
        <Text style={styles.inputHeader}>{ScreenStrings.amounts}</Text>
        <AgentOnBoardTextInput
          placeholder={Placeholder.amount}
          style={styles.textInputStyles}
          formik={formik}
          name="amount"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          keyboardType="number-pad"
          onSubmitEditing={() => focusNextTextInput(refRemark)}
          returnKeyType="next"
        />
        <Text style={styles.inputHeader}>{ScreenStrings.remarks}</Text>
        <AgentOnBoardTextInput
          inputRef={refRemark}
          placeholder={Placeholder.amount}
          style={styles.textInputStyles}
          formik={formik}
          name="amount"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          keyboardType="number-pad"
          onSubmitEditing={() => focusNextTextInput(refPassword)}
          returnKeyType="next"
        />
        <Text style={styles.inputHeader}>{ScreenStrings.loginPassword}</Text>
        <AgentOnBoardTextInput
          inputRef={refPassword}
          placeholder={Placeholder.loginPassword}
          style={styles.textInputStyles}
          formik={formik}
          name="amount"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedText}>{ScreenStrings.proceed}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoveToWallet;
