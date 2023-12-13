import React, { Dispatch, SetStateAction } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../assets';
import { Placeholder, ScreenStrings } from '../../constants';
import ReceiptCard from './ReceiptCard';
import styles from './ReceiptModalStyles';
import useReceiptModal from './useReceiptModal';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from '../../theme';

interface Props {
  isReceiptVisible: boolean;
  toggleReceiptVisibility: () => void;
  setReceiptVisible: Dispatch<SetStateAction<boolean>>;
}

const ReceiptModal = ({
  isReceiptVisible,
  toggleReceiptVisibility,
  setReceiptVisible,
}: Props) => {
  const { toggleDispute, isDisputeVisisble } = useReceiptModal();

  const renderCard = (title: string, amount: string) => (
    <View>
      <Text style={styles.modalText}>{title}</Text>
      <Text style={styles.modalBalanceText}>{amount}</Text>
    </View>
  );

  return (
    <>
      <Modal
        visible={isReceiptVisible}
        transparent
        animationType="fade"
        onRequestClose={toggleReceiptVisibility}>
        <View style={styles.modalContainer}>
          <View
            style={styles.modalCloseView}
            onTouchEnd={toggleReceiptVisibility}
          />
          <View style={styles.modalContentView}>
            <View style={styles.imagenSuccess}>
              <Image source={Images.userImage} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.modalSuccessText}>
                  {ScreenStrings.success}
                </Text>
              </View>
            </View>
            <View style={styles.hrLine} />
            <View style={styles.balanceView}>
              {renderCard(ScreenStrings.opBal, 'Rs')}
              {renderCard(ScreenStrings.amount, '80')}
              {renderCard(ScreenStrings.clBal, 'Rs')}
            </View>
            <View style={styles.hrLine} />
            <View style={styles.columnView}>
              <ReceiptCard
                title={ScreenStrings.customerNumber}
                secondaryTitle={ScreenStrings.transcationId}
              />
              <ReceiptCard
                title={ScreenStrings.commissionText}
                secondaryTitle={ScreenStrings.dateAndTime}
              />
            </View>
            <View style={styles.hrLine} />
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.commonStylesButton}
                onPress={() => {
                  setReceiptVisible(false);
                  toggleDispute();
                }}>
                <Text style={styles.buttonText}>{ScreenStrings.dispute}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commonStylesButton}>
                <Text style={styles.buttonText}>{ScreenStrings.share}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={styles.modalCloseView}
            onTouchEnd={toggleReceiptVisibility}
          />
        </View>
      </Modal>
      <Modal visible={isDisputeVisisble} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View onTouchEnd={toggleDispute} style={styles.modalCloseView} />
          <View style={[styles.modalContentView, styles.disputeContainer]}>
            <Text onPress={toggleDispute} style={styles.disputeText}>
              {ScreenStrings.dispute}
            </Text>
            <Text style={styles.headerText}>{ScreenStrings.reportId}</Text>
            <View style={styles.inputView}>
              <Text style={styles.text}>294286</Text>
            </View>
            <Text style={styles.headerText}>{ScreenStrings.provider}</Text>
            <View style={styles.inputView}>
              <Text style={styles.text}>294286</Text>
            </View>
            <Text style={styles.headerText}>{ScreenStrings.number}</Text>
            <View style={styles.inputView}>
              <Text style={styles.text}>294286</Text>
            </View>
            <View style={styles.reasonView}>
              <Text>{ScreenStrings.chooseReason}</Text>
            </View>
            <Text style={[styles.headerText, styles.messageText]}>
              {ScreenStrings.message}
            </Text>
            <TextInput
              placeholder={Placeholder.enterMessage}
              style={styles.enterMessageView}
              placeholderTextColor={Colors.dark}
            />
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.commonStylesButton}>
                <Text style={styles.buttonText}>{ScreenStrings.submit}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.commonStylesButton}
                onPress={toggleDispute}>
                <Text style={styles.buttonText}>{ScreenStrings.close}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View onTouchEnd={toggleDispute} style={styles.modalCloseView} />
        </View>
      </Modal>
    </>
  );
};

export default ReceiptModal;
