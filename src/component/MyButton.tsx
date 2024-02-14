import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

interface MyButton {
  title: "Next"| "click";
  onClick?: () => void;
}

const MyButton: React.FC<MyButton> = props => {
  return (
    <View>
      <TouchableOpacity
      onPress={props.onClick}
      >
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MyButton;
