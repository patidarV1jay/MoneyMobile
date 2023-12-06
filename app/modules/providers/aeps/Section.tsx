import { CaretRight } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Colors, moderateScale } from '../../../theme';
import styles from './AEPSStyles';
import useAEPS from './useAEPS';
interface props {
  title: String;
  onPress: () => void;
}
const Section = ({ title, onPress }: props) => {
  const { navigateAgentOnBoard } = useAEPS();
  return (
    <TouchableWithoutFeedback style={styles.footerStyles} onPress={onPress}>
      <View style={styles.bottomSectionView}>
        <Text style={styles.ledgerText}>{title}</Text>
        <CaretRight
          size={moderateScale(22)}
          weight="bold"
          color={Colors.cornFlowerBlue}
        />
      </View>
      <View style={styles.line} />
    </TouchableWithoutFeedback>
  );
};

export default Section;
