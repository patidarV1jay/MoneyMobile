import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { AepsReportHeader, SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  AEPS,
  AepsLedgerReport,
  AepsReport,
  AgentOnBoard,
  BalanceEnquiry,
} from '../modules';

const StackAEPS = createNativeStackNavigator();

const AEPSStack = () => {
  return (
    <StackAEPS.Navigator>
      <StackAEPS.Screen
        name={Routes.Aeps}
        component={AEPS}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.Aeps}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.AgentOnBoard}
        component={AgentOnBoard}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.AgentOnBoard}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.AepsLedgerReport}
        component={AepsLedgerReport}
        options={{
          header: () => <AepsReportHeader name={Routes.AepsLedgerReport} />,
        }}
      />
      <StackAEPS.Screen
        name={Routes.AepsReport}
        component={AepsReport}
        options={{
          header: () => <AepsReportHeader name={Routes.AepsReport} />,
        }}
      />
      <StackAEPS.Screen
        name={Routes.BalanceEnquiry}
        component={BalanceEnquiry}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.BalanceEnquiry}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
    </StackAEPS.Navigator>
  );
};

export default AEPSStack;
