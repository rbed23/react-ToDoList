import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My To-Dos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 35,
        paddingHorizontal: 25,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 20,
        fontWeight: 'bold'
    }
})