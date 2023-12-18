import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AgentOnBoardTextInput } from '../../../components';
import { Device, Placeholder, ScreenStrings } from '../../../constants';
import { useInputRef } from '../../../hooks';
import { Colors, verticleScale } from '../../../theme';
import styles from './CashWithdrawalStyles';
import useCashWithdrawal from './useCashWithdrawal';

interface Item {
  item: string;
}
const CashWithdrawal = () => {
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
    value,
    setValue,
    deviceError,
    setDeviceError,
    bankError,
    setbankError,
    submit,
  } = useCashWithdrawal();
  const { handleSubmit } = formik;
  const { aadhaarNumberRef, focusNextTextInput, refAmount } = useInputRef();

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
            <Text>{ScreenStrings.customerMobileNumber}</Text>
            <AgentOnBoardTextInput
              placeholder={Placeholder.phoneNumber}
              style={styles.textInputStyles}
              formik={formik}
              name="phone"
              styleView={styles.textInputView}
              styleErrorView={styles.errorView}
              styleErrorText={styles.errorText}
              secureTextEntry={false}
              keyboardType="number-pad"
              onSubmitEditing={() => focusNextTextInput(aadhaarNumberRef)}
              returnKeyType="next"
            />
            <Text>{ScreenStrings.customeraadhaarNumber}</Text>
            <AgentOnBoardTextInput
              inputRef={aadhaarNumberRef}
              placeholder={Placeholder.aadhaarNumber}
              style={styles.textInputStyles}
              formik={formik}
              name="aadhaar"
              styleView={styles.textInputView}
              styleErrorView={styles.errorView}
              styleErrorText={styles.errorText}
              secureTextEntry={false}
              onSubmitEditing={() => focusNextTextInput(refAmount)}
              keyboardType="number-pad"
              returnKeyType="next"
            />
            <Text>{ScreenStrings.amounts}</Text>
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
              keyboardType="number-pad"
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
          <Text>Bank</Text>
          <View style={styles.dropDownView} onTouchEnd={toggleVisibility}>
            <Text style={styles.selectBankText}>{isCity}</Text>
          </View>
          {bankError && <Text style={styles.error}>{bankError}</Text>}
          <Text style={styles.deviceText}>{ScreenStrings.device}</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.listItem}
            containerStyle={styles.listContainerStyle}
            data={Device}
            search={false}
            maxHeight={verticleScale(810)}
            activeColor={Colors.headerColor}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={item => {
              setValue(item.value);
              setDeviceError('');
            }}
          />
          {deviceError && <Text style={styles.error}>{deviceError}</Text>}
          <TouchableOpacity
            style={styles.scanNowButton}
            onPress={() => handleSubmit()}>
            <Text style={styles.scanNowText}>{ScreenStrings.scanNow}</Text>
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

export default CashWithdrawal;
