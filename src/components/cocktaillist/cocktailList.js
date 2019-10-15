import React, { Component } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const CocktailList = ({ index, item }) => (
  <View>
    <FlatList
      data={this.props.cocktails}
      name={this.props.name}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export default CocktailList;
