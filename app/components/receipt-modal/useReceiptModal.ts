import { useState } from 'react';

const useReceiptModal = () => {
  const [isDisputeVisisble, setIsDisputeVisible] = useState<boolean>(false);

  const toggleDispute = () => {
    setIsDisputeVisible(!isDisputeVisisble);
  };

  return {
    isDisputeVisisble,
    toggleDispute,
  };
};

export default useReceiptModal;
