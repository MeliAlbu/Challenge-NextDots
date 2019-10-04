import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';


class Input extends Component{
    render() {
    return( <TextInput {...props} style={{...styles.input, ...props.style}}/>
        
        )
};}

const styles = StyleSheet.create ({
   input: {
       height : 30,
       width: '70%',
       borderColor: 'white',
       borderBottomWidth: 15,
       marginVertical: 10,
       backgroundColor: 'white',
   }

});

export default Input;