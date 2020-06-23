import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem ({ item, pressHandler }) {

    return (
           

        <TouchableWithoutFeedback>
        <View style={styles.item}>
            <Text style={styles.desc}>{item.text}</Text>
            <View style={styles.marked}>
                <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <MaterialIcons name='delete' size={30} color='red' />           
                </TouchableOpacity>
                {/* <Button 
                    title="Done"
                    onPress={()=> pressHandler(item.id)}/> */}
              </View>
        </View>
        </TouchableWithoutFeedback>

            
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1, 
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: 'lavender'
    },
    desc: {
        flex: 4,
        padding: 20,
        paddingLeft: 10,
        alignItems: 'center',
        fontSize: 15,
        color: 'darkgray'
    },
    marked: {
        flex: 1,
        borderColor: 'darkgray',
        borderWidth: 2,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
})