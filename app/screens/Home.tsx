import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';
import BottomButtons from '../components/BottomButtons';
import TimeSeriesChart from '../components/TimeSeriesChart';

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselSection}>
        <CarouselComponent navigation={navigation} />
      </View>
      <View style={styles.chartSection}>
          <TimeSeriesChart useFirstEntry={true}/>
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
    padding: 20,
    height: "20%",
  },
  chartSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    // Additional styles if needed
  },
});

export default HomeScreen;
