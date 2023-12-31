import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './PaymentRequestStyles';
import { CaretRight } from 'phosphor-react-native';
import { moderateScale } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  name: string;
  source: number;
  onPress: () => void;
}
const Card = ({ name, source, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={source} style={styles.imageItem} />
      <Text style={styles.itemNameText}>{name}</Text>
      <View style={styles.caretView}>
        <CaretRight size={moderateScale(25)} weight="bold" />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
