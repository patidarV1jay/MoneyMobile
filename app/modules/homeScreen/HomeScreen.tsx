import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ImageList } from '../../constants';
import styles from './HomeScreenStyles';
import useHomeScreen from './useHomeScreen';

const HomeScreen = () => {
  const { isSuccess } = useHomeScreen();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerWithFlatlist}>
          <FlatList
            data={ImageList}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatListContainer}>
                  <Image source={item.source} style={styles.imageItem} />
                  <Text style={[styles.textColor, { marginTop: -10 }]}>
                    {item.name}
                  </Text>
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
