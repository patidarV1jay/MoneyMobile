import { useState } from 'react';

const useBalanceRequest = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return {
    toggleVisibility,
    isVisible
  };
};

export default useBalanceRequest;
