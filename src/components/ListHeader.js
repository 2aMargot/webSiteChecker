import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

const ListHeader = () => {

const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
return(
<ScrollView style={styles.scrollView}>
    <Text style={styles.title}>Website Checker</Text>
    {data.map((item, index) => (
    <View key={index} style={styles.block}>
        <Text>{item}</Text>
    </View>
    ))}
</ScrollView>
)

}

const styles = StyleSheet.create({
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    },
    scrollView: {
        flex: 2,
        marginBottom: 16,
    },
    block: {
        flex: 1,
        padding: 16,
        margin: 4,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
    },
});

export default ListHeader;