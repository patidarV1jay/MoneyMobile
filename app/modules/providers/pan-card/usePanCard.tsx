import { useState } from 'react';
import { Keyboard } from 'react-native';

const usePanCard = () => {
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);
  const [count,setCount] = useState<number>()
  const quantity = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const toggleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
    Keyboard.dismiss();
  };
  const setQuantity = (item : number)=>{
      setCount(item)
      setDropDownVisible(false)
  }
  return {
    setDropDownVisible,
    dropDownVisible,
    toggleDropDown,
    quantity,
    count,
    setCount,
    setQuantity
  };
};

export default usePanCard;
