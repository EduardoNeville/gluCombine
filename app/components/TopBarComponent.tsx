import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/RootStackParamList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const TopBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleProfilePress = () => {
    // Navigate to the ProfileScreen when the profile image is pressed
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image
          source={require("../../assets/profile-icon.png")} // Mocked profile image URL
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 40
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default TopBar;
