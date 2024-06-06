import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ListItems = () => {

    const [itemAjouter, setItemAjouter] = useState('');
    const [items, setItems] = useState(["Item 1 ", "Item 2"]);

    useEffect(() => {
        chargerListe();
    }, []);

    const ajoutItem = () => {
        if (itemAjouter.trim()) {
            const newItems = [...items, itemAjouter];
            setItems(newItems);
            setItemAjouter('');
            enregistrerItems(newItems);
        }
    };

    const chargerListe = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('items');
            if (storedItems) {
            setItems(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error('Erreur lors du chargement des items :', error);
        }
    };

    const enregistrerItems = async (newItems) => {
        console.log("test");
        try {
            await AsyncStorage.setItem('items', JSON.stringify(newItems));
            
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des éléments :', error);
        }
    };

    const supprimerItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        enregistrerItems(newItems);
    };
    

    return(
    <View style={styles.container}>
        <Text style={styles.title}>Votre Liste</Text>
        <TextInput
        placeholder="Saisir un element"
        value={itemAjouter}
        onChangeText={setItemAjouter}
        style={styles.input}
        />
        <Button title="Ajouter" onPress={ajoutItem} color={"#B06CB0"}/>
        <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.liste}>{item}</Text>
                    <TouchableOpacity onPress={() => supprimerItem(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Supprimer</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
    
    
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6D0E6',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#340834',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#340834',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: '#B06CB0',
    },
    button: {
        backgroundColor: '#B06CB0',
    },
    liste: {
        fontSize: 18,
        color: '#340834',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#340834',
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#340834',
        paddingVertical: 10,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    deleteButtonText: {
        color: '#FFF',
        fontSize: 12,
    },
});

export default ListItems;