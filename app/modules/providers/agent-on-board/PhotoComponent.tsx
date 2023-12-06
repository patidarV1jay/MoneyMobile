import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../../assets';
import styles from './AgentOnBoardStyles';
import useAgentOnBoard from './useAgentOnBoard';
interface props {
  serialNumber: number;
  photoText: String;
}
const PhotoComponent = ({ serialNumber, photoText }: props) => {
  const { requestPermission } = useAgentOnBoard();
  return (
    <TouchableOpacity style={styles.photoContainer} onPress={requestPermission}>
      <View style={styles.numnImage}>
        <Text style={styles.numberText}>{serialNumber}</Text>
        <Image source={Images.userImage} style={styles.userImage} />
      </View>
      <Text style={styles.photoText}>{photoText}</Text>
    </TouchableOpacity>
  );
};

export default PhotoComponent;
