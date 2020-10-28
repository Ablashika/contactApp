import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoScreen from './LogoScreen'
import NextScreen from './NextScreen'
import SignIn from './SignIn';
import Register from './Register'
import MemberProfile from './MemberProfile';
import Profile from './Profile';
import QrScreen from './QrScreen';
import Scanner from './Scanner'


class App extends Component {
render(){       
  return(
    <View style={styles.container}>
   <Scanner/>
    </View>
  )
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});


export default App