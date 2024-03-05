import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#02cf8e',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium' ,
    fontSize: 32,
  },
});
