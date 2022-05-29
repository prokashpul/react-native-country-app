import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        setCountries(data);
      });
  }, []);
  const handelSearch = (text) => {
    const filter = countries.filter((country) =>
      country.name.common.toLowerCase().includes(text)
    );
    setSearch(filter);
  };

  return (
    <View style={{ paddingTop: 20 }}>
      <Text>Countries {countries.length}</Text>
      <TextInput
        onChangeText={(text) => handelSearch(text)}
        style={styles.search}
        placeholder="Search country"
      ></TextInput>
      <ScrollView style={styles.container}>
        {search.map((count, index) => (
          <Country key={index} count={count}></Country>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  search: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
});
