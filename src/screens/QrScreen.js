import React from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';
import hair from "../../assets/hair.jpg"
import { Ionicons } from '@expo/vector-icons';
import { QRCode } from 'react-native-custom-qr-codes-expo';







export default function QrScreen ({navigation}){

    return(
     <View style={styles.container}> 

           
        {/* <View style={styles.redContainer}>
        <Ionicons  style={styles.icon}  style={styles.icon}name="ios-arrow-round-back" size={30} color="white"/>
           <Text style={styles.topText}>QrScreen</Text></View>
            <View style={styles.redContainerTwo}></View>  */}


            <View style={styles.textBox}>
                <View><Text>Exchange Contact Information</Text></View>
                <View><Text>Scan this QR code to scan your contacts</Text></View>

                <View style={styles.qrbox}>
                    <QRCode content='https://reactnative.com'/>
                </View>
                
            </View>

          
          <View style={styles.imageBox} >
            <View style={styles.itemImage}><Image source={hair}  style={styles.image}/>
            <View style={styles.textDetails}><Text>Mary Jimoh</Text>
            <Text>Sales Executive</Text>
            </View>
            </View>
            </View>



            <View style={styles.bottomBox}>
                <View><Text>want to add a new connection?</Text></View> 
                <TouchableOpacity 
                 onPress={()=>{
                    navigation.navigate("Scanner")
                }} 
                style={styles.scanBox}><Text style={styles.qrText}>Send QR</Text></TouchableOpacity>
               
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


    textBox:{
        flex:3,
        marginTop:60

    },

    qrbox:{
        marginTop:50
    },


    image:{
        height:50,
        width:50,
        borderRadius:25,
        marginRight:20
      
 
    },
    
    
    imageBox:{
        flex:5,
        marginTop:100,
        marginLeft:-140,
       flex:1
    },
 
    itemImage:{
        flexDirection:"row"
    },

    
   textDetails:{
       flexDirection:"column",
       marginLeft:10,
       marginTop:8
   },

   bottomBox:{
       flex:1,
       width:400,
       alignItems:"center",
       justifyContent:"center",
       borderTopColor:"grey",
       borderWidth:0.5,
       flexDirection:"row"
       
   },
   
   scanBox:{
      width:100,
       height:40,
       marginLeft:20,
       borderWidth:1,
       borderRadius:5,
       borderColor:"#e6194c",
       alignItems:"center",
       justifyContent:"center",
      
   },

   qrText:{
       color:"#e6194c"
   }

          
}) 
