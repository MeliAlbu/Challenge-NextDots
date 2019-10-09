import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import styles from './styles';

class Input extends Component{
    render() {
    return( <TextInput {...props} style={[styles.input], [props.style]}/>
        
        )
};}


export default Input;