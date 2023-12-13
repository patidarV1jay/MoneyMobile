import { useState } from 'react';

const useAccountStatement = () => {
  const [isReceiptVisible, setReceiptVisible] = useState<boolean>(false);

  const toggleReceiptVisibility = () => setReceiptVisible(!isReceiptVisible);

  return {
    toggleReceiptVisibility,
    isReceiptVisible,
    setReceiptVisible,
  };
};

export default useAccountStatement;
