import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { iconsArray } from '../../constants';
import styles from './HomeScreenStyles';
import useHomeScreen from './useHomeScreen';

const HomeScreen = () => {
  const { isSuccess } = useHomeScreen();

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
