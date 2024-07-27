import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Alert, Linking, ToastAndroid } from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { KYCSchema } from '../../../constants';
import { useDateTime } from '../../../hooks';
import { getKyc, useAppDispatch } from '../../../redux';

const useKyc = () => {
  const dispatch = useAppDispatch();
  const [imagePicker, setIsImagePicker] = useState<boolean>(false);
  const [id, setID] = useState<number>(0);
  const [personalPanCard, setPersonalPanCard] = useState<string>('');
  const [aadharCard, setAadharCard] = useState<string>('');
  const [profilePhoto, setProfilePhoto] = useState<string>('');
  const [companyPhoto, setCompanyPhoto] = useState<string>('');
  const { birthDate, showDatepicker } = useDateTime();

  const initialValues = {
    dateOfBirth: '',
    name: '',
    email: '',
    mobile: '',
    personal_pan: '',
    aadhar: '',
    company_name: '',
    pan: '',
    gst: '',
    website: '',
    cin: '',
    business_profile: '',
    master_state_id: '',
    address: '',
    account_number: '',
    ifsc: '',
    bank_name: '',
    acc_holder_name: '',
    personalPanCard: '',
    aadharCard: '',
    profilePhoto: '',
    companyPhoto: '',
  };

  const handleValidation = () => {
    if (!birthDate) {
      return ToastAndroid.show(
        'Please, Enter Your Birthdate',
        ToastAndroid.SHORT,
      );
    } else if (!personalPanCard) {
      return ToastAndroid.show(
        'Please, Upload You Pan Card',
        ToastAndroid.SHORT,
      );
    } else if (!aadharCard) {
      return ToastAndroid.show(
        'Please, Upload Your Aadhar Card',
        ToastAndroid.SHORT,
      );
    } else if (!profilePhoto) {
      return ToastAndroid.show(
        'Please, Enter Upload Your Profile Photo',
        ToastAndroid.SHORT,
      );
    }
    return true;
  };
  const formik = useFormik({
    initialValues,
    validationSchema: KYCSchema,
    onSubmit: (values) => {
      if (handleValidation()) {
         dispatch(getKyc(values))
      }
    },
  });
  console.log(formik.values);
  useEffect(() => {
    formik.setFieldValue('dateOfBirth', birthDate ?? '');
    formik.setFieldValue('personalPanCard', personalPanCard);
    formik.setFieldValue('aadharCard', aadharCard);
    formik.setFieldValue('profilePhoto', profilePhoto);
    formik.setFieldValue('companyPhoto', companyPhoto);
  }, [birthDate, personalPanCard, aadharCard, profilePhoto, companyPhoto]);

  const camera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    const response = await launchCamera(options);
    if (response.didCancel) {
      console.log('cancel');
    } else {
      const imageUri = response.assets?.[0]?.uri;
      imageUri && id == 1 && setPersonalPanCard(imageUri);
      imageUri && id == 2 && setAadharCard(imageUri);
      imageUri && id == 3 && setProfilePhoto(imageUri);
      imageUri && id == 4 && setCompanyPhoto(imageUri);
    }
  };

  const launchLibrary = async () => {
    const option: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const response = await launchImageLibrary(option);
    const imageUri = response.assets?.[0]?.uri;
    imageUri && id == 1 && setPersonalPanCard(imageUri);
    imageUri && id == 2 && setAadharCard(imageUri);
    imageUri && id == 3 && setProfilePhoto(imageUri);
    imageUri && id == 4 && setCompanyPhoto(imageUri);
  };

  const handleGallery = async (req: string) => {
    const response = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    handleResponse(response, req);
  };

  const handleCamera = async (req: string) => {
    const response = await request(PERMISSIONS.ANDROID.CAMERA);
    handleResponse(response, req);
  };

  const handleResponse = (response: string, req: string) => {
    switch (response) {
      case RESULTS.GRANTED: {
        setIsImagePicker(false);
        req === 'Camera' && camera();
        req === 'Photos and videos' && launchLibrary();
      }
      case RESULTS.BLOCKED: {
        Alert.alert(
          'Permissions Required',
          `App needs ${req} access. Tap Settings > Permissions and allow ${req}.`,
          [
            {
              text: 'Settings',
              onPress: () => Linking.openSettings(),
            },
            {
              text: 'Later',
            },
          ],
        );
      }
    }
  };

  const toggleVisibility = (id: number) => {
    setID(id);
    setIsImagePicker(true);
  };

  return {
    imagePicker,
    setIsImagePicker,
    handleGallery,
    handleCamera,
    toggleVisibility,
    personalPanCard,
    id,
    aadharCard,
    companyPhoto,
    formik,
    birthDate,
    showDatepicker,
    profilePhoto,
  };
};

export default useKyc;
