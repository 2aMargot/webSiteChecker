import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native"


const Heure =({ time }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.timeText}>
                {time.toLocaleTimeString()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    timeText: {
        fontSize: 40,
        marginBottom: 20,
        color: '#340834',
        textAlign: 'center'
    },
})



export default Heure;