import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import ListHeader from './src/components/ListHeader';
import ListFooter from './src/components/ListFooter';
import ListItems from './src/components/ListItem';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>

      <ListHeader />
      <ListItems />
      <ListFooter />

      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 2,
    marginBottom: 16,
  },
  item: {
    color: '#340834',
  },
  block: {
    flex: 1,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: '#340834',
    borderRadius:5,
    alignItems: 'center',
}
});

export default App;
