import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text style={{ fontSize: 25 }}>This is Search Screen</Text>
    </View>
  );
};
export default SearchScreen;
