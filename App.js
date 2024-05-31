import React from 'react';
import {StyleSheet, SafeAreaView } from 'react-native';
import ListHeader from './src/components/ListHeader';
import ListFooter from './src/components/ListFooter';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ListHeader />
      <ListFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
