import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scoreresults from './Components/screens/scoreresults';
import Landing from './Components/screens/landing';
import Livescore from './Components/screens/livescore';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function Homeheader(props){
  const navigation = useNavigation();
  return(
  <View style={styles.headcon}>
  <Ionicons name="home-outline" size={28} color="black" 
   onPress={() => navigation.navigate('IPLScore')} />
  <Text style = {styles.headtext}>{props.title}</Text>
  </View>
  );
}
const styles = StyleSheet.create({
    headtext: {
      fontSize: 22,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      marginLeft:10
    },
    headcon:{
      flexDirection:'row',
    }
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IPL Score"  screenOptions={{
      headerStyle: {
        backgroundColor: '#fcf7fb',
        height:20,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:'black'
      },
      headerTitleAlign: 'center',
    }}>
        <Stack.Screen name="IPLScore" component={Landing} options={{
          title: 'IPL Score',
        }}/>
        <Stack.Screen name="Livescore" component={Livescore} options={{ headerTitle: (props) => <Homeheader title = {'Livescore'}{...props} /> }}/>
        <Stack.Screen name="Scoreresults" component={Scoreresults} options={{ headerTitle: (props) => <Homeheader title = {'Fixture Results'} {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

