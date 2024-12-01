import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/RootStackParamList';
import colors from '../../types/colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const TopBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleProfilePress = () => {
    // Navigate to the ProfileScreen when the profile image is pressed
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      {/* Left Spacer */}
      <View style={{ flex: 1 }} />
      
      {/* Center Title */}
      <View style={{ flex: 1, paddingTop: 10, alignItems: 'center' }}>
        <Text style={styles.title}>
          GluCom
        </Text>
      </View>
      
      {/* Right Image */}
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={handleProfilePress}>
          <Image
            source={require("../../assets/profile-icon.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',          // Arrange children in a row
    alignItems: 'center',          // Align children vertically centered
    paddingHorizontal: 15,
    marginTop: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 32,
    color: colors.text,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default TopBar;
