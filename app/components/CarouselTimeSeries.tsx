import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import colors from '../../types/colors';
import TimeSeriesChart from './TimeSeriesChart';

function CarouselComponent(navigation: any) {
  const width = Dimensions.get('window').width;

  // Step 1: Define your data array with objects containing title, value, and text.

  const chartData = [
    {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [100, 110, 115, 110, 105, 110],
          color: (opacity = 1) => colors.primary, // Line color
          strokeWidth: 2,
        },
      ],
    },

    {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [100, 110, 115, 110, 105, 110],
          color: (opacity = 1) => colors.primary, // Line color
          strokeWidth: 2,
        },
      ],
    },
  ];

  // Step 3: Adjust the renderItem function to pass the data to CarouselItem.
  const renderItem = ({ item }: { item: {labels: any, datasets: any} }) => (
    <TimeSeriesChart chartData={item} /> // Pass the data object as a prop to CarouselItem.
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={width}
        height={width * 2 / 3}
        autoPlay={false}
        data={chartData}
        scrollAnimationDuration={1000}
        onSnapToItem={(index: number) => console.log('current index:', index)}
        renderItem={renderItem}
        style={styles.carouselContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
  },
});

export default CarouselComponent;
