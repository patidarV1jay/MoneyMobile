import { ParamListBase, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { TextInputKeyPressEventData } from 'react-native';
import { TextInput, ToastAndroid } from 'react-native';
import { useAppDispatch, useAppSelector, verifyOtp } from '../../../redux';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Password } from 'phosphor-react-native';

export type OtpState = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

const useVerifyOtp = () => {
  const [count, setCount] = useState<number>(60);
  const inputs = Array(6).fill('');
  const route = useRoute();
  const inputRef = useRef<TextInput>();
  const [newOtp, setNewOtp] = useState<OtpState>({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const LastIndex = inputs.length - 1;
  const [nextInput, setNextInput] = useState(0);
  let CurrentInput = 0;
  const { params } = route.params as any;
  console.log(params);
  const { email, latitude, longitude, ip, userAgent } = params;
  //   const { status, isSucces, isloading } = useAppSelector(state => state.VerifyOtpReducer);
  const dispatch = useAppDispatch();
  //   const ActualNumber = params.split('-')[1];
  const handleChange = (text: string, index: number) => {
    const otp = { ...newOtp };
    otp[index as keyof OtpState] = text;
    setNewOtp(otp);

    if (!text) {
      CurrentInput = nextInput === 0 ? 0 : index - 1;
    } else {
      CurrentInput = nextInput === LastIndex ? LastIndex : index + 1;
    }
    setNextInput(CurrentInput);

    // status && dispatch(resetStatus());
  };

  const handlePress = (event: TextInputKeyPressEventData, index: number) => {
    if (event.key === 'Backspace') {
      CurrentInput = nextInput === 0 ? 0 : index - 1;
      setNextInput(CurrentInput);
    }
  };

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [nextInput]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (count === 0) {
  //       clearInterval(interval);
  //     } else {
  //       setCount(count - 1);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [count]);

  //   useEffect(() => {
  //     isSucces && navigation.replace(Routes.DrawerStack);
  //   }, [isSucces]);

  const handleSubmit = () => {
    for (let i = 0; i < 6; i++) {
      if (Object.values(newOtp)[i] === '') {
        return ToastAndroid.show(
          'Please Enter Complete OTP',
          ToastAndroid.SHORT,
        );
      }
    }
    const otp = Object.values(newOtp).join('');
    // dispatch(fetchVerifyOtp({ enteredOtp, ActualNumber }));
    dispatch(verifyOtp({ email, latitude, longitude, ip, userAgent, otp }));
  };

  const resendOtp = () => {
    // dispatch(fetchOtp(ActualNumber));
  };

  return {
    // params,
    inputs,
    newOtp,
    handleChange,
    inputRef,
    nextInput,
    count,
    handleSubmit,
    handlePress,
    // status,
    resendOtp,
    // isloading
  };
};

export default useVerifyOtp;
