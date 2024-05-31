import React from 'react';
import {StyleSheet, SafeAreaView } from 'react-native';
import ListHeader from './src/components/ListHeader';
import ListFooter from './src/components/ListFooter';
import Heure from './src/Heure';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Heure />
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
