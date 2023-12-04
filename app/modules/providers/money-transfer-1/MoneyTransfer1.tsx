import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './MoneyTransfer1Styles';
import { TextInput } from 'react-native';
import useMoneyTransfer1 from './useMoneyTransfer';

const MoneyTransfer1 = () => {
  const { formik } = useMoneyTransfer1();
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    formik;
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <Text style={styles.customerNumberText}>Enter Customer Number</Text>
        <TextInput
          placeholder="Mobile Number"
          style={styles.textInput}
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
        />
        {errors['phone'] && touched['phone'] && <Text style={styles.errorText}>{errors['phone']}</Text>}
        <TouchableOpacity style={styles.validateButton} onPress={handleSubmit}>
          <Text style={styles.validateText}>VALIDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoneyTransfer1;
