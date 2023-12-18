import BottomSheet from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { BalanceEnquirySchema } from '../../../constants';
import { TextInput } from 'react-native';

const useMiniStatement = () => {
  const [isBankVisible, setIsBankVisible] = useState<boolean>(false);
  const [isCity, setIsCity] = useState<string>('Select Bank');
  const [value, setValue] = useState<string>('');
  const sheetRef = useRef<BottomSheet>(null);
  const aadhaarNumberRef = useRef<TextInput | null>(null);
  const [deviceError, setDeviceError] = useState<string>();
  const [bankError, setbankError] = useState<string>();

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );

  const snapPoints = useMemo(() => ['70%', '100%'], []);

  const handleSheetChange = useCallback((index: number) => {
    setIsBankVisible(index === 1 || index === 0);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const selectCityButton = (item: string) => {
    setIsCity(item);
    handleClosePress();
    setbankError('');
  };

  const toggleVisibility = () => {
    if (isBankVisible) {
      return handleClosePress();
    }
    setIsBankVisible(true);
    Keyboard.dismiss();
  };

  const formik = useFormik({
    validationSchema: BalanceEnquirySchema,
    initialValues: {
      phone: '',
      aadhaar: '',
    },
    onSubmit: () => {
      submit();
    },
  });

  const validate = () => {
    if (isCity === 'Select Bank') {
      setbankError('Please select a bank');
      return false;
    }
    if (!value) {
      setDeviceError('Please select a device.');
      setbankError('');
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validate()) {
      console.log('submit');
    }
  };

  return {
    formik,
    isBankVisible,
    setIsBankVisible,
    toggleVisibility,
    snapPoints,
    sheetRef,
    data,
    handleClosePress,
    handleSheetChange,
    selectCityButton,
    isCity,
    aadhaarNumberRef,
    value,
    setValue,
    bankError,
    setbankError,
    deviceError,
    setDeviceError,
    submit,
  };
};

export default useMiniStatement;
