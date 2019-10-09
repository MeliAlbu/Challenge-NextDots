import React, { Component } from 'react';

import {
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
import { bold } from 'ansi-colors';
import colors from '../theme/colors';

type Props = {};
export default class HomeScreen extends Component<Props>{

    render() {

        return (
          
            <View style={styles.container}>

                <Image 
                style={styles.logo}
                source={require('../assets/icons/cocktail.png')} />

                <Text style={styles.title}>Cocktail finder </Text>
                <Button style={styles.searchButton} 
                title='Search your Cocktail' 
                onPress={() => this.props.navigation.navigate('Find')}
                color="#F44336" />
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pink,
  
    },
    logo: {
        width: 150,
        height: 150,

    },
    title: {
        fontSize: 16,
        color: 'white',
        fontSize:30,
        marginBottom:20,
        fontWeight: 'bold'
    },
    searchButton:{
        
        
        backgroundColor:'#1E6738',
        borderColor: colors.white,
        

    

    }


})