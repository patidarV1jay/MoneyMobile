import React from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './MobileProviderStyles';
import useMobileProvider from './useMobileProvider';

const MobileProvider = () => {
  const { navigateProviderDetails } = useMobileProvider();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.list}
        onPress={navigateProviderDetails}>
        <Text style={styles.providerNameText}>Airtel</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MobileProvider;
