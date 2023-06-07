import React, {useRef} from 'react';
import {Animated, FlatList, SafeAreaView, StyleSheet} from 'react-native';

import {Header} from './src/Header';
import {Transaction} from './src/Transaction';
import {FloatingHeader} from './src/FloatingHeader';

function App(): JSX.Element {
  const offset = useRef(new Animated.Value(0)).current;

  const data = [
    {
      label: 'Billa',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Payment for coffee',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Exchange EUR to FIAT',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'F16 for Ukraine please',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Lunch in Puzata Hata',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'New laptop',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Binance payment',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Google Play Service',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Donate',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Figma',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Steam Store',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Binance payment',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Google Play Service',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Donate',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Figma',
      status: 'Success',
      price: 12.47,
    },
    {
      label: 'Steam Store',
      status: 'Success',
      price: 12.47,
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={<Header />}
        data={data}
        renderItem={Transaction}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {useNativeDriver: false},
        )}
      />
      <FloatingHeader offset={offset} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {backgroundColor: '#F5F5F5'},
  contentContainer: {
    backgroundColor: 'white',
  },
});

export default App;
