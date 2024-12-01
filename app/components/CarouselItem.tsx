import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../types/colors';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/RootStackParamList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface CarouselItemProps {
  data: {
    head: string;
    value: string;
    text: string;
  };
}

const CarouselItem: React.FC<CarouselItemProps> = (
  { data } : { data: { head: string; value: string; text: string; }}
) => {
  const {head, value, text} = data;

  const navigation = useNavigation<NavigationProp>();
  
  return (
    <TouchableOpacity 
      style={styles.carouselItem}
      onPress={() => navigation.navigate("Wallet")}
    >
      <Text style={styles.itemTitle}>{head}</Text>
      <Text style={styles.itemValue}>{value}</Text>
      <Text style={styles.itemText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  itemTitle: {
    fontSize: 20,
    color: colors.text,
    marginBottom: 10,
  },
  itemValue: {
    fontSize: 30,
    color: colors.text,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: colors.text,
  },
});

export default CarouselItem;
