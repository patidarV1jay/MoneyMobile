import { CaretDown, CaretUp } from 'phosphor-react-native';
import React from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenStrings } from '../../constants';
import { moderateScale } from '../../theme';
import styles from './BalanceReturnRequestStyles';
import useBalanceRequest from './useBalanceRequest';

const BalanceReturnRequest = () => {
  const {
    toggleVisibility,
    isVisible,
    isStatusVisible,
    toggleStatusVisibility,
    setStatus,
    selectedStatus,
    setPassword,
    password,
    proceed
  } = useBalanceRequest();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.textRequestedBy}>{ScreenStrings.requestedBy}</Text>
        <Text style={styles.text}>{ScreenStrings.date}</Text>
        <Text style={styles.text}>{ScreenStrings.amount}</Text>
        <Text style={styles.text}>{ScreenStrings.remark}</Text>
        <View style={styles.pendingnButtonView}>
          <Text style={styles.pending}>{ScreenStrings.pending}</Text>
          <TouchableOpacity
            style={styles.buttonApprove}
            onPress={toggleVisibility}>
            <Text style={styles.approveText}>{ScreenStrings.approve}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={isVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.text}>{ScreenStrings.date}</Text>
            <Text style={styles.text}>{ScreenStrings.amount}</Text>
            <Text style={styles.text}>{ScreenStrings.remark}</Text>
            <View style={styles.inputView}>
              <Text style={styles.statusText}>{ScreenStrings.status}</Text>
              <View style={styles.zIndex}>
                <View
                  style={[styles.statusInput, styles.centeredText]}
                  onTouchEnd={toggleStatusVisibility}>
                  <Text style={styles.selectedStatus}>{selectedStatus}</Text>
                  {!isStatusVisible ? (
                    <CaretDown size={moderateScale(24)} weight="bold" />
                  ) : (
                    <CaretUp size={moderateScale(24)} weight="bold" />
                  )}
                </View>
                {isStatusVisible && (
                  <View style={styles.dropdown}>
                    <Text
                      style={styles.status}
                      onPress={() => setStatus(ScreenStrings.approved)}>
                      {ScreenStrings.approved}
                    </Text>
                    <Text
                      style={styles.status}
                      onPress={() => setStatus(ScreenStrings.rejected)}>
                      {ScreenStrings.rejected}
                    </Text>
                    <Text
                      style={styles.status}
                      onPress={() => setStatus(ScreenStrings.pending)}>
                      {ScreenStrings.pending}
                    </Text>
                  </View>
                )}
              </View>
              <Text style={styles.statusText}>
                {ScreenStrings.loginPassword}
              </Text>
              <TextInput
                style={styles.statusInput}
                value={password}
                onChangeText={value => setPassword(value)}
              />
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={toggleVisibility}
                style={styles.commonStylesButton}>
                <Text style={styles.buttonText}>{ScreenStrings.exit}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commonStylesButton} onPress={proceed}>
                <Text style={styles.buttonText}>{ScreenStrings.proceed}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BalanceReturnRequest;
