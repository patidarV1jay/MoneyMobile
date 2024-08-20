import {
    DateTimePickerAndroid,
    DateTimePickerEvent,
  } from '@react-native-community/datetimepicker';
  import { useState } from 'react';
  
  const useDateTimePicker = () => {
    const [birthDate, setBirthDate] = useState<string>();
    const [birthTime, setBirthTime] = useState<string>();
  
    const onChange = (
      event: DateTimePickerEvent,
      selectedDate: Date | undefined,
      currentMode: string,
    ) => {
      const currentDate = selectedDate;
      if (event.type === 'set') {
        if (currentMode === 'date') {
          const formattedDate = currentDate?.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          });
          formattedDate && setBirthDate(formattedDate);
        } else {
          const formattedTime = currentDate?.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });
          formattedTime && setBirthTime(formattedTime);
        }
      }
    };
  
    const showMode = (currentMode: string | any) => {
      DateTimePickerAndroid.open({
        value: new Date(),
        maximumDate: new Date(),
        is24Hour: true,
        onChange: (event, selectedDate) =>
          onChange(event, selectedDate, currentMode),
        mode: currentMode,
      });
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return {
      showDatepicker,
      showTimepicker,
      birthDate,
      birthTime,
    };
  };
  
  export default useDateTimePicker;
  