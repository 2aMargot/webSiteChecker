import React from 'react';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button} from 'react-native';
import Heure from './Heure';

const ListHeader = () => {

    const [time, setTime]=useState(new Date());

    function update(){
        setTime(new Date());
    }

    useEffect(() => {
        const interval = setInterval(update, 1000); 
        return () => clearInterval(interval); 
    }, []);


return(
    <View>
        <Text style={styles.title}>Website Checker</Text>
        <Heure time={time} />
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
    
});

export default ListHeader;