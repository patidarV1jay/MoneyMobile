import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { AgentOnBoardTextInput } from '../../../components';
import { Placeholder, ScreenStrings } from '../../../constants';
import { useInputRef } from '../../../hooks';
import styles from './AddressDetailsStyles';
import useAddressDetails from './useAddressDetails';

const AddressDetails = () => {
  const {
    refShopName,
    refAddress,
    refPinCode,
    refDistrict,
    refCity,
    focusNextTextInput,
  } = useInputRef();
  const { formik } = useAddressDetails();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.permanentAddressView}>
        <Text style={styles.permanentAddressText}>
          {ScreenStrings.permanentAddress}
        </Text>
        <View style={styles.hrLine} />
        <AgentOnBoardTextInput
          placeholder={Placeholder.address}
          style={styles.textInputStyles}
          formik={formik}
          name="address"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refCity)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refCity}
          placeholder={Placeholder.city}
          style={styles.textInputStyles}
          formik={formik}
          name="cityName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refDistrict)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refDistrict}
          placeholder={Placeholder.district}
          style={styles.textInputStyles}
          formik={formik}
          name="districtName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refPinCode)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refPinCode}
          placeholder={Placeholder.pinCode}
          style={styles.textInputStyles}
          formik={formik}
          name="pinCode"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refShopName)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refShopName}
          placeholder={Placeholder.shopName}
          style={styles.textInputStyles}
          formik={formik}
          name="shopName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="done"
        />
      </View>
      <View style={styles.permanentAddressView}>
        <Text style={styles.permanentAddressText}>
          {ScreenStrings.presentAddress}
        </Text>
        <View style={styles.hrLine} />
        <AgentOnBoardTextInput
          placeholder={Placeholder.address}
          style={styles.textInputStyles}
          formik={formik}
          name="address"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refCity)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refCity}
          placeholder={Placeholder.city}
          style={styles.textInputStyles}
          formik={formik}
          name="cityName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refDistrict)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refDistrict}
          placeholder={Placeholder.district}
          style={styles.textInputStyles}
          formik={formik}
          name="districtName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refPinCode)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refPinCode}
          placeholder={Placeholder.pinCode}
          style={styles.textInputStyles}
          formik={formik}
          name="pinCode"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refShopName)}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          inputRef={refShopName}
          placeholder={Placeholder.shopName}
          style={styles.textInputStyles}
          formik={formik}
          name="shopName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="done"
        />
      </View>
    </ScrollView>
  );
};

export default AddressDetails;
