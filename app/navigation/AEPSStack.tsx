import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { AepsReportHeader, SearchHeader } from '../components';
import { Routes } from '../constants';
import { AEPS, AepsLedgerReport, AepsReport, AgentOnBoard } from '../modules';

const StackAEPS = createNativeStackNavigator();

const AEPSStack = () => {
  return (
    <StackAEPS.Navigator>
      <StackAEPS.Screen
        name={Routes.Aeps}
        component={AEPS}
        options={{
          header: () => (
            <SearchHeader Icon={ArrowLeft} name={Routes.Aeps} Flag={false} />
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
    </StackAEPS.Navigator>
  );
};

export default AEPSStack;
