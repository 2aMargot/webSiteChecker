import { View, Text, StyleSheet} from 'react-native';

const ListFooter = () => {
    return(
    <View style={styles.footer}>
        <Text>Footer</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#000',
        alignItems: 'center',
    },
});

export default ListFooter;