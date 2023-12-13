import { useRef } from 'react';
import { Animated, Dimensions, ScrollView } from 'react-native';
import { Colors } from '../../theme';
import { useFormik } from 'formik';
import { UpiCollectionSchema } from '../../constants';

const useUPICollection = () => {
  const width = Dimensions.get('window').width;

  const animation = useRef(new Animated.Value(0)).current;
  const ScrollViewRef = useRef<ScrollView>(null);

  const logInColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: [Colors.cornFlowerBlue, Colors.light],
  });

  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: [Colors.light, Colors.cornFlowerBlue],
  });

  const borderColorLogin = animation.interpolate({
    inputRange: [0, width],
    outputRange: [Colors.cornFlowerBlue, Colors.headerColor],
  });

  const borderColorSignup = animation.interpolate({
    inputRange: [0, width],
    outputRange: [Colors.headerColor, Colors.cornFlowerBlue],
  });

  const formik = useFormik({
    validationSchema: UpiCollectionSchema,
    initialValues: {
      upiId: '',
      amount: '',
      remark: '',
    },
    onSubmit: () => {},
  });

  return {
    logInColorInterpolate,
    signupColorInterpolate,
    borderColorLogin,
    borderColorSignup,
    animation,
    ScrollViewRef,
    width,
    formik,
  };
};

export default useUPICollection;
