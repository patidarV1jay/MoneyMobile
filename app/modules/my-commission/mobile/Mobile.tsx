import { Minus, Plus } from 'phosphor-react-native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenStrings } from '../../../constants';
import { Colors, moderateScale } from '../../../theme';
import styles from './MobileStyles';
import RenderTable from './RenderTable';
import useMyMobile from './useMyMobile';

interface Item {
  item: {
    id: string;
    name: string;
    service: string;
    flag: boolean;
  };
}

const Mobile = () => {
  const { toggleCommissionVisibility, data } = useMyMobile();
  const renderHeader: (label: string) => React.JSX.Element = (
    label: string,
  ) => (
    <View style={styles.columnHeader}>
      <Text style={styles.columnHeaderText}>{label}</Text>
    </View>
  );

  const renderItem = ({ item }: Item) => (
    <View style={styles.flatlistContainer}>
      <View style={styles.dataRow}>
        <Text style={[styles.data, styles.idText]}>{item.id}</Text>
        <Text style={[styles.data, styles.providerName]}>{item.name}</Text>
        <Text style={[styles.data, styles.serviceText]}>{item.service}</Text>
        <TouchableOpacity
          style={[styles.data, styles.icon]}
          onPress={() => toggleCommissionVisibility(item.id)}>
          {!item.flag ? (
            <Plus size={moderateScale(18)} weight="bold" color={Colors.light} />
          ) : (
            <Minus
              size={moderateScale(18)}
              weight="bold"
              color={Colors.light}
            />
          )}
        </TouchableOpacity>
      </View>
      {item.flag && (
        <View style={styles.renderTableMargin}>
          <RenderTable
            minAmount={ScreenStrings.minAmount}
            maxAmount={ScreenStrings.maxAmount}
            commission={ScreenStrings.commission}
          />
          <RenderTable minAmount="10" maxAmount="3000" commission="2%" />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {renderHeader(ScreenStrings.providerId)}
        {renderHeader(ScreenStrings.providerName)}
        {renderHeader(ScreenStrings.service)}
        {renderHeader(ScreenStrings.action)}
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Mobile;
