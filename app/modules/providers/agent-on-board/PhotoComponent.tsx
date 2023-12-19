import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { verticleScale } from '../../../theme';
import styles from './AgentOnBoardStyles';
import useAgentOnBoard from './useAgentOnBoard';
interface props {
  serialNumber: number;
  photoText: String;
  setIsImagePickerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}
const PhotoComponent = ({
  serialNumber,
  photoText,
  setIsImagePickerVisible,
  image,
}: props) => {
  const { requestPermission } = useAgentOnBoard();

  return (
    <TouchableOpacity
      style={styles.photoContainer}
      onPress={() => setIsImagePickerVisible(true)}>
      <View style={styles.numnImage}>
        <Text style={styles.numberText}>{serialNumber}</Text>
        {image ? (
          <Image
            source={{
              uri: image,
            }}
            style={{ resizeMode:'contain', height:verticleScale(250), aspectRatio:1 }}
          />
        ) : (
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
            }}
            style={styles.userImage}
          />
        )}
      </View>
      <Text style={styles.photoText}>{photoText}</Text>
    </TouchableOpacity>
  );
};

export default PhotoComponent;
