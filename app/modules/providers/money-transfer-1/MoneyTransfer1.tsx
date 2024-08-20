import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors, moderateScale } from '../../../theme';
import styles from './MoneyTransfer1Styles';
import useMoneyTransfer1 from './useMoneyTransfer';

const MoneyTransfer1 = () => {
  const { formik, isLoading } = useMoneyTransfer1();
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    formik;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.bottomSpace}>
          <Text style={styles.customerNumberText}>Enter Account Number</Text>
          <View style={styles.row}>
            <TextInput
              placeholder="Account Number"
              style={styles.textInput}
              onChangeText={handleChange('account')}
              onBlur={handleBlur('account')}
              value={values.account}
              placeholderTextColor={Colors.gray}
            />
            <TouchableOpacity style={styles.verifyButton}>
              <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>
          </View>
          {errors['account'] && touched['account'] && (
            <Text style={styles.errorText}>{errors['account']}</Text>
          )}
        </View>
        <Text style={styles.customerNumberText}>Enter IFSC</Text>
        <View style={styles.bottomSpace}>
          <View style={styles.row}>
            <TextInput
              placeholder="IFSC"
              style={styles.textInput}
              onChangeText={handleChange('ifsc')}
              onBlur={handleBlur('ifsc')}
              value={values.ifsc}
              placeholderTextColor={Colors.gray}
            />
            <TouchableOpacity style={styles.verifyButton}>
              <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>
          </View>
          {errors['ifsc'] && touched['ifsc'] && (
            <Text style={styles.errorText}>{errors['ifsc']}</Text>
          )}
        </View>
        <View style={styles.bottomSpace}>
          <Text style={styles.customerNumberText}>Enter Recipient Name</Text>
          <TextInput
            placeholder="Recepient Name"
            style={styles.textInput}
            onChangeText={handleChange('recipient_name')}
            onBlur={handleBlur('recipient_name')}
            value={values.recipient_name}
            placeholderTextColor={Colors.gray}
          />
          {errors['recipient_name'] && touched['recipient_name'] && (
            <Text style={styles.errorText}>{errors['recipient_name']}</Text>
          )}
        </View>
        <View style={styles.bottomSpace}>
          <Text style={styles.customerNumberText}>Enter Amount</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="Amount"
            style={styles.textInput}
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount}
            placeholderTextColor={Colors.gray}
          />
          {errors['amount'] && touched['amount'] && (
            <Text style={styles.errorText}>{errors['amount']}</Text>
          )}
        </View>
        <View style={styles.bottomSpace}>
          <Text style={styles.customerNumberText}>Enter Sender Name</Text>
          <TextInput
            placeholder="Sender Name"
            style={styles.textInput}
            onChangeText={handleChange('sender_name')}
            onBlur={handleBlur('sender_name')}
            value={values.sender_name}
            placeholderTextColor={Colors.gray}
          />
          {errors['sender_name'] && touched['sender_name'] && (
            <Text style={styles.errorText}>{errors['sender_name']}</Text>
          )}
        </View>
        <View style={styles.bottomSpace}>
          <Text style={styles.customerNumberText}>Enter Remarks</Text>
          <TextInput
            placeholder="Remarks"
            style={styles.textInput}
            onChangeText={handleChange('remarks')}
            onBlur={handleBlur('remarks')}
            value={values.remarks}
            placeholderTextColor={Colors.gray}
          />
          {errors['remarks'] && touched['remarks'] && (
            <Text style={styles.errorText}>{errors['remarks']}</Text>
          )}
        </View>
        <TouchableOpacity
          disabled={isLoading}
          style={styles.validateButton}
          onPress={() => handleSubmit()}>
          {isLoading ? (
            <ActivityIndicator color={Colors.light} size={moderateScale(25)} />
          ) : (
            <Text style={styles.validateText}>Transfer</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MoneyTransfer1;
