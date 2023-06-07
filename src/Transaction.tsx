import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ITransaction} from './interfaces';

export const Transaction = ({item}: {item: ITransaction}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.transactionIcon}
        source={require('../assets/goods.png')}
      />
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <Text style={styles.label}>{item.label}</Text>
          <View style={styles.statusWrapper}>
            <View style={styles.statusIcon} />
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </View>

        <Text style={styles.price}>{`−${item.price} €`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  transactionIcon: {
    width: 38,
    height: 38,
    marginRight: 16,
  },
  leftWrapper: {
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  label: {
    color: '#042C47',
    fontWeight: '600',
  },
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: '#3CB86E',
    marginRight: 8,
  },
  status: {
    color: '#949FAB',
    fontSize: 12,
  },
  price: {
    fontSize: 15,
  },
});
