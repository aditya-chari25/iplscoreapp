import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Pressable } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Navbar() {
    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate('Livescore')}
      >
          <Text style={styles.text}>Livescore</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Scoreresults')}
      >
          <Text style={styles.text}>Fixture Results</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        margin:10
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
});