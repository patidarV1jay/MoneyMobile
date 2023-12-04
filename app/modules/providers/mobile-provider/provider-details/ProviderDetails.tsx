import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './ProviderDetailsStyles';
import useProviderDetails from './useProviderDetails';

const ProviderDetails = () => {
  const { formik } = useProviderDetails();
  const { handleChange, handleBlur, handleSubmit, errors, touched, values } =
    formik;

  return (
    <View style={styles.container}>
      <View style={styles.selectedProviderContainer}>
        <Text style={styles.providerText}>Provider</Text>
        <View style={styles.selectedProvider}>
          <Text style={styles.selectedProviderText}>Airtel</Text>
        </View>
        <KeyboardAvoidingView behavior="position">
          <Text>Mobile Number</Text>
          <TextInput
            placeholder="Mobile Number"
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            style={styles.textinputStyles}
            keyboardType="number-pad"
          />
          {errors['phone'] && touched['phone'] && (
            <Text style={{ color: 'red' }}>{errors['phone']}</Text>
          )}
          <Text>Country</Text>
          <TouchableWithoutFeedback style={styles.textinputStyles}>
            <Text>Select The Country</Text>
          </TouchableWithoutFeedback>
          <Text>Amount</Text>
          <TextInput
            placeholder="Amount"
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount}
            style={styles.textinputStyles}
            keyboardType="number-pad"
          />
          {errors['amount'] && touched['amount'] && (
            <Text style={{ color: 'red' }}>{errors['amount']}</Text>
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default ProviderDetails;
