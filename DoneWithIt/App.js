import React from 'react';
import {
  Button,
  SafeAreaView,
  Alert,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button color='orange' title='Click Me'></Button>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
