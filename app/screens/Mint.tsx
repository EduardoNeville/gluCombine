import React, { useState } from 'react';
import { SafeAreaView, View, Dimensions, Image, StyleSheet, Text } from 'react-native';
import SliderComponent from '../components/SliderComponent';
import colors from '../../types/colors';

const width = Dimensions.get('window').width;

const MintScreen = () => {
  const [sliderMoved, setSliderMoved] = useState(false);

  const handleSliderMoved = () => {
    setSliderMoved(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Mint Your Data as an IP-NFT</Text>
        <Text style={styles.description}>
          Securely mint your health data into an IP-NFT to gain full control over its usage and potential rewards.
          By minting, you transform your data into a unique digital asset that you own.
        </Text>
        <Image
          source={sliderMoved 
            ? require('../../assets/glucouse-NFT.png')
            : require('../../assets/no-image.png')
          }
          style={styles.image}
        />
      </View>
      <View style={styles.sliderContainer}>
        <SliderComponent onSliderMoved={handleSliderMoved} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1, // Takes up the available space above the slider
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: colors.text,
    marginBottom: 10,
    textAlign: 'center',
    width: width * 5 / 6,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 5 / 6,
    height: width / 3,
  },
  sliderContainer: {
    // The slider will naturally align at the bottom due to flex layout
  },
});

export default MintScreen;
