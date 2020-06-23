import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItemComponent';
import AddToDo from './components/addToDo';
import Sandbox from './components/sandbox';

export default function App() {
  const [toDos, setToDos] = useState([
    {text: 'buy coffee', id: '1'},
    {text: 'get sugar', id: '2'},
    {text: 'need eggs', id: '3'},
    {text: 'create app', id: '4'},
    {text: 'get sleep', id: '5'},
  ]);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const keyboardDidShowListener = useRef(isKeyboardVisible)
  const keyboardDidHideListener = useRef(isKeyboardVisible)

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    keyboardDidHideListener.current = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);
  

  const pressHandler = (id) => {
    setToDos((prevToDo) => {
      return prevToDo.filter((todo) => todo.id != id)
    })
  }


  const submitHandler = (text) => {
    
    setToDos((prevToDos) => {
    if (text.length > 3) {
      setToDos((prevToDos) => {
        var item = {text: text, id: String(Math.random())};
        console.log([item, ...prevToDos])
        return [
          item, 
          ...prevToDos 
        ];
      });
    } else {
      Alert.alert(
        'WOMP',
        'Please Add More Description',
        [
          {
            text: 'Got it!',
            onPress: () => console.log("Pressed 'got it'")
          }
        ]);
    }
  })
  }
  
  return (
    <TouchableWithoutFeedback
      onPress={()=> {
        if (isKeyboardVisible) {
          Keyboard.dismiss();
          console.log('keyboard dismissed');
        }
      }}
      accessible={false}>
      <View 
        style={styles.container}>
        {/* {header} */}
        <Header />
        <View 
          style={styles.content}>
          {/* {add todo form} */}
          <AddToDo 
            submitHandler={submitHandler}
          />

          <TouchableWithoutFeedback
            onPress={()=>{}}>
          <View
            onStartShouldSetResponder={() => true}
            style={styles.list}>
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
          </TouchableWithoutFeedback>
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
    flex: 1,
    padding: 50,
    paddingBottom: 20,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 20,
    //backgroundColor: 'yellow'
  }
});
