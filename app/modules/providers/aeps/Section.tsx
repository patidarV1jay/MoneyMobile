import { View, Text } from 'react-native';
import React from 'react';
import styles from './AEPSStyles';
import { CaretRight } from 'phosphor-react-native';
import { Colors, moderateScale } from '../../../theme';
interface props {
  title: String;
}
const Section = ({ title }: props) => {
  return (
    <View style={styles.footerStyles}>
      <View style={styles.bottomSectionView}>
        <Text style={styles.ledgerText}>{title}</Text>
        <CaretRight
          size={moderateScale(22)}
          weight="bold"
          color={Colors.cornFlowerBlue}
        />
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Section;
