import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AgentOnBoardTextInput } from '../../../components';
import styles from './BalanceEnquiryStyles';
import useBalanceEnquiry from './useBalanceEnquiry';

interface Item {
  item: string;
}
const BalanceEnquiry = () => {
  const {
    formik,
    toggleVisibility,
    isBankVisible,
    snapPoints,
    sheetRef,
    data,
    handleClosePress,
    handleSheetChange,
    selectCityButton,
    isCity,
  } = useBalanceEnquiry();
  const { handleSubmit } = formik;

  const renderItem = useCallback(
    ({ item }: Item) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => selectCityButton(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.viewContainingTextInputs}>
          <View onTouchEnd={handleClosePress}>
            <Text>Customer Mobile Number</Text>
            <AgentOnBoardTextInput
              placeholder="Phone Number"
              style={styles.textInputStyles}
              formik={formik}
              name="phone"
              styleView={styles.textInputView}
              styleErrorView={styles.errorView}
              styleErrorText={styles.errorText}
              secureTextEntry={false}
              keyboardType="number-pad"
            />
            <Text>Customer Aadhaar Number</Text>
            <AgentOnBoardTextInput
              placeholder="Aadhar Number"
              style={styles.textInputStyles}
              formik={formik}
              name="aadhar"
              styleView={styles.textInputView}
              styleErrorView={styles.errorView}
              styleErrorText={styles.errorText}
              secureTextEntry={false}
              keyboardType="number-pad"
            />
          </View>
          <Text>Bank</Text>
          <View style={styles.dropDownView} onTouchEnd={toggleVisibility}>
            <Text style={styles.selectBankText}>{isCity}</Text>
          </View>
          <Text style={styles.deviceText}>Device</Text>
          <View style={styles.dropDownView} onTouchEnd={toggleVisibility}>
            <Text style={styles.selectBankText}>Select Device</Text>
          </View>
          <TouchableOpacity style={styles.scanNowButton}>
            <Text style={styles.scanNowText}>SCAN NOW</Text>
          </TouchableOpacity>
        </View>

        {isBankVisible && (
          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChange}
            enablePanDownToClose={true}>
            <BottomSheetFlatList
              data={data}
              keyExtractor={i => i}
              renderItem={renderItem}
              contentContainerStyle={styles.contentContainer}
            />
          </BottomSheet>
        )}
      </View>
    </View>
  );
};

export default BalanceEnquiry;
