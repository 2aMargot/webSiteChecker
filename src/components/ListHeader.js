import React from 'react';
import { useState } from "react";
import { View, Text, StyleSheet, Button} from 'react-native';
import Heure from './Heure';

const ListHeader = () => {

    const [time, setTime]=useState(new Date());

    function update(){
        setTime(new Date());
    }

return(
    <View>
        <Text style={styles.title}>Website Checker</Text>
        <View style={styles.container}>
            <Heure time={time} />
            <Button 
                title="UpDate Time"
                onPress={update}
                color="#841584"
            />
        </View>
    </View>
)

}

const styles = StyleSheet.create({
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#340834',
    textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6D0E6',
        padding: 30,
        borderRadius: 5,
    },
});

export default ListHeader;