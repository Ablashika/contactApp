import React from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';
import office from "./assets/office.jpg"


export default function NextScreen (){

    return(
        <View style={styles.container}> 

            <View style={styles.imageBox}> 

            <Image source={office} style={styles.image}/>
               
               <Text style={styles.textImage}>KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN </Text>

             <Text  style={styles.smallText}>Sign in or register with Ampersand</Text>
          </View>
          

           <View style={styles.buttomTextBox}>

               <TouchableOpacity><Text style={styles.registerTex}>REGISTER</Text>
               <View style={styles.redContainer}></View>
               </TouchableOpacity>
                <TouchableOpacity><Text style={styles.signUpText}>SIGN IN</Text>
                <View style={styles.redContainerTwo}></View>
                </TouchableOpacity>
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

    image:{
        height:400,
        width:400,
        
    },

    imageBox:{
        height:400,
        width:400,
        flex:1
    },

    textImage:{
          marginHorizontal:25,
          marginTop:20,
         
    },

    smallText:{
       marginHorizontal:25,
       color:"grey",
       marginTop:10,
       fontSize:12
       


    },

    buttomTextBox:{
        flexDirection:"row",
        marginBottom:80,
        
        
    },

    registerTex:{
        marginRight:170
    },

    redContainer:{
        backgroundColor:"red",
        height:2,
        width:75
    },

    redContainerTwo:{
        backgroundColor:"red",
        height:2,
        width:55
    }
    
})