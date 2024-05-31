import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import ListHeader from './src/components/ListHeader';
import ListFooter from './src/components/ListFooter';

const App = () => {

  const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <ListHeader />

      {data.map((item, index) => (
      <View key={index} style={styles.block}>
        <Text style={styles.item}>{item}</Text>
      </View>
      ))}

      <ListFooter />

      </ScrollView>
      
      
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
},
});

export default App;
