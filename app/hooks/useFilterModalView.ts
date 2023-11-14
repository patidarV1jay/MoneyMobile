import { createContext } from 'react';

export interface FilterToggleType {
  viewFilter: boolean;
  setViewFilters: React.Dispatch<React.SetStateAction<boolean>>;
}
const FilterToggle = createContext<FilterToggleType>({
  viewFilter: false,
  setViewFilters: () => {},
});

export default FilterToggle;
