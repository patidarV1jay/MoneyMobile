import { CaretRight } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ImageList } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styles from './MyCommissionStyles';
import useMyCommission from './useMyCommission';

const MyCommission = () => {
  const { navigateProvider } = useMyCommission();

  return (
    <View style={styles.container}>
      <FlatList
        data={ImageList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => navigateProvider(item.name)}>
              <Image source={item.source} style={styles.icon} />
              <View style={styles.textnCaret}>
                <Text style={styles.text}>{item.name}</Text>
                <CaretRight
                  size={moderateScale(18)}
                  weight="bold"
                  color={Colors.light}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MyCommission;
