import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Switch,
} from 'react-native';

const FilterModel = (props) => {

  // Toggle Switch
  const [isSwitchEnable, setSwitchEnable] = useState('Most Popular');

  const toggleSwitch = (switchNumber) => {
    setSwitchEnable(switchNumber === isSwitchEnable ? '' : switchNumber);
  };

  const releasesSwitch = (value) => { toggleSwitch('Releases') };
  const oldSwitch = (value) => { toggleSwitch('Old Movies') };
  const mostpopularSwitch = (value) => { toggleSwitch('Most Popular') };
  const lesspopularSwitch = (value) => { toggleSwitch('Least Popular') };
  const higherrevenueSwitch = (value) => { toggleSwitch('Highest Grossing') };
  const lowestrevenueSwitch = (value) => { toggleSwitch('Least Grossing') };

  // Animation
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  useEffect(() => {
    resetPositionAnim.start();
  }, [resetPositionAnim]);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        }
        return resetPositionAnim.start();
      },
    }),
  ).current;

  // Modal Close
  const handleDismiss = () => closeAnim.start(props.onDismiss);

  return (
    <Modal
      animated
      animationType="fade"
      visible={props.visible}
      transparent
      onRequestClose={handleDismiss}>
      <View style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.container,
            transform: [{ translateY: translateY }],
          }}
          {...panResponders.panHandlers}>

          <View style={styles.mainContainerWrapper}>
            <View style={styles.topBar}>
              <Text style={styles.filterTxt}>Filter</Text>
            </View>
            <View style={styles.mainContainer}>
              <View style={styles.filterViewWrapper}>
                <Text style={styles.filterTxt}>Date</Text>
                <View style={styles.filterView}>
                  <Text style={styles.filterTxt}>Releases</Text>
                  <Switch
                    style={styles.switch}
                    onValueChange={releasesSwitch}
                    value={isSwitchEnable === 'Releases'}
                    trackColor={{ false: "grey", true: "#2f2f2f" }}
                    thumbColor={isSwitchEnable !== 'Releases' ? "#fff" : "#146960"}
                  />
                </View>
                <View style={styles.filterView}>
                  <Text style={styles.filterTxt}>Old</Text>
                  <Switch
                    style={styles.switch}
                    onValueChange={oldSwitch}
                    value={isSwitchEnable === 'Old Movies'}
                    trackColor={{ false: "grey", true: "#2f2f2f" }}
                    thumbColor={isSwitchEnable !== 'Old Movies' ? "#fff" : "#146960"}
                  />
                </View>
              </View>
              <View style={styles.filterViewWrapper}>
                <Text style={styles.filterTxt}>Popularity</Text>
                <View style={styles.filterView}>
                  <Text style={styles.filterTxt}>Most popular</Text>
                  <Switch
                    style={styles.switch}
                    onValueChange={mostpopularSwitch}
                    value={isSwitchEnable === 'Most Popular'}
                    trackColor={{ false: "grey", true: "#2f2f2f" }}
                    thumbColor={isSwitchEnable !== 'Most Popular' ? "#fff" : "#146960"}
                  />
                </View>
                <View style={styles.filterView}>
                  <Text style={styles.filterTxt}>Less popular</Text>
                  <Switch
                    style={styles.switch}
                    onValueChange={lesspopularSwitch}
                    value={isSwitchEnable === 'Least Popular'}
                    trackColor={{ false: "grey", true: "#2f2f2f" }}
                    thumbColor={isSwitchEnable !== 'Least Popular' ? "#fff" : "#146960"}
                  />
                </View>
              </View>
              <View style={styles.filterViewWrapper}>
                <Text style={styles.filterTxt}>Revenue</Text>
                <View style={styles.filterView}>
                  <Text style={styles.filterTxt}>Higher revenue</Text>
                  <Switch
                    style={styles.switch}
                    onValueChange={higherrevenueSwitch}
                    value={isSwitchEnable === 'Highest Grossing'}
                    trackColor={{ false: "grey", true: "#2f2f2f" }}
                    thumbColor={isSwitchEnable !== 'Highest Grossing' ? "#fff" : "#146960"}
                  />
                </View>
                <View style={styles.filterView}>
                  <Text style={styles.filterTxt}>Lowest revenue</Text>
                  <Switch
                    style={styles.switch}
                    onValueChange={lowestrevenueSwitch}
                    value={isSwitchEnable === 'Least Grossing'}
                    trackColor={{ false: "grey", true: "#2f2f2f" }}
                    thumbColor={isSwitchEnable !== 'Least Grossing' ? "#fff" : "#146960"}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => {
                props.activeFilter(isSwitchEnable);
                handleDismiss();
              }}
            >
              <Text style={styles.confirmBtnTxt}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#171717',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    minHeight: 400,
  },
  sliderIndicatorRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIndicator: {
    backgroundColor: '#CECECE',
    height: 4,
    width: 45,
  },
  mainContainerWrapper: {
    marginTop: 15,
  },
  mainContainer: {
    marginBottom: 30,
  },
  topBar: {
    alignItems: 'center',
  },
  filterViewWrapper: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  filterView: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  filterTxt: {
    color: 'grey',
    fontSize: 18,
  },
  confirmBtn: {
    height: '10%',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B434C',
    borderRadius: 30,
  },
  confirmBtnTxt: {
    fontSize: 18,
    fontWeight: '300',
    color: 'rgba(255,255,255,1)'
  },
  switch: {
    transform: [{ scale: .75 }]
  },
});

export default FilterModel;

