import BottomSheet from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { BeneficiarySchema } from '../../../constants';

const useAddBeneficiary = () => {
  const [isBankVisible, setIsBankVisible] = useState<boolean>(false);
  const [isCity, setIsCity] = useState<string>('Select Bank');
  const sheetRef = useRef<BottomSheet>(null);

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );

  const snapPoints = useMemo(() => ['70%', '100%'], []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const toggleVisibility = () => {
    if (isBankVisible) {
      return handleClosePress();
    }
    setIsBankVisible(true);
    Keyboard.dismiss();
  };

  const handleSheetChange = useCallback((index: number) => {
    setIsBankVisible(index === 1 || index === 0);
  }, []);

  const selectCityButton = (item: string) => {
    setIsCity(item);
    handleClosePress();
  };

  const formik = useFormik({
    validationSchema: BeneficiarySchema,
    initialValues: {
      ifsc: '',
      accountNumber: '',
      beneficiaryName: '',
    },
    onSubmit: () => {},
  });

  return {
    toggleVisibility,
    data,
    isBankVisible,
    selectCityButton,
    snapPoints,
    handleSheetChange,
    sheetRef,
    isCity,
    formik
  };
};

export default useAddBeneficiary;
