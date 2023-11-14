import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ImageList } from '../../constants';
import styles from './HomeScreenStyles';
import useHomeScreen from './useHomeScreen';

const HomeScreen = () => {
  const { isSuccess,navigateService,navigation } = useHomeScreen();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerWithFlatlist}>
          <FlatList
            data={ImageList}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.flatListContainer} onPress={navigateService}>
                  <Image source={item.source} style={styles.imageItem} />
                  <Text style={[styles.textColor,styles.itemName]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
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
