import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AgentOnBoardTextInput } from '../../../components';
import { PaymentMethod, ScreenStrings, depositBank } from '../../../constants';
import { useInputRef } from '../../../hooks';
import { Colors } from '../../../theme';
import styles from './FundRequestStyles';
import useFundRequest from './useFundRequest';

const FundRequest = () => {
  const {
    formik,
    error,
    errorPayment,
    validate,
    value,
    value2,
    setValue,
    setValue2,
    setError,
    seterrorPayment,
    submit,
    showMode,
    showDate,
    date,
    errorDate,
  } = useFundRequest();
  const { handleSubmit } = formik;
  const { refUtr, focusNextTextInput } = useInputRef();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{ScreenStrings.amounts}</Text>
        <AgentOnBoardTextInput
          placeholder="Amount"
          style={styles.textInputStyles}
          formik={formik}
          name="amount"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refUtr)}
          returnKeyType="next"
        />
        <Text style={styles.text}>{ScreenStrings.utr}</Text>
        <AgentOnBoardTextInput
          inputRef={refUtr}
          placeholder="UTR"
          style={styles.textInputStyles}
          formik={formik}
          name="utr"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="done"
        />
        <Text style={styles.text}>{ScreenStrings.selectDepositedBank}</Text>
        <View style={styles.dropdownView}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.listItem}
            containerStyle={styles.listContainerStyle}
            data={depositBank}
            search={false}
            maxHeight={300}
            activeColor={Colors.headerColor}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={item => {
              setValue(item.value);
              setError('');
            }}
          />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
        <Text style={styles.text}>{ScreenStrings.selectPaymentMethod}</Text>
        <View style={styles.dropdownView}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.listContainerStyle}
            activeColor={Colors.headerColor}
            itemTextStyle={styles.listItem}
            iconStyle={styles.iconStyle}
            data={PaymentMethod}
            search={false}
            maxHeight={1500}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value2}
            onChange={item => {
              setValue2(item.value);
              seterrorPayment('');
            }}
          />
          {errorPayment && <Text style={styles.error}>{errorPayment}</Text>}
        </View>
        <Text style={styles.text}>{ScreenStrings.paymentDepositdate}</Text>
        <Pressable
          style={[styles.dropdown, styles.dateInput]}
          onPress={showMode}>
          {!showDate ? (
            <Text style={styles.dateFormtText}>{ScreenStrings.dateFormat}</Text>
          ) : (
            <Text style={styles.date}>{date.toISOString().slice(0, 10)}</Text>
          )}
        </Pressable>
        {errorDate && <Text style={styles.error}>{errorDate}</Text>}

        <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
          <Text style={styles.proceed}>{ScreenStrings.proceedToPay}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FundRequest;
