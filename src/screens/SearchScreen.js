import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });

      if (response.data.businesses.length === 0) {
        setErrorMessage(" Something went wrong");
      } else {
        setErrorMessage("");
      }

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something  Went Wrong ");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <Text style={styles.resultText}>
        We have found {results.length} results
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    color: "#fd5722",
    marginHorizontal: 10,
    marginTop: 10,
  },
  resultText: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
});

export default SearchScreen;
