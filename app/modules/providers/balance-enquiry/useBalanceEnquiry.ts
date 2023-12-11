import BottomSheet from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { BalanceEnquirySchema } from '../../../constants';
import { TextInput } from 'react-native';

const useBalanceEnquiry = () => {
  const [isBankVisible, setIsBankVisible] = useState<boolean>(false);
  const [isCity, setIsCity] = useState<string>('Select Bank');
  const sheetRef = useRef<BottomSheet>(null);
  const aadhaarNumberRef = useRef<TextInput | null>(null);

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
    onSubmit: () => {},
  });

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
  };
};

export default useBalanceEnquiry;
