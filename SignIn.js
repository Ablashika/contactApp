import React from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';
import whitegreen from "./assets/whitegreen.jpg"
import { Ionicons } from '@expo/vector-icons';


export default function SignIn (){

    return(
        <View style={styles.container}>



               <View style={styles.redContainer}>
               <Ionicons  style={styles.icon}name="ios-arrow-round-back" size={30} color="white"   />
                    <Text style={styles.topText}>Sign In</Text> 
                </View>

               <View style={styles.imageBox}>
                   <Image source={whitegreen} style={styles.image}/>
               </View>

            <View style={styles.details}>
               <View style={styles.Email}>    
               <Text style={styles.textEmail}>Email</Text>
                <TextInput
                        style={styles.input} 
                       
                        placeholderTextColor="#aaaaaa"
                        placeholder ="hjjhg" >  
                </TextInput>
               </View>

               <View style={styles.password}>
                   <Text style={styles.textPassword}>Password</Text>
               <TextInput  style={styles.input}
                 placeholderTextColor="#aaaaaa"
                secureTextEntry={true}
                placeholder= "paassword">
               </TextInput>
               </View>


               <TouchableOpacity style={styles.signinContainer}><Text style={styles.signInText}>SIGN IN</Text></TouchableOpacity>


               <View style={styles.forgotContainer}>
                   <Text>Forgot?</Text>
                   <TouchableOpacity><Text style={styles.resetText}>Reset Password</Text>
                   <View style={styles.resetLine}></View>
                   </TouchableOpacity>
               </View>
                

            
  </View>


</View>
    )
}
const styles = StyleSheet.create({
container: {
    flex:1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},

redContainer:{
    backgroundColor:"#e6194c",
    height:100,
    width:400,
    flex:1,
    alignItems:"center",
    justifyContent:"center"
},

image:{
    height:200,
    width:400,
    
},

imageBox:{
height:200,
width:400,
marginBottom:100,
flex:1
},

Email:{
    flexDirection:"row",
    marginBottom:30,
},


password:{
    flexDirection:"row",
    marginRight:50
},

textEmail:{
    marginRight:50
},

textPassword:{
    marginRight:200
},

details:{
    flex:4,
    marginTop:100,
    width:330,
   

},

signinContainer:{
    backgroundColor:"#e6194c",
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    height:49,
    borderRadius:5
    
},

signInText:{
    color:"white"
},

forgotContainer:{
    flexDirection:"row",
    marginTop:30
},
resetText:{
    marginLeft:10
},
resetLine:{
    height:2,
    width:115,
    backgroundColor:"red",
    marginTop:5
},

icon:{
    marginRight:300,
    marginBottom:-20
    
},

topText:{
    color:"white"
}

})