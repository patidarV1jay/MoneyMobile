import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import useUPICollection from './useUPICollection';
import styles from './UPICollectionStyles';
import { AgentOnBoardTextInput } from '../../components';
import { Placeholder, ScreenStrings } from '../../constants';
import { useInputRef } from '../../hooks';

const UpiCollectionForm = () => {
  const { focusNextTextInput, refAmount, refRemark } = useInputRef();
  const { formik } = useUPICollection();
  return (
    <View style={styles.upiCollectionContainer}>
      <View style={styles.inputContainer}>
        <AgentOnBoardTextInput
          placeholder={Placeholder.upiId}
          style={styles.textInputStyles}
          formik={formik}
          name="upiId"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
          onSubmitEditing={() => focusNextTextInput(refAmount)}
        />
        <AgentOnBoardTextInput
          inputRef={refAmount}
          placeholder={Placeholder.amount}
          style={styles.textInputStyles}
          formik={formik}
          name="amount"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
          onSubmitEditing={() => focusNextTextInput(refRemark)}
        />
        <AgentOnBoardTextInput
          inputRef={refRemark}
          placeholder={Placeholder.remark}
          style={styles.textInputStyles}
          formik={formik}
          name="remark"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedText}>{ScreenStrings.proceed}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpiCollectionForm;
