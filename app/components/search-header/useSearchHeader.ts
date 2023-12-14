import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const useSearchHeader = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [isDatePop, setDatePop] = useState<boolean>(false);
  const [showDate, setShowDate] = useState<boolean>(false);
  const [showToDate, setShoTowDate] = useState<boolean>(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
    name: string,
  ) => {
    const currentDate = selectedDate;
    name === 'from' && setShowDate(true);
    name === 'to' && setShoTowDate(true);
    currentDate && name === 'from' && setDate(currentDate);
    currentDate && name === 'to' && setToDate(currentDate);
  };

  const showMode = (name: string) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (a, b) => onChange(a, b, name),
      onTouchCancel: () => console.log('cancel'),
      is24Hour: true,
    });
  };
  return {
    navigation,
    showMode,
    isDatePop,
    setDatePop,
    date,
    showDate,
    toDate,
    showToDate,
  };
};

export default useSearchHeader;
