import React from 'react';
import { Dimensions, View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../types/colors';

const width = Dimensions.get('window').width;
const ProfileScreen: React.FC = () => {
  // Mocked user data
  const user = {
    name: 'Jane Doe',
    citations: 42,
    wallet: '$1,234.56',
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/no-image.png')}
        style={styles.image}
      />
      <View style={styles.profileItem}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.profileItem}>
        <Text style={styles.label}>Citations</Text>
        <Text style={styles.value}>{user.citations}</Text>
      </View>

      <View style={styles.profileItem}>
        <Text style={styles.label}>Wallet</Text>
        <Text style={styles.value}>{user.wallet}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 5 / 6,
    height: 400,
    paddingBottom: 10,
  },
  profileItem: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.surface,
    padding: 15,
    marginBottom: 15,
    width: width * 5 / 6,
  },
  label: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 5,
    width: width * 5 / 6,
  },
  value: {
    fontSize: 18,
    color: colors.text,
    width: width * 5 / 6,
  },
});

export default ProfileScreen;
