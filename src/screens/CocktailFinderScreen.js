import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  Button,
  Icon,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import Card from '../components/Card';
import {searchCocktails, deleteCocktails} from '../store/actionsCocktails';

type Props = {};
class CocktailFinderScreen extends React.Component<Props> {
  state = {
    value: '',
  };

  TextFilter = event => {
    this.setState({
      value: event.nativeEvent.text,
    });
    const text = event.nativeEvent.text;
    if (text.length >= 3) {
      this.getDrinksFromApi(text);
    } else {
        const {getCocktailsConnected} = this.props;
       this.props.deleteCocktailsConnected('')
    };
  };

  getDrinksFromApi(text) {
    const {getCocktailsConnected} = this.props;
    getCocktailsConnected(text);
  }

  resetInputHandler() {
    const {deleteCocktailsConnected} = this.props;
    this.setState({
      value: '',
    });
    deleteCocktailsConnected();
   
  
}

  render() {
    const {value, data} = this.state;
    const {cocktails, findingcocktails} = this.props;

    const renderCard =
      cocktails !== undefined && cocktails !== null
        ? cocktails.map((item, index) => (
            <Card
              key={index}
              name={item.strDrink}
              idItem={item.idDrink}
              urlImage={item.strDrinkThumb}
            />
          ))
        : '';
    return (
      <View style= {styles.Container}>
        <View style={styles.SearchBar}>
          <Image
            style={styles.SearchLogo}
            source={require('./searchIcon.png')}
          />
          <TextInput
            style={styles.input}  
            keyboardType="default"
            onChange={event => this.TextFilter(event)}
            value={value}>

            </TextInput>
          <Button style={styles.resetButton}
          onPress={() => this.resetInputHandler()} title="Reset" />
        </View>
        {findingcocktails ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>
            {cocktails !== null ? renderCard : <Text> Sin resultados</Text>}
          </ScrollView>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.data,
    findingcocktails: state.finding,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCocktailsConnected: searchCocktails,
      deleteCocktailsConnected: deleteCocktails,
    },
    dispatch,
  );

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '73%',
    borderColor: 'white',
    marginVertical: 10,
    backgroundColor: 'lightgrey',
    marginLeft: 5,
    borderRadius: 10,
    borderBottomEndRadius: 10,
    paddingLeft: 15,
    marginRight:4,

  },
  SearchBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  SearchLogo: {
    width: 25,
    height: 25,
   marginLeft: 10,
  },
  Container: {
    backgroundColor: '#FCA9A5',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  resetButton: {
    
    marginRight:10,
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CocktailFinderScreen),
);
