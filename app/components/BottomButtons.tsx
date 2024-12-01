// BottomButtons.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../../types/colors';

const BottomButtons: React.FC = (navigation: any) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Left Button Clicked')}>
        <Text style={styles.buttonText}>Left Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Wallet")}>
        <Text style={styles.buttonText}>Right Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: 16,
  },
});

export default BottomButtons;
