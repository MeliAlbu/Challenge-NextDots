import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import styles from './styles';

export default class Card extends Component {
    render() {
        const { name, urlImage, idItem} = this.props;
        return (    
           
            <View style={styles.Card}>
                <Image 
                    style={styles.DrinkImage}
                    source={{ uri: urlImage }} 
                />
                <Text style={styles.DrinkName}>{name}</Text>
                <Text>{idItem}</Text>
            </View>
        )
    }
}
