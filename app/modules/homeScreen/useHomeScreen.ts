import { useAppSelector } from '../../redux';

const useHomeScreen = () => {
  const { isSuccess } = useAppSelector(state => state.signin);
  return {
    isSuccess,
  };
};

export default useHomeScreen;
