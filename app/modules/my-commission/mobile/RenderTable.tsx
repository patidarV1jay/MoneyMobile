import { Text, View } from 'react-native';
import styles from './MobileStyles';
interface Props {
  minAmount: string;
  maxAmount: string;
  commission: string;
}

const RenderTable = ({ minAmount, maxAmount, commission }: Props) => {
  return (
    <View style={styles.renderTableContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.renderTableText}>{minAmount}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.renderTableText}>{maxAmount}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.renderTableText}>{commission}</Text>
      </View>
    </View>
  );
};

export default RenderTable;
