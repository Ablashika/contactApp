import React from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';
import hair from "../../assets/hair.jpg"
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';



export default function MemberProfile (){

    return(
     <View style={styles.container}> 

           
        {/* <View style={styles.redContainer}>
        <Ionicons  style={styles.icon}  style={styles.icon}name="ios-arrow-round-back" size={30} color="white"   />
           <Text style={styles.topText}>Member Profile</Text></View>
       <View style={styles.redContainerTwo}></View>   */}

        <View style={styles.imageBox} >
            <View style={styles.itemImage}><Image source={hair}  style={styles.image}/>
            <View style={styles.textDetails}><Text>Mary Jimoh</Text>
            <Text>Sales Executive</Text>
            </View>
            </View>

            <View style={styles.mediaIcons}><Entypo style={styles.twitter} name="twitter-with-circle" size={24} color="grey" />
                  <Entypo name="linkedin-with-circle" size={24} color="grey" />
                </View>


            <View style={styles.detailsIcons}>

            <View style={styles.iconBox}><Feather style={styles.phoneIcon} name="phone" size={24} color="black" /><Text>+234 464 478</Text></View>
            <View style={styles.iconBox}><EvilIcons style={styles.phoneIcon}  name="envelope" size={24} color="black" /><Text>maryjimohgmail.com</Text></View> 
            <View style={styles.iconBox}><Feather style={styles.phoneIcon}  name="map-pin" size={24} color="black" /><Text>Accra Ghana</Text></View> 
             

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
        alignItems:"center",
        justifyContent:"center",
       
        flex:1
    },

    icon:{
        marginRight:300,
        marginBottom:-20
        
    },

   image:{
       height:50,
       width:50,
       borderRadius:25,
     

   },
   
   
   imageBox:{
       flex:5,
       marginTop:40,
       marginLeft:-150
   },

   itemImage:{
       flexDirection:"row"
   },

   textDetails:{
       flexDirection:"column",
       marginLeft:20,
       marginTop:8
   },

   mediaIcons:{
       flexDirection:"row",
       marginTop:10
    
   },


   twitter:{
       marginRight:10
   },

   detailsIcons:{
       flexDirection:"column",
       marginTop:10,
      
   },

   phoneIcon:{
       
       marginRight:10
       
   },

   iconBox:{
    flexDirection:"row",
    marginTop:10
    

   },

   topText:{
       color:"white"
   }
      
}) 
