import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Routes, SigninSchema } from '../../../constants';
import { useKeyboard } from '../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { NetworkInfo } from 'react-native-network-info';
import { getSignin } from '../../../redux';

const useSignin = () => {
  const { isKeyboardVisible } = useKeyboard();
  const dispatch = useAppDispatch();
  const { isSuccess, data, isloading } = useAppSelector(state => state.signin);
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [cordinates, setCordinates] = useState<GeoPosition>();
  const [IP, setIP] = useState<string>('');

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
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        Geolocation.getCurrentPosition(
          position => {
            setCordinates(position);
          },
          error => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
        return true;
      } else {
        Alert.alert('Please Grant Location Permission For Accessing the App');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    isSuccess &&
      !data?.error &&
      navigation.replace(Routes.DrawerNav, {
        screen: Routes.HomeScreen,
      });
  }, [isSuccess,data]);

  useEffect(() => {
    requestLocationPermission();
    NetworkInfo.getIPV4Address()
      .then(ipAddress => {
        ipAddress && setIP(ipAddress);
      })
      .catch(e => console.log(e));
  }, []);

  const formik = useFormik({
    validationSchema: SigninSchema,
    initialValues: {
      email: 'user@gmail.com',
      password: 'SsmPay@1755',
    },
    onSubmit: values => {
      const { email, password } = values;
      dispatch(
        getSignin({
          email,
          password,
          latitude: cordinates?.coords?.latitude,
          longitude: cordinates?.coords?.longitude,
          ip: IP,
          userAgent: JSON.stringify(Platform.constants),
        }),
      );
    },
  });

  const toggleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  // useEffect(() => {
  //   if (isSuccess && data?.two_factor_authentication) {
  //     return navigation.navigate(Routes.VerifyOtp, {
  //       params: {
  //         email: formik.values.email,
  //         latitude: cordinates?.coords?.latitude,
  //         longitude: cordinates?.coords?.longitude,
  //         ip: IP,
  //         userAgent: JSON.stringify(Platform.constants),
  //       },
  //     });
  //   } else if (isSuccess && data.token) {
  //     return navigation.replace(Routes.DrawerNav, {
  //       screen: Routes.HomeScreen,
  //     });
  //   } else if (isSuccess && !data.password_reset) {
  //      return navigation.navigate(Routes.PasswordReset)
  //     return navigation.replace(Routes.DrawerNav, {
  //       screen: Routes.HomeScreen,
  //     });
  //   }
  // }, [isSuccess, isloading]);

  return {
    navigation,
    isKeyboardVisible,
    formik,
    toggleSecureEntry,
    isSecureEntry,
  };
};

export default useSignin;
