import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddToDo({ submitHandler }) {
    
    // instantiate states
    const [text, setText] = useState('');

    // instantiate functions
    const changeHandler = (value) => {
        setText(value);

    }
    
    // render Views
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new todo'
                onChangeText={changeHandler}
                value={text}
            />
            <View style={styles.button}>
                <Button 
                    onPress={() => {
                        submitHandler(text)
                        setText('')
                    }}
                    title='add todo'
                    color='coral'
                />
            </View>
            
        </View>
    )
}


// set Styles
const styles=StyleSheet.create({
    input:  {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    button: {
        width: 100,
        marginRight: 0,
        marginLeft: 'auto',
    }
})