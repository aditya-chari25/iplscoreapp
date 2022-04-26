import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Navbar from "../navbar/navbar";
import React, { useEffect, useState } from "react";
import Matchcard from "../card/matchcard";

export default function Scoreresults() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("https://myawesome-ipl-api.herokuapp.com/all-match-results")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data.Match_Results}
        renderItem={({ item }) => <Matchcard item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
