import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AgentOnBoardTextInput } from '../../../components';
import { ScreenStrings } from '../../../constants';
import { useInputRef } from '../../../hooks';
import styles from './AgentOnBoardStyles';
import PhotoComponent from './PhotoComponent';
import useAgentOnBoard from './useAgentOnBoard';

const AgentOnBoard = () => {
  const { formik, galleryView, toggleModal, setGalleryView } =
    useAgentOnBoard();
  const { handleSubmit } = formik;
  const {
    refEmail,
    refPanNumber,
    focusNextTextInput,
    aadhaarNumberRef,
    refShopName,
    refGst,
    refAddress,
    refCity,
    refDistrict,
    refPinCode,
  } = useInputRef();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cotainerHoldingKeyboardView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView behavior="position">
              <AgentOnBoardTextInput
                placeholder="Agent Name"
                style={styles.textInputStyles}
                formik={formik}
                name="agentName"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                returnKeyType="next"
                onSubmitEditing={() => focusNextTextInput(refEmail)}
              />
              <AgentOnBoardTextInput
                placeholder="Email"
                inputRef={refEmail}
                style={styles.textInputStyles}
                formik={formik}
                name="email"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                onSubmitEditing={() => focusNextTextInput(refPanNumber)}
                returnKeyType="next"
              />
              <AgentOnBoardTextInput
                placeholder="PAN Number"
                inputRef={refPanNumber}
                style={styles.textInputStyles}
                formik={formik}
                name="panNumber"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                onSubmitEditing={() => focusNextTextInput(aadhaarNumberRef)}
                returnKeyType="next"
              />
              <AgentOnBoardTextInput
                placeholder="Aadhaar Number"
                inputRef={aadhaarNumberRef}
                style={styles.textInputStyles}
                formik={formik}
                name="aadhaarNumber"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                onSubmitEditing={() => focusNextTextInput(refShopName)}
                returnKeyType="next"
              />
              <AgentOnBoardTextInput
                inputRef={refShopName}
                placeholder="Shop Name"
                style={styles.textInputStyles}
                formik={formik}
                name="shopName"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                onSubmitEditing={() => focusNextTextInput(refGst)}
                returnKeyType="next"
              />
              <AgentOnBoardTextInput
                inputRef={refGst}
                placeholder="GST Number"
                style={styles.textInputStyles}
                formik={formik}
                name="gstNumber"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                onSubmitEditing={() => focusNextTextInput(refAddress)}
                returnKeyType="next"
              />
              <AgentOnBoardTextInput
                inputRef={refAddress}
                placeholder="Address"
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
                placeholder="City Name"
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
                placeholder="District Name"
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
                placeholder="Pin Code"
                style={styles.textInputStyles}
                formik={formik}
                name="pinCode"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                keyboardType="number-pad"
                returnKeyType="done"
              />
            </KeyboardAvoidingView>
            <PhotoComponent serialNumber={1} photoText="PAN Photo" />
            <PhotoComponent serialNumber={2} photoText="Cancel Check" />
            <PhotoComponent serialNumber={3} photoText="Merchant Proof Photo" />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>{ScreenStrings.submit}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default AgentOnBoard;
