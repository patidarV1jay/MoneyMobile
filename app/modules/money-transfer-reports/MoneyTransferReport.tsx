import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import styles from './MoneyTransferReportStyles';
import { FilterWindow } from '../../components';
import { Images } from '../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MoneyTransferReport = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.banknDetailsView}>
          <View style={styles.banknDetailsView}>
            <Image source={Images.bankIcon} style={styles.bankImage} />
            <View style={styles.detailsView}>
              <Text>NAME</Text>
              <Text>NAME</Text>
              <Text>NAME</Text>
              <Text>NAME</Text>
              <Text>NAME</Text>
              <Text>NAME</Text>
            </View>
          </View>
          <View style={styles.greenTicknView}>
              <Image source={Images.greenTick} style={styles.greenTickImage} />
            <TouchableOpacity>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FilterWindow />
    </View>
  );
};

export default MoneyTransferReport;
