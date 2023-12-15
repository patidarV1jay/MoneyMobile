import { useFormik } from 'formik';
import { FundRequestSchema } from '../../../constants';
import { useState } from 'react';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

const useFundRequest = () => {
  const [error, setError] = useState<string>('');
  const [errorPayment, seterrorPayment] = useState<string>('');
  const [errorDate, seterrorDate] = useState<string>('');
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const validate = () => {
    if (!value) {
      setError('Please select a bank');
      return false;
    }
    if (!value2) {
      setError('');
      seterrorPayment('Please selecte payment method.');
      return false;
    }
    if (!showDate) {
      setError('');
      seterrorPayment('');
      seterrorDate('Please select a date');
      return false;
    }
    return true;
  };
  const submit = () => {
    if (validate()) {
      console.log('submit');
    }
  };
  const formik = useFormik({
    validationSchema: FundRequestSchema,
    initialValues: {
      amount: '',
      utr: '',
    },
    onSubmit: () => {
      submit();
    },
  });

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate;
    if (event.type === 'set') {
      setShowDate(true);
      seterrorDate('');
      currentDate && setDate(currentDate);
    }
  };

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      is24Hour: true,
      maximumDate: new Date(),
    });
  };

  return {
    formik,
    error,
    errorPayment,
    validate,
    value,
    value2,
    setValue,
    setValue2,
    setError,
    seterrorPayment,
    submit,
    showDate,
    showMode,
    date,
    errorDate,
  };
};

export default useFundRequest;
