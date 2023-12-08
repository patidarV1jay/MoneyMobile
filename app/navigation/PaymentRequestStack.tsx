import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { SearchHeader } from '../components';
import { Routes } from '../constants';
import { PaymentRequest } from '../modules';

const StackPaymentRequest = createNativeStackNavigator();

const PaymentRequestStack = () => {
    
  return (
    <StackPaymentRequest.Navigator>
      <StackPaymentRequest.Screen
        name={Routes.PaymentRequest}
        component={PaymentRequest}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.PaymentRequest}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
    </StackPaymentRequest.Navigator>
  );
};

export default PaymentRequestStack;
