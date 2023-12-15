import { MutableRefObject, useRef } from 'react';
import { TextInput } from 'react-native';

const useInputRef = () => {
  const refEmail = useRef<TextInput | null>(null);
  const refFirstName = useRef<TextInput | null>(null);
  const refLastName = useRef<TextInput | null>(null);
  const refPassword = useRef<TextInput | null>(null);
  const aadhaarNumberRef = useRef<TextInput | null>(null);
  const refPanNumber = useRef<TextInput | null>(null);
  const refShopName = useRef<TextInput | null>(null);
  const refGst = useRef<TextInput | null>(null);
  const refDistrict = useRef<TextInput | null>(null);
  const refAddress = useRef<TextInput | null>(null);
  const refCity = useRef<TextInput | null>(null);
  const refPinCode = useRef<TextInput | null>(null);
  const refCurrentPassword = useRef<TextInput | null>(null);
  const refNewPassword = useRef<TextInput | null>(null);
  const refCofirmPassword = useRef<TextInput | null>(null);
  const refUpiId = useRef<TextInput | null>(null);
  const refAmount = useRef<TextInput | null>(null);
  const refRemark = useRef<TextInput | null>(null);
  const refUtr = useRef<TextInput | null>(null);

  const focusNextTextInput = (nextRef: MutableRefObject<TextInput | null>) => {
    if (nextRef && nextRef.current) {
      nextRef.current.focus();
    }
  };

  return {
    refEmail,
    refFirstName,
    refLastName,
    focusNextTextInput,
    refPassword,
    aadhaarNumberRef,
    refPanNumber,
    refShopName,
    refGst,
    refDistrict,
    refAddress,
    refCity,
    refPinCode,
    refCurrentPassword,
    refNewPassword,
    refCofirmPassword,
    refUpiId,
    refRemark,
    refAmount,
    refUtr
  };
};

export default useInputRef;
