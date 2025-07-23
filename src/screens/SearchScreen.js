import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <Text style={styles.resultText}>
        We have found {results.length} results
      </Text>
      <ResultsList results={filterResultByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultByPrice("$$$")} title="Big Spender" />
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
