import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { FilterToggle } from './hooks';
import { RootStack } from './navigation';
import { persistor, store } from './redux';

const App = () => {
  const [viewFilter, setViewFilters] = useState<boolean>(false);

  return (
    <FilterToggle.Provider value={{ viewFilter, setViewFilters }}>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <RootStack />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </FilterToggle.Provider>
  );
};

export default App;
