import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Matchcard({item}) {
  return (
    <View style = {styles.card}>
            <View style = {styles.cardcontent}>
            <Text style = {styles.texture}>{item.Match_Type}</Text>
            <Text>{item.Match_Date}</Text>
            <Text>{item.Match_Result}</Text>
            <Text>{item.Match_Location}</Text>
            <Text>{item.team1_score}</Text>
            <Text>{item.team2_score}</Text>
            <Text>{item.team_1}</Text>
            <Text>{item.team_2}</Text>
            </View>
     </View>
  );
}

const styles = StyleSheet.create({
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
  
