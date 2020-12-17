import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function Scanner({navigation}){

        const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);
      
        useEffect(() => {
          (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
          })();
        }, []);
      
        const handleBarCodeScanned = ({ type, data }) => {
          setScanned(true);
          navigation.navigate("MemberProfile")
        };
      
        if (hasPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        }

    return(
     <View style={styles.container}> 
            <View  style={styles.ScreenScan}>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

      
           <MaterialCommunityIcons style={styles.icon} name="window-close" size={24} color="white" />


    </View>

    <View style={styles.redContainer}>
          <View><Text style={styles.topText}>Want to share your contact?</Text></View>
          <TouchableOpacity 
            onPress={()=>{
              navigation.navigate("QrScreen")
          }} 
          style={styles.text}><Text>Send QR</Text></TouchableOpacity>
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
        backgroundColor:"white",
        flexDirection:"row",
        height:100,
        width:400,
        alignItems:"center",
        justifyContent:"center",
        
        
    },

    ScreenScan:{
        flex:5,
        width:400,
       
    },

    text:{
        width:100,
        height:40,
        marginLeft:20,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#e6194c",
        alignItems:"center",
        justifyContent:"center",
    }

    ,
    icon:{
        marginLeft:330,
        marginBottom:30
    }






    
          
}) 