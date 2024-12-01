import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  runOnJS,
} from 'react-native-reanimated';
import colors from '../../types/colors';

interface SliderComponentProps {
  onSliderMoved?: () => void;
}

const INITIAL_BOX_SIZE = 50;
const SLIDER_WIDTH = 300;

const SliderComponent: React.FC<SliderComponentProps> = ({ onSliderMoved }) => {
  const offset = useSharedValue(0);
  const boxWidth = useSharedValue(INITIAL_BOX_SIZE);
  const MAX_VALUE = SLIDER_WIDTH - INITIAL_BOX_SIZE;
  const hasMoved = useSharedValue(false);

  const pan = Gesture.Pan().onChange((event) => {
    offset.value = Math.min(
      Math.max(offset.value + event.changeX, 0),
      MAX_VALUE
    );

    const newWidth = INITIAL_BOX_SIZE + offset.value;
    boxWidth.value = newWidth;

    // Call the onSliderMoved callback when the slider is moved for the first time
    if (onSliderMoved && !hasMoved.value && offset.value > 0) {
      hasMoved.value = true;
      runOnJS(onSliderMoved)();
    }
  });

  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.sliderTrack}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.sliderHandle, sliderStyle]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 32,
  },
  sliderTrack: {
    width: SLIDER_WIDTH,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 5,
  },
  sliderHandle: {
    width: 40,
    height: 40,
    backgroundColor: '#f8f9ff',
    borderRadius: 20,
    position: 'absolute',
    left: 0,
  },
});

export default SliderComponent;
