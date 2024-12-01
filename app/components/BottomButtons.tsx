// BottomButtons.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../../types/colors';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/RootStackParamList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const BottomButtons: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Mint")}>
        <Text style={styles.buttonText}>Mint</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Wallet")}>
        <Text style={styles.buttonText}>Wallet</Text>
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
