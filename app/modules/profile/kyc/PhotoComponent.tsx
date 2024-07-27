import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { verticleScale } from '../../../theme';
import styles from './KycStyles';

interface props {
  serialNumber: number;
  photoText: String;
  toggleVisibility: (id: number) => void;
  image: string;
  id: number;
}

const PhotoComponent = ({
  serialNumber,
  photoText,
  toggleVisibility,
  image,
  id,
}: props) => {
  return (
    <TouchableOpacity
      style={styles.photoContainer}
      onPress={() => toggleVisibility(serialNumber)}>
      <View style={styles.numnImage}>
        <Text style={styles.numberText}>{serialNumber}</Text>
        {image ? (
          id === 1 ? (
            <Image
              source={{
                uri: image,
              }}
              style={{
                resizeMode: 'contain',
                height: verticleScale(250),
                aspectRatio: 1,
              }}
            />
          ) : id === 2 ? (
            <Image
              source={{
                uri: image,
              }}
              style={{
                resizeMode: 'contain',
                height: verticleScale(250),
                aspectRatio: 1,
              }}
            />
          ) : id === 3 ? (
            <Image
              source={{
                uri: image,
              }}
              style={{
                resizeMode: 'contain',
                height: verticleScale(250),
                aspectRatio: 1,
              }}
            />
          ) : id === 4 ? (
            <Image
              source={{
                uri: image,
              }}
              style={{
                resizeMode: 'contain',
                height: verticleScale(250),
                aspectRatio: 1,
              }}
            />
          ) : id === 5 ? (
            <Image
              source={{
                uri: image,
              }}
              style={{
                resizeMode: 'contain',
                height: verticleScale(250),
                aspectRatio: 1,
              }}
            />
          ) : id === 6 ? (
            <Image
              source={{
                uri: image,
              }}
              style={{
                resizeMode: 'contain',
                height: verticleScale(250),
                aspectRatio: 1,
              }}
            />
          ) : (
            <></>
          )
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
