import React from 'react';
import {SafeAreaView, View, StyleSheet } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import TimeSeriesChart from '../components/TimeSeriesChart';
import BottomButtons from '../components/BottomButtons';

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselSection}>
        <CarouselComponent navigation={navigation} />
      </View>
      <View style={styles.chartSection}>
        <TimeSeriesChart />
      </View>
      <View style={styles.buttonSection}>
        <BottomButtons />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills the entire screen
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  carouselSection: {
    padding: 20, // Use numbers for values in React Native styles
    height: "20%",
  },
  chartSection: {
    flex: 1, // Allows this section to expand and fill available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    // Additional styles if needed
  },
});

export default HomeScreen;
