import { useFormik } from 'formik';
import { useState } from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Images } from '../../../assets';
import { AgentOnBoardSchema } from '../../../constants';
import { Alert } from 'react-native';

const useAgentOnBoard = () => {
  const [image, setImage] = useState<string | undefined>(Images.userImage);
  const [galleryView, setGalleryView] = useState<boolean>(false);

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
    console.log(galleryView);
    setGalleryView(!galleryView);
  };

  const launchLibrary = async () => {
    const option: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const response = await launchImageLibrary(option);
    if (response?.assets?.[0]?.fileSize) setImage(response?.assets?.[0].uri);
  };

  const requestPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
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
          launchLibrary();
          break;
        case RESULTS.BLOCKED:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    formik,
    requestPermission,
    toggleModal,
    galleryView,
    setGalleryView,
  };
};

export default useAgentOnBoard;
