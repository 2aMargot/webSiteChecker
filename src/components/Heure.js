import { StyleSheet, Text, View } from "react-native"


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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6D0E6',
        padding: 30,
        borderRadius: 5,
    },
})



export default Heure;