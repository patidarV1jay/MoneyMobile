import { useState } from 'react';

const useRechargeReport = () => {
  const [isReceiptVisible, setReceiptVisible] = useState<boolean>(false);

  const toggleReceiptVisibility = () => setReceiptVisible(!isReceiptVisible);

  return {
    toggleReceiptVisibility,
    isReceiptVisible,
    setReceiptVisible
  };
};

export default useRechargeReport;
