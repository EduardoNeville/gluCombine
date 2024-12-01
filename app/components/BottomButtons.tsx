// BottomButtons.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
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
        <Image
          style={styles.image}
          source={require("../../assets/anvil.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Wallet")}>
        <Image
          style={styles.image}
          source={require("../../assets/wallet.png")}
        />
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
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: 16,
  },
  image: {
    width: 60,
    height: 60,
  }
});

export default BottomButtons;
