import React, { Component } from "react";
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
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import Card from "../components/card/Card";
import { searchCocktails, deleteCocktails } from "../store/actionsCocktails";
import colors from "../theme/colors";
import CocktailList from "../components/cocktaillist/cocktailList";
import {responsiveSize} from '../theme/dimensions';

type Props = {};
class CocktailFinderScreen extends React.Component<Props> {
  state = {
    value: ""
  };

  TextFilter = event => {
    const text = event.nativeEvent.text;

    this.setState({
      value: text
    });

    if (text.length >= 3) {
      this.getDrinksFromApi(text);
    } else {
      const { getCocktailsConnected } = this.props;
      const { deleteCocktailsConnected } = this.props;
      deleteCocktailsConnected("");
    }
  };

  getDrinksFromApi(text) {
    const { getCocktailsConnected } = this.props;
    getCocktailsConnected(text);
  }

  resetInputHandler() {
    const { deleteCocktailsConnected } = this.props;
    this.setState({
      value: ""
    });
    deleteCocktailsConnected();
  }

  render() {
    const { value, data } = this.state;
    const { cocktails, findingcocktails } = this.props;
    console.log('cocktails', cocktails);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.Container}>
          <View style={styles.SearchBar}>
            <Image
              style={styles.SearchLogo}
              source={require("../assets/icons/searchIcon.png")}
            />
            <TextInput
              style={styles.input}
              blurOnSubmit
              keyboardType="default"
              onChange={event => this.TextFilter(event)}
              value={value}
            ></TextInput>
            <Button
              style={styles.resetButton}
              onPress={() => this.resetInputHandler()}
              title="Reset"
            />
          </View>
          {findingcocktails ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={cocktails}
              renderItem={({ item, index }) => (
                <Card
                  key={index.toString()}
                  name={item.strDrink}
                  urlImage={item.strDrinkThumb}
                  idItem={item.idDrink}
                />
              )}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.data,
    findingcocktails: state.finding
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCocktailsConnected: searchCocktails,
      deleteCocktailsConnected: deleteCocktails
    },
    dispatch
  );

const styles = StyleSheet.create({
  input: {
    height: responsiveSize(40),
    width: "73%",
    borderColor: colors.white,
    marginVertical: responsiveSize(10),
    backgroundColor: "lightgrey",
    marginLeft: responsiveSize(5),
    borderRadius: responsiveSize(10),
    borderBottomEndRadius: responsiveSize(10),
    paddingLeft: responsiveSize(15),
    marginRight: responsiveSize(4)
  },
  SearchBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white
  },

  SearchLogo: {
    width: responsiveSize(25),
    height: responsiveSize(25),
    marginLeft: responsiveSize(10)
  },
  Container: {
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center"
  },
  resetButton: {
    marginRight: responsiveSize(10)
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocktailFinderScreen)
);
