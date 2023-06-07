import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalBalance}>Total balance</Text>
      <Text style={styles.balance}>€ 2.375,35</Text>
      <View style={styles.controlsContainer}>
        <View style={styles.controlWrapper}>
          <TouchableOpacity style={styles.control} />
          <Text style={styles.controlText}>Send</Text>
        </View>

        <View style={styles.controlWrapper}>
          <TouchableOpacity style={styles.control} />
          <Text style={styles.controlText}>Receive</Text>
        </View>

        <View style={styles.controlWrapper}>
          <TouchableOpacity style={styles.control} />
          <Text style={styles.controlText}>Exchange</Text>
        </View>

        <View style={styles.controlWrapper}>
          <TouchableOpacity style={styles.control} />
          <Text style={styles.controlText}>More</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 18,
    backgroundColor: '#F5F5F5',
  },
  totalBalance: {
    fontSize: 16,
    marginBottom: 8,
  },
  balance: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: '700',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  controlWrapper: {
    alignItems: 'center',
  },
  control: {
    width: 48,
    height: 48,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  controlText: {
    fontWeight: '400',
    fontSize: 13,
    marginTop: 8,
  },
});
