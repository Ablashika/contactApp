import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList, Button, Platform, ImageBackground, ScrollView, SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {connect} from 'react-redux'
import {createEmailAccount} from '../redux/actions/authActions'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'






 function Register ({navigation, createEmailAccount}){

    const [details, setDetails] = useState({
      fullname:"",
      email:"",
      phonenumber:"",
      role:"",
      twitter:"",
      linkedIn:"",
      password:"",
   });
  

   const handleUpdateState = (name, value)=>{
     setDetails({...details, [name]:value})
   }

   const handleOnsubmit = () =>{
      createEmailAccount(details.email, details.password)
   }
  

      const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    return(
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <ScrollView>

        
        <View style={styles.container}> 


           
                 {/* <View style={styles.redContainer}>
                 <Ionicons  style={styles.icon}  style={styles.icon}name="ios-arrow-round-back" size={30} color="white"   />
                    <Text style={styles.topText}>Register</Text></View> */}

             <View style={styles.redContainerTwo}></View>   
           

           <ImageBackground Image source={image?{ uri: image }:null} style={styles.imageBox}>

               
                   <MaterialIcons name="person-outline" size={24} color="red" />
                   <Button  title={image?'Edit Photo' :'Add Photo'}  onPress={pickImage} /> 
               
                   
         </ImageBackground>
         

         <View style={styles.contactInfo}>
  

             <View style={styles.details}  >
                 
                 <View style={styles.textContainer}><Text style= {styles.textDetails}>Fullname</Text></View>
              <View style={styles.textBox}> 
                <TextInput
                        style={styles.input} 
                       
                        placeholderTextColor="#aaaaaa"
                        placeholder ="fullname"
                        textAlign="right"
                        value={details.fullname}
                        onChangeText={(text)=>{
                          handleUpdateState('fullname',text)}}
                        >  
                </TextInput>
              </View>

             </View>
            <View  style={styles.details}> 
              <View style={styles.textContainer}><Text  style={styles.textDetails}>Email</Text></View>
               <View style={styles.textBox}> 
                 <TextInput
                        style={styles.input} 
                        placeholderTextColor="#aaaaaa"
                         placeholder ="Email"
                         textAlign="right"
                         value={details.email}
                         onChangeText={(text)=>{
                          handleUpdateState('email',text)}}
                         >  
                </TextInput>
              </View>  
            </View>
              <View  style={styles.details}>
            
                <View style={styles.textContainer}><Text style={styles.textDetails}>Phone Number</Text></View>
                 

                <View style={styles.textBox}> 
               
                    <TextInput
                        style={styles.input} 
                        placeholderTextColor="#aaaaaa"
                        placeholder ="phone number"
                        textAlign="right"
                        valu={details.phonenumber}
                        onChangeText={(text)=>{
                          handleUpdateState('phoneBNumber',text)}}
                        >  
                    </TextInput>
                  </View>
               </View>
             <View style={styles.details}>
               <View style={styles.textContainer}><Text  style={styles.textDetails}>Role</Text></View>
                <View style={styles.textBox}> 
                  <TextInput
                        style={styles.input} 
                        value={details.role}
                        placeholderTextColor="#aaaaaa"
                        placeholder ="Role"
                        textAlign="right"
                        onChangeText={(text)=>{
                         handleUpdateState('role',text)}}
                        >  
                  </TextInput>
                </View>
             </View>
             <View  style={styles.details}>
                             
               <View style={styles.textContainer}><Text  style={styles.textDetails}>Twitter</Text></View>
               <View style={styles.textBox}> 
                 <TextInput
                        style={styles.input} 
                        value={details.twitter}
                        placeholderTextColor="#aaaaaa"
                        placeholder ="Twitter" 
                        textAlign="right"
                        onChangeText={(text)=>{
                         handleUpdateState('twitter',text)}}
                        >  
                  </TextInput>
               </View>
             </View>
             <View  style={styles.details}>
             <View style={styles.textContainer}><Text  style={styles.textDetails}>Linked In</Text></View>
             <View style={styles.textBox}> 
               
                <TextInput
                        style={styles.input} 
                        value={details.linkedIn}
                        placeholderTextColor="#aaaaaa"
                        placeholder ="" 
                        textAlign="right"
                        onChangeText={(text)=>{
                         handleUpdateState('linkedIn',text)}}
                        >  
                </TextInput>

             </View>
            </View>
            <View  style={styles.details}>
             <View style={styles.textContainer}><Text  style={styles.textDetails}>password</Text></View>
             <View style={styles.textBox}> 
               
                <TextInput
                        style={styles.input} 
                        value={details.password}
                        placeholderTextColor="#aaaaaa"
                        placeholder ="" 
                        textAlign="right"
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                         handleUpdateState('password',text)}}
                        >  
                </TextInput>

             </View>
            </View>

                      
         </View>
      
         <TouchableOpacity 
          onPress={
            handleOnsubmit
        } 
         style={styles.boxRegister}><Text>Register</Text></TouchableOpacity>
       

        </View>

        </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
       flex:1, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    },


    scrollView: {
     marginTop:50
    },

    redContainer:{
        backgroundColor:"#e6194c",
        height:100,
        width:400,
        flex:0.5,
        alignItems:"center",
        justifyContent:"center"
    },

    imageBox:{
        flex:1.2,
        height:150,
        width:600,
        alignItems:"center",
        justifyContent:"center"
        },

        contactInfo:{
            
            flex:2.5,
         
            width:400,
            flexDirection:"column",
          
        },

        icon:{
            marginRight:300,
            marginBottom:-20
            
        },
        details:{
            flexDirection:"row",
            marginLeft:30,
            marginBottom:30,
            borderBottomColor:"grey",
            borderBottomWidth:1,
            height:30,
            width:350,
            alignItems:"center",
            flex:1
           
        },

        textDetails:{
         
      
           
        },

        boxRegister:{
            height:50,
            alignItems:"center",
            backgroundColor:"#e6194c",
            justifyContent:"center",
            marginBottom:30,
            width:350,
            marginHorizontal:30,
            borderRadius:10
        },


        textContainer:{
          flex:2

        }

        ,

        textBox:{
          flex:4,
        
        }

    
})


const mapStateToProps = (state) => {
  return {auth:state}
} 
export default connect(mapStateToProps,{createEmailAccount})(Register)
