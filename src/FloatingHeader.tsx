import React from 'react';
import {Animated, Image, Text, TouchableOpacity} from 'react-native';

export const FloatingHeader = ({offset}: {offset: Animated.Value}) => {
  const opacity = offset.interpolate({
    inputRange: [120, 160],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const translateY = offset.interpolate({
    inputRange: [0, 120],
    outputRange: [-80, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        {
          height: 80,
          width: '100%',
          position: 'absolute',
          backgroundColor: 'white',
          top: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 11,
          borderBottomWidth: 1,
          borderBottomColor: '#d9d9d9',
        },
        {opacity, transform: [{translateY}]},
      ]}>
      <Text style={{fontWeight: '600', fontSize: 17}}>
        Total balance: € 2.375,35
      </Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 14,
          right: 15,
          width: 20,
          alignItems: 'center',
        }}>
        <Image style={{}} source={require('../assets/kebab.png')} />
      </TouchableOpacity>
    </Animated.View>
  );
};
