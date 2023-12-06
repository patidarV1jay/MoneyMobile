import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View
} from 'react-native';
import { AgentOnBoardTextInput } from '../../../components';
import styles from './AgentOnBoardStyles';
import PhotoComponent from './PhotoComponent';
import useAgentOnBoard from './useAgentOnBoard';

const AgentOnBoard = () => {
  const { formik, galleryView, toggleModal, setGalleryView } =
    useAgentOnBoard();
  const { handleSubmit } = formik;

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
              />
              <AgentOnBoardTextInput
                placeholder="Email"
                style={styles.textInputStyles}
                formik={formik}
                name="email"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="PAN Number"
                style={styles.textInputStyles}
                formik={formik}
                name="panNumber"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="Aadhaar Number"
                style={styles.textInputStyles}
                formik={formik}
                name="aadhaarNumber"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="Shop Name"
                style={styles.textInputStyles}
                formik={formik}
                name="shopName"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="GST Number"
                style={styles.textInputStyles}
                formik={formik}
                name="gstNumber"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="Address"
                style={styles.textInputStyles}
                formik={formik}
                name="address"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="City Name"
                style={styles.textInputStyles}
                formik={formik}
                name="cityName"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="District Name"
                style={styles.textInputStyles}
                formik={formik}
                name="districtName"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
              />
              <AgentOnBoardTextInput
                placeholder="Pin Code"
                style={styles.textInputStyles}
                formik={formik}
                name="pinCode"
                styleView={styles.textInputView}
                styleErrorView={styles.errorView}
                styleErrorText={styles.errorText}
                secureTextEntry={false}
                keyboardType="number-pad"
              />
            </KeyboardAvoidingView>
            <PhotoComponent serialNumber={1} photoText="PAN Photo" />
            <PhotoComponent serialNumber={2} photoText="Cancel Check" />
            <PhotoComponent serialNumber={3} photoText="Merchant Proof Photo" />
          </ScrollView>
        </View>
      </View>
     
    </>
  );
};

export default AgentOnBoard;
