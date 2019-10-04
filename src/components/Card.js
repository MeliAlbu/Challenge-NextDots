import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default class Card extends Component {
    render() {
        return (
           
            <View style={styles.Card}>
                <Image style=
                {styles.DrinkImage}
                source={{ uri: this.props.urlImage }} style={{ width: 50, height: 50 }} />
                <Text style={styles.DrinkName}>{this.props.name}</Text>
                <Text>{this.props.idItem}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Card: {
        height: 100,
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom:10,
        marginVertical: 10,
        borderColor: 'grey',  
        borderRadius:20
 
    },

    DrinkName: {
        flexWrap: 'wrap',
        color: 'red'
    },
    DrinkImage:  {
        borderRadius: 400/ 2,

    }
  });