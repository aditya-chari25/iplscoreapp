import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../navbar/navbar';

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 250, height: 250}}
        resizeMode="contain"
        source={
            require('../images/logoipl.png')
        }
      />
      <Text>You can check live ipl as well as previous matches ipl scores right here in this app</Text>
      <Navbar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});