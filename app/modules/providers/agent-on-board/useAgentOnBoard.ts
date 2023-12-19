import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert, Linking } from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { AgentOnBoardSchema } from '../../../constants';

const useAgentOnBoard = () => {
  const [image, setImage] = useState<string>('');
  const [galleryView, setGalleryView] = useState<boolean>(false);
  const [isImagePickerVisible, setIsImagePickerVisible] =
    useState<boolean>(false);
  const [state, setState] = useState<boolean>(false);

  const formik = useFormik({
    validationSchema: AgentOnBoardSchema,
    initialValues: {
      agentName: '',
      email: '',
      panNumber: '',
      aadhaarNumber: '',
      shopName: '',
      gstNumber: '',
      address: '',
      cityName: '',
      districtName: '',
      pinCode: '',
    },
    onSubmit: () => {},
  });

  const toggleModal = () => {
    setGalleryView(!galleryView);
  };

  const launchLibrary = async () => {
    const option: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const response = await launchImageLibrary(option);
    response?.assets?.[0]?.uri && setImage(response?.assets?.[0].uri);
  };
  const requestPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      setIsImagePickerVisible(false);

      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          Alert.alert('Please grant the necessary Permissions');
          break;
        case RESULTS.LIMITED:
          Alert.alert('Please grant the necessary Permissions');
          break;
        case RESULTS.GRANTED:
          setIsImagePickerVisible(true);
          console.log('granted');
          launchLibrary();
          break;
        case RESULTS.BLOCKED:
          Alert.alert(
            'Permissions Required',
            'App needs gallery access. Tap Settings > Permissions and turn Photos on.',
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
    } catch (error) {
      console.log(error);
    }
  };
  const camera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    const response = await launchCamera(options);
    console.log(response);
    if (response.didCancel) {
      console.log('cancel');
    } else {
      const imageUri = response.assets?.[0]?.uri;
      console.log(response?.assets?.[0]?.height);
      console.log(response?.assets?.[0]?.width);

      imageUri && setImage(imageUri);
      console.log(imageUri);
    }
  };

  const handleCamera = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);
      setIsImagePickerVisible(false);
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          Alert.alert('Please grant the necessary Permissions');
          break;
        case RESULTS.LIMITED:
          Alert.alert('Please grant the necessary Permissions');
          break;
        case RESULTS.GRANTED:
          camera();
          break;
        case RESULTS.BLOCKED:
          Alert.alert(
            'Permissions Required',
            'App needs camera access. Tap Settings > Permissions and turn Camera on.',
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

          console.log(result, 'belock');
      }
    } catch (error) {}
  };

  return {
    formik,
    requestPermission,
    toggleModal,
    galleryView,
    setGalleryView,
    isImagePickerVisible,
    setIsImagePickerVisible,
    handleCamera,
    image,
  };
};

export default useAgentOnBoard;
