import { useContext, useState } from 'react';
import { FilterChoice } from '../../constants';
import { FilterToggle } from '../../hooks';

interface item {
  id: number;
  choice: string;
  isChoosen: boolean;
}
const useFilterWindow = () => {
  const [array, setArray] = useState(FilterChoice);
  const { viewFilter, setViewFilters } = useContext(FilterToggle);
  const toggleButton = (item: item) => {
    const ButtonSelected = FilterChoice.map(elem =>
      elem.id === item.id ? { ...elem, isChoosen: !elem.isChoosen } : elem,
    );
    setArray(ButtonSelected);
    setTimeout(() => {
      setViewFilters(false);
    }, 100);
  };
  return {
    toggleButton,
    array,
    viewFilter,
    setViewFilters,
  };
};

export default useFilterWindow;
