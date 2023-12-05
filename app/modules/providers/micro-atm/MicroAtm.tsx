import React from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MicroatmIcons } from '../../../constants';
import styles from './MicroAtmStyles';

const MicroAtm = () => {
    
  return (
    <View style={styles.container}>
      <FlatList
        data={MicroatmIcons}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatlistContainer}>
              <Image source={item.source} style={styles.imageItem} />
              <Text style={styles.itemNameText}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MicroAtm;
