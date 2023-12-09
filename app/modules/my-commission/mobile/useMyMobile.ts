import { useState } from 'react';

const useMyMobile = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Provider A',
      service: 'Service A',
      action: 'Action A',
      flag: false,
    },
    {
      id: '2',
      name: 'Provider B',
      service: 'Service B',
      action: 'Action B',
      flag: false,
    },
  ]);
  const toggleCommissionVisibility = (id: string) => {
    setData(
      data.map(value =>
        value.id === id ? { ...value, flag: !value.flag } : { ...value },
      ),
    );
  };

  return {
    toggleCommissionVisibility,
    data,
  };
};

export default useMyMobile;
