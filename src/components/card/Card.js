import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import styles from './styles';

export default class Card extends Component {
    render() {
        return (
           
            <View style={styles.Card}>
                <Image style=
                {styles.DrinkImage}
                source={{ uri: this.props.urlImage }} />
                <Text style={styles.DrinkName}>{this.props.name}</Text>
                <Text>{this.props.idItem}</Text>
            </View>
        )
    }
}
