import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem ({ item, pressHandler }) {

    return (
            
        <View style={styles.item}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <Text style={styles.marked}>Completed</Text>           
            </TouchableOpacity>
        </View>
            
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'black',
        borderWidth: 1, 
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: 'lavender'
    },
    marked: {
        borderColor: 'green',
        backgroundColor: 'green',
        borderRadius: 10,
        textAlign: 'right',
        marginLeft: 150
    }
})