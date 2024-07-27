import { Camera, Check, Image } from 'phosphor-react-native';
import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AgentOnBoardTextInput } from '../../../components';
import { Colors, moderateScale } from '../../../theme';
import styles from './KycStyles';
import useKyc from './useKyc';

const Kyc = () => {
  const {
    imagePicker,
    handleGallery,
    handleCamera,
    toggleVisibility,
    formik,
    birthDate,
    showDatepicker,
    personalPanCard,
    aadharCard,
    profilePhoto,
    companyPhoto,
    setIsImagePicker,
  } = useKyc();
  const { handleSubmit, errors, touched } = formik;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.photoComponentContainer}
        showsVerticalScrollIndicator={false}>
        <AgentOnBoardTextInput
          placeholder="Name"
          style={styles.textInputStyles}
          formik={formik}
          name="name"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
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
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="Phone No."
          style={styles.textInputStyles}
          formik={formik}
          name="mobile"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <View style={styles.dateOfBirthView} onTouchEnd={showDatepicker}>
          {birthDate ? (
            <Text style={styles.birthDate}>{birthDate}</Text>
          ) : (
            <Text style={styles.placeholderText}>Date Of Birth</Text>
          )}
        </View>
        <View style={[styles.errorView, styles.topSpace]}>
          {errors['dateOfBirth'] && touched['dateOfBirth'] && (
            <Text style={styles.errorText}>{errors['dateOfBirth']}</Text>
          )}
        </View>
        <AgentOnBoardTextInput
          placeholder="Personal Pan No."
          style={styles.textInputStyles}
          formik={formik}
          name="personal_pan"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <View
          style={styles.dateOfBirthView}
          onTouchEnd={() => toggleVisibility(1)}>
          {personalPanCard ? (
            <View style={styles.uploadedView}>
              <Check size={moderateScale(20)} color={Colors.green} />
              <Text style={styles.uploadedStyles}>
                Pan Card Uploaded Successfully
              </Text>
            </View>
          ) : (
            <Text style={styles.placeholderText}>Upload Personal Pan Card</Text>
          )}
        </View>
        <View style={[styles.errorView, styles.topSpace]}>
          {errors['personalPanCard'] && touched['personalPanCard'] && (
            <Text style={styles.errorText}>{errors['personalPanCard']}</Text>
          )}
        </View>
        <AgentOnBoardTextInput
          placeholder="Aadhar No."
          style={styles.textInputStyles}
          formik={formik}
          name="aadhar"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <View
          style={styles.dateOfBirthView}
          onTouchEnd={() => toggleVisibility(2)}>
          {aadharCard ? (
            <View style={styles.uploadedView}>
              <Check size={moderateScale(20)} color={Colors.green} />
              <Text style={styles.uploadedStyles}>
                Aadhar Card Uploaded Successfully
              </Text>
            </View>
          ) : (
            <Text style={styles.placeholderText}>Upload Aadhar Card</Text>
          )}
        </View>
        <View style={[styles.errorView, styles.topSpace]}>
          {errors['aadharCard'] && touched['aadharCard'] && (
            <Text style={styles.errorText}>{errors['aadharCard']}</Text>
          )}
        </View>
        <View
          style={styles.dateOfBirthView}
          onTouchEnd={() => toggleVisibility(3)}>
          {profilePhoto ? (
            <View style={styles.uploadedView}>
              <Check size={moderateScale(20)} color={Colors.green} />
              <Text style={styles.uploadedStyles}>
                Profile Photo Uploaded Successfully
              </Text>
            </View>
          ) : (
            <Text style={styles.placeholderText}>Upload Profile Photo</Text>
          )}
        </View>
        <View style={[styles.errorView, styles.topSpace]}>
          {errors['profilePhoto'] && touched['profilePhoto'] && (
            <Text style={styles.errorText}>{errors['profilePhoto']}</Text>
          )}
        </View>
        <AgentOnBoardTextInput
          placeholder="Company Name"
          style={styles.textInputStyles}
          formik={formik}
          name="company_name"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="Company Pan"
          style={styles.textInputStyles}
          formik={formik}
          name="pan"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="GST No."
          style={styles.textInputStyles}
          formik={formik}
          name="gst"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="Company Website URL"
          style={styles.textInputStyles}
          formik={formik}
          name="website"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="CIN"
          style={styles.textInputStyles}
          formik={formik}
          name="cin"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <View
          style={styles.dateOfBirthView}
          onTouchEnd={() => toggleVisibility(4)}>
          {companyPhoto ? (
            <View style={styles.uploadedView}>
              <Check size={moderateScale(20)} color={Colors.green} />
              <Text style={styles.uploadedStyles}>
                Company Photo Uploaded Successfully
              </Text>
            </View>
          ) : (
            <Text style={styles.placeholderText}>Upload Company Photo</Text>
          )}
        </View>
        <View style={[styles.errorView, styles.topSpace]}>
          {errors['companyPhoto'] && touched['companyPhoto'] && (
            <Text style={styles.errorText}>{errors['companyPhoto']}</Text>
          )}
        </View>
        <AgentOnBoardTextInput
          placeholder="Business Profile"
          style={styles.textInputStyles}
          formik={formik}
          name="business_profile"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="State"
          style={styles.textInputStyles}
          formik={formik}
          name="master_state_id"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
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
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="Account No."
          style={styles.textInputStyles}
          formik={formik}
          name="account_number"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="IFSC"
          style={styles.textInputStyles}
          formik={formik}
          name="ifsc"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="Bank Name"
          style={styles.textInputStyles}
          formik={formik}
          name="bank_name"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="next"
        />
        <AgentOnBoardTextInput
          placeholder="Account Holder Name"
          style={styles.textInputStyles}
          formik={formik}
          name="acc_holder_name"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => handleSubmit()}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={imagePicker}
        transparent
        animationType="slide"
        onRequestClose={() => setIsImagePicker(false)}>
        <View style={styles.modalContainer}>
          <View
            style={styles.closeContainer}
            onTouchEnd={() => setIsImagePicker(false)}
          />
          <View style={styles.modalContentContainer}>
            <Pressable
              style={styles.button}
              onPress={() => handleCamera('Camera')}>
              <Camera size={moderateScale(25)} weight="bold" />
              <Text style={styles.text}>Take Picture</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => handleGallery('Photos and videos')}>
              <Image size={moderateScale(25)} weight="bold" />
              <Text style={styles.text}>Upload From Gallery</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Kyc;
