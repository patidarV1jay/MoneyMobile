import React, { useEffect, useState } from 'react';
import { Image, PermissionsAndroid, SafeAreaView, Text, View } from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { ImageList } from '../../constants';
import styles from './HomeScreenStyles';
import useHomeScreen from './useHomeScreen';
import Geolocation from 'react-native-geolocation-service';
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};
const HomeScreen = () => {
  const { isSuccess, navigateService, navigation } = useHomeScreen();
  const [location, setLocation] = useState(false);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerWithFlatlist}>
          <TouchableOpacity style={{backgroundColor : 'black'}} onPress={getLocation}><Text>press</Text></TouchableOpacity>
          <FlatList
            data={ImageList}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.flatListContainer}
                  onPress={() => navigateService(item.name)}>
                  <Image source={item.source} style={styles.imageItem} />
                  <Text style={[styles.textColor, styles.itemName]}>
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
