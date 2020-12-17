import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LogoScreen from '../screens/LogoScreen'
import HomeScreen from '../screens/HomeScreen'
import SignIn from '../screens/SignIn';
import Register from '../screens/Register'
import MemberProfile from '../screens/MemberProfile';
import Profile from '../screens/Profile';
import QrScreen from '../screens/QrScreen';
import Scanner from '../screens/Scanner';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import {connect} from 'react-redux'
import {logout} from '../redux/actions/authActions'

const  Stack = createStackNavigator()


function AppContainer({auth, logout}) {
    return (



<NavigationContainer>  

{
  auth.login ?
  <Stack.Navigator>

<Stack.Screen
         
         options={({ navigation }) => ({
          title:"Codetrain",
          headerStyle:{
            backgroundColor:"#e6194c"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerRight:()=>(
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate("Profile")
          }}
            style={styles.profileContainer}><MaterialIcons name="person-outline" size={24} color="white" /></TouchableOpacity>  
           )
           ,
           headerLeft:()=>(
            <TouchableOpacity onPress={logout}>
            <Text style={{marginLeft:20}}>Logout</Text>
           </TouchableOpacity>
           ),
                 
        })} 
         name="QrScreen" component={QrScreen}/>
          
<Stack.Screen  
              options={{header:()=>null}}
         name="Scanner" component={Scanner}/>

          <Stack.Screen  
            options={{
              title:"Codetrain",
              headerStyle:{
                backgroundColor:"#e6194c"
              },
              headerTintColor:"white",
              headerTitleAlign:"center",
               
             
              
            }}
         name="MemberProfile" component={MemberProfile}/>
       

       <Stack.Screen  
            options={{
              title:"Codetrain",
              headerStyle:{
                backgroundColor:"#e6194c"
              },
              headerTintColor:"white",
              headerTitleAlign:"center",
               
             
              
            }}
         name="Profile" component={Profile}/>
   </Stack.Navigator>
   :
     <Stack.Navigator>
          <Stack.Screen
           options={{header:()=>null}}
          name="LogoScreen" component={LogoScreen}/> 
         <Stack.Screen
         options={{header:()=>null}}
         name="HomeScreen" component={HomeScreen}/>

           <Stack.Screen  
            options={{
              title:"Register",
              headerStyle:{
                backgroundColor:"#e6194c"
              },
              headerTintColor:"white",
              headerTitleAlign:"center",
               
             
              
            }}
         name="Register" component={Register}/>
           <Stack.Screen  
            options={{
              title:"Sign In",
              headerStyle:{
                backgroundColor:"#e6194c"
              },
              headerTintColor:"white",
              headerTitleAlign:"center",
               
             
              
            }}
         name="SignIn" component={SignIn}/>
         {/* <Stack.Screen
         
         options={({ navigation }) => ({
          title:"Codetrain",
          headerStyle:{
            backgroundColor:"#e6194c"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerRight:()=>(
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate("Profile")
          }}
            style={styles.profileContainer}><MaterialIcons name="person-outline" size={24} color="white" /></TouchableOpacity>  
           )        
        })} 
         name="QrScreen" component={QrScreen}/> */}

<Stack.Screen  
              options={{header:()=>null}}
         name="Scanner" component={Scanner}/>

          <Stack.Screen  
            options={{
              title:"Codetrain",
              headerStyle:{
                backgroundColor:"#e6194c"
              },
              headerTintColor:"white",
              headerTitleAlign:"center",
               
             
              
            }}
         name="MemberProfile" component={MemberProfile}/>
       

       <Stack.Screen  
            options={{
              title:"Codetrain",
              headerStyle:{
                backgroundColor:"#e6194c"
              },
              headerTintColor:"white",
              headerTitleAlign:"center",
               
             
              
            }}
         name="Profile" component={Profile}/>
       </Stack.Navigator>

     

  }  
       
    </NavigationContainer>
 
 

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    profileContainer: {
      marginRight:10
    }
  
  
  });


const mapStateToProps = (state) => {
  return {auth:state}
} 


export default connect(mapStateToProps, {logout})(AppContainer);







