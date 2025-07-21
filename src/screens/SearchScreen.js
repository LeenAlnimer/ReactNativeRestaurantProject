import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
const SearchScreen = () => {
  // prettier-ignore
  const [term , setTerm] = useState('');
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text style={{ fontSize: 25 }}>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};
export default SearchScreen;
