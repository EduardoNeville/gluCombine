import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselItem from './CarouselItem'; // Adjust the import path accordingly.

function CarouselComponent(navigation: any) {
  const width = Dimensions.get('window').width;

  // Step 1: Define your data array with objects containing title, value, and text.
  const data = [
    { head: 'Wallet', value: '£53.0', text: '+8 month over month' },
    { head: 'Citation', value: '2,405', text: '+33% month over month' },
    // Add more items as needed
  ];

  // Step 3: Adjust the renderItem function to pass the data to CarouselItem.
  const renderItem = ({ item }: { item: { head: string; value: string; text: string } }) => (
    <CarouselItem navigation={navigation} data={item} /> // Pass the data object as a prop to CarouselItem.
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={width}
        height={width * 2 / 3}
        autoPlay={false}
        data={data}
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
