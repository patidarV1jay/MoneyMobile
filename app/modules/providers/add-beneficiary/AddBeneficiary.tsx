import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import styles from './AddBeneficiaryStyles';
import { Placeholder, ScreenStrings } from '../../../constants';
import useAddBeneficiary from './useAddBeneficiary';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useInputRef } from '../../../hooks';
import { AgentOnBoardTextInput } from '../../../components';
import { CaretDown } from 'phosphor-react-native';
import { moderateScale } from '../../../theme';
interface Item {
  item: string;
}
const AddBeneficiary = () => {
  const {
    toggleVisibility,
    data,
    isBankVisible,
    selectCityButton,
    snapPoints,
    handleSheetChange,
    sheetRef,
    isCity,
    formik,
  } = useAddBeneficiary();

  const { refAccountNumber, refBeneficiaryName, focusNextTextInput } =
    useInputRef();

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
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.bankText}>{ScreenStrings.selectBank}</Text>
        <Pressable style={styles.bankView} onPress={toggleVisibility}>
          <Text style={styles.selectedBank}>{isCity}</Text>
          <CaretDown size={moderateScale(22)} weight="fill" />
        </Pressable>
        <Text style={styles.headerText}>{ScreenStrings.ifsc}</Text>
        <AgentOnBoardTextInput
          placeholder={Placeholder.ifsc}
          style={styles.textInputStyles}
          formik={formik}
          name="ifsc"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          keyboardType="number-pad"
          onSubmitEditing={() => focusNextTextInput(refAccountNumber)}
          returnKeyType="next"
        />
        <Text style={styles.headerText}>{ScreenStrings.accountNumber}</Text>
        <AgentOnBoardTextInput
          inputRef={refAccountNumber}
          placeholder={Placeholder.accountNumber}
          style={styles.textInputStyles}
          formik={formik}
          name="accountNumber"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          onSubmitEditing={() => focusNextTextInput(refBeneficiaryName)}
          returnKeyType="next"
        />
        <Text style={styles.headerText}>{ScreenStrings.beneficiaryName}</Text>
        <AgentOnBoardTextInput
          inputRef={refBeneficiaryName}
          placeholder={Placeholder.beneficiaryName}
          style={styles.textInputStyles}
          formik={formik}
          name="beneficiaryName"
          styleView={styles.textInputView}
          styleErrorView={styles.errorView}
          styleErrorText={styles.errorText}
          secureTextEntry={false}
          keyboardType="default"
          returnKeyType="done"
        />
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
              contentContainerStyle={styles.bottomSheetContainer}
            />
          </BottomSheet>
        )}
      </View>
    </View>
  );
};

export default AddBeneficiary;
