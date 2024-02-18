/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { PhoneInput } from 'react-native-phone-number-validation';


function App(): React.JSX.Element {

  return (
    <View
      style={styles.container}>
      <PhoneInput
        inputStyle={styles.inputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
  }
});

export default App;
