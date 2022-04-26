import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Matchcard({item}) {
  return (
    <View style = {styles.card}>
            <View style = {styles.cardcontent}>
            <Text style = {styles.texture}>{item.Match_Type}</Text>

            <View style={styles.rowarrange}>
            <Text style = {styles.date}>{item.Match_Date},  </Text>
            <Text  style = {styles.location}>{item.Match_Location}</Text>
            </View>
            <View style={styles.teamarr}>
            <Text style={styles.teamname}>{item.team_1}</Text>
            <Text  style={styles.teamname}>{item.team1_score}</Text>
            </View>
            <View style={styles.teamarr}>
            <Text style={styles.teamname}>{item.team_2}</Text>
            <Text  style={styles.teamname}>{item.team2_score}</Text>
            </View>
            <Text style={styles.winner}>{item.Match_Result}</Text>
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
          backgroundColor:'#fcf7fb',
          marginTop:10,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          paddingHorizontal: 25,
          flex:0.95
    },
    texture:{
        fontSize:22,
        fontWeight:'bold',
        color:'blue'
    },
    date:{
        fontSize:18,
        fontWeight:'bold',
        color:'red',
        fontStyle:'italic'
    },
    location:{
        fontSize:18,
        fontWeight:'700',
        color:'red',
        fontStyle:'italic'
    },
    rowarrange:{
        
        flexDirection:'row',
    },
    teamarr:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    teamname:{
        color:'black',
        marginTop:6,
        fontSize:15,
        fontWeight:'bold',
        
    },
    winner:{
        marginTop:6,
        color:'purple',
        
    }
  });
  
