import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, { useState } from 'react';
import MyButton from './src/component/MyButton';
import Form from './src/component/Form';

export default function App() {

const [value, setValue] = useState<string|undefined>()

  return (
    <View style={style.header}>
      <MyButton
        title={'click'}
        onClick={() => {
          console.log('hello');
        }}
      />
      <MyButton
        title={'Next'}
       
      />


      <TextInput
      keyboardType='default'
      
      onChangeText={(text:string)=>{

        setValue(text)
      }}
      />
<Form/>

    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
