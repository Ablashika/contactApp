import React from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';
import codetrain from  '../../assets/codetrain.png'

export default function LogoScreen ({navigation}){

    return(
        <View style={styles.container}> 
        
             <View style={styles.imageBox}>
               <Image source={codetrain} style={styles.image}/>
               
          </View>
           <View style={styles.textBox}> 
        
             <Text style={styles.Contact}>CODETRAIN </Text>
             <Text style={styles.Contact}>CONTACTS</Text>
                
             </View>

            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("HomeScreen")
            }} 
            style={styles.lastBox} 
            ><Text style={styles.textTwo}>Get Started</Text>
                 <View style={styles.redContainerTwo}></View>
            </TouchableOpacity>
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
    

    textBox:{
       flex: 2,
        marginTop:30,
       alignItems:"center",
        justifyContent:"center"  
    },

    imageBox:{
       flex: 2,
       justifyContent: "center",
       
    },
    image:{
        height:50,
        width:260,   

    },


    textTwo:{
      fontSize:17
    },

    
icon:{
    marginRight:300,
    marginBottom:-20
    
},

lastBox:{
    flex:2,
    alignItems:"center",
    justifyContent:"center",
    width:400,
    height:300
},

Contact:{
    fontSize:20
},
redContainerTwo:{
    backgroundColor:"red",
    height:2,
    width:80,
    marginLeft:30

}
    
})