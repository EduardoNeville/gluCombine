import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../../types/colors';

interface Invoice {
  tokenId: string;
  dataId: string;
  valueEth: number;
}

const WalletScreen: React.FC = (navigation: any) => {
  const totalBalance = 10.75; // Example amount of money you have

  const invoices: Invoice[] = [
    { tokenId: '0xA1B2', dataId: 'D1001', valueEth: 1.5 },
    { tokenId: '0xC3D4', dataId: 'D1002', valueEth: 2.0 },
    { tokenId: '0xE5F6', dataId: 'D1003', valueEth: 0.75 },
    { tokenId: '0xC3D2', dataId: 'D1032', valueEth: 2.0 },
    { tokenId: '0xE5F5', dataId: 'D1033', valueEth: 0.75 },
    { tokenId: '0xB3D4', dataId: 'D1002', valueEth: 3.0 },
    { tokenId: '0xF5F6', dataId: 'D1003', valueEth: 0.75 },
  ];

  const renderItem = ({ item }: { item: Invoice }) => (
    <View style={styles.invoiceItem}>
      <Text style={styles.invoiceText}>Token ID: {item.tokenId}</Text>
      <Text style={styles.invoiceText}>Data ID: {item.dataId}</Text>
      <Text style={styles.invoiceText}>Value (ETH): {item.valueEth}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>
      <Text style={styles.balance}>Balance: {totalBalance} ETH</Text>
      <FlatList
        data={invoices}
        keyExtractor={(item) => item.tokenId}
        renderItem={renderItem}
        contentContainerStyle={styles.invoiceList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50, // Adjust as needed
    backgroundColor: colors.surface,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  balance: {
    fontSize: 24,
    marginBottom: 24,
  },
  invoiceList: {
    paddingBottom: 16,
  },
  invoiceItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
  invoiceText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default WalletScreen;
