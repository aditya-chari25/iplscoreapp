import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from "react-native";
import Matchcard from "../card/matchcard";
import Navbar from "../navbar/navbar";

export default function Livescore() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://myawesome-ipl-api.herokuapp.com/live-score')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data = {data.Live_IPL_data}
        renderItem={({item,index})=>
        <Matchcard item={item}/>
        }
        keyExtractor={(item,index)=>index.toString()}
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
  cardcontent:{
      marginTop:10,
      color:'black'
  },
  card:{
        backgroundColor:'#f7f7f2',
        marginTop:10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingHorizontal: 25,
  }
});
