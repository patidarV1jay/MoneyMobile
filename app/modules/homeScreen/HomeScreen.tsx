import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { iconsArray } from '../../constants';
import { RootStackParamList } from '../../types';
import styles from './HomeScreenStyles';

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerWithFlatlist}>
          <FlatList
            data={iconsArray}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatListContainer}>
                  <Image source={{ uri: item }} style={styles.imageItem} />
                </View>
              );
            }}
            numColumns={3}
            key={3}
            scrollEnabled={false}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
