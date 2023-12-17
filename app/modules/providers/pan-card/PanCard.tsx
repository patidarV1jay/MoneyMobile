import { CaretDown, CaretUp } from 'phosphor-react-native';
import React from 'react';
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { ScreenStrings } from '../../../constants';
import { moderateScale } from '../../../theme';
import styles from './PanCardStyles';
import usePanCard from './usePanCard';

const PanCard = () => {
  const {
    dropDownVisible,
    setDropDownVisible,
    toggleDropDown,
    quantity,
    count,
    setCount,
    setQuantity,
    submit,
    setPsaText,
    psaText,
  } = usePanCard();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.textInputView}>
          <Text style={styles.userIDText}>{ScreenStrings.utitslUserId}</Text>
          <TextInput
            style={styles.textinputStyle}
            value={psaText}
            onChangeText={value => setPsaText(value)}
            onTouchEnd={() => setDropDownVisible(false)}
          />
          <View style={styles.dropDownView}>
            <Text style={styles.userIDText}>{ScreenStrings.quantity}</Text>
            <TouchableWithoutFeedback
              style={styles.quantityView}
              onPress={toggleDropDown}>
              {count ? (
                <Text style={styles.selectedCount}>{count}</Text>
              ) : (
                <Text style={styles.selectQuantity}>
                  {ScreenStrings.selectQuantity}
                </Text>
              )}
              {dropDownVisible ? (
                <CaretUp size={moderateScale(22)} weight="fill" />
              ) : (
                <CaretDown
                  size={moderateScale(moderateScale(22))}
                  weight="fill"
                />
              )}
            </TouchableWithoutFeedback>

            <TouchableOpacity style={styles.psaButton}>
              <Text style={styles.psaText}>{ScreenStrings.psa}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={submit}>
              <Text style={styles.submitText}>{ScreenStrings.submit}</Text>
            </TouchableOpacity>
            {dropDownVisible && (
              <View style={styles.viewAboveFlatlist}>
                <FlatList
                  data={quantity}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={styles.countButton}
                        onPress={() => setQuantity(item)}>
                        <Text style={styles.textItem}>{item}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PanCard;
