import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItemComponent';
import AddToDo from './components/addToDo';

export default function App() {
  const [toDos, setToDos] = useState([
    {text: 'buy coffee', id: 1},
    {text: 'get sugar', id: 2},
    {text: 'need eggs', id: 3},
    {text: 'create app', id: 4},
    {text: 'get sleep', id: 5},
  ]);
  

  const pressHandler = (id) => {
    setToDos((prevToDo) => {
      return prevToDo.filter((todo) => todo.id != id)
    })
  }


  const submitHandler = (text) => {
    
    if (text.length > 3) {
      setToDos((prevToDos) => {
        var item = {text: text, id: Math.random()};
        console.log([item, ...prevToDos])
        return [
          item, 
          ...prevToDos 
        ];
      });
    } else {
      Alert.alert(
        'OOPS',
        'Please Add More Description',
        [
          {
            text: 'Got it!',
            onPress: () => console.log("Pressed 'got it'")
          }
      ]);
    }
  }


  return (
    <TouchableWithoutFeedback 
      onPress={()=> {
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
    <View style={styles.container}>
      {/* {header} */}
      <Header />
      <View style={styles.content}>
        {/* {todo form} */}
        <AddToDo 
          submitHandler={submitHandler}
        />
        <View sytles={styles.list}>
          {/* {todo list items} */}
          <FlatList 
            data={toDos}
            renderItem={( {item} ) => (
              <ToDoItem 
                item={item} 
                pressHandler={pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop:20,
  }
});
