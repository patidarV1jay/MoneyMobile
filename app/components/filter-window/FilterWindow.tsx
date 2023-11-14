import { Circle, RadioButton } from 'phosphor-react-native';
import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { ScreenStrings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styles from './FilterWindowStyles';
import useFilterWindow from './useFilterWindow';

const FilterWindow = () => {
  const { toggleButton, array, viewFilter, setViewFilters } = useFilterWindow();

  return (
    <Modal visible={viewFilter} transparent animationType="fade" >
      <View style={styles.mainContainer}>
        <View
          style={styles.closingView}
          onTouchEnd={() => setViewFilters(false)}
        />
        <View style={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.choiceTitle}>
              {ScreenStrings.selectYourChoice}
            </Text>
            <FlatList
              data={array}
              renderItem={({ item }) => {
                return (
                  <View style={styles.flatListView}>
                    {!item.isChoosen ? (
                      <TouchableOpacity onPress={() => toggleButton(item)}>
                        <Circle
                          size={moderateScale(28)}
                          weight="bold"
                          color={Colors.light}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => toggleButton(item)}>
                        <RadioButton
                          size={moderateScale(28)}
                          weight="fill"
                          color={Colors.light}
                        />
                      </TouchableOpacity>
                    )}
                    <Text style={styles.choiceText}>{item.choice}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={styles.closingView}
          onTouchEnd={() => setViewFilters(false)}
        />
      </View>
    </Modal>
  );
};

export default FilterWindow;
