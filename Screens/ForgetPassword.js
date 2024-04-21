import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import {SafeAreaView, } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import Button from '../Component/Button';
import NavHeader from '../Component/NavHeader';
import { Entypo } from '@expo/vector-icons';

const ForgetPassword=({navigation})=>{
    const handleContinue=()=>{
        navigation.navigate("VerifyOPT")
        }
return(
    <SafeAreaView style={styles.container}>
        <NavHeader navigation={navigation}/>
        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}> Forgot Password</Text>
        
        <Text style={[styles.text,{textAlign:"center"}]}> Please enter your mobile number to get OPT</Text>
        
        {/* User Input Section */}
        
        <View style={styles.Box}>
            
            <Text style={styles.text}>Mobile Number</Text>
            <View style={styles.InputBox}>
            <SimpleLineIcons name="phone" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='0300xxxxxxx' />
            </View>

            

            {/* Select Platform */}
            <View style={{marginTop:10}}>
             <Text style={{marginLeft:8,fontWeight:"bold",color:"#747474",fontSize:12}}>Select Platform</Text>
             <View style={styles.platformMainBox}>
                {/* whatsapp */}
             <View style={styles.platformBox}>
             <MaterialIcons name="circle" size={14} color="#9b9b9b" />
             <Text style={styles.platformText}>Whatsapp</Text>
             </View>
               {/* sms */}
            <View style={styles.platformBox}>
            <Ionicons name="checkmark-circle" size={14} color="#fc6c25" />
             <Text style={styles.platformText}>Sms</Text>
            </View>

           </View>
            </View>

        
        </View>
        <View style={{margin:25}}>
        <Button
            title='Continue'
            onPress={handleContinue}/></View>
        
    </SafeAreaView>
)
}
const styles=StyleSheet.create({
    container:{
        flex:1,   
        backgroundColor:"#fafafa",
        },
        
        Box:{
            // borderWidth:1,
            // borderColor:"red",
            flex:1,
            marginLeft:25,
            marginRight:25,
            marginTop:20,
            
        },
        text:{
         fontWeight:"bold",
         color:"#747474",
         
        },
        InputBox:{
            flexDirection:"row",
            borderWidth:1,
            marginTop:10,
            padding:10,
            borderRadius:10,
            borderColor:"#fa6e23",
            alignItems:"center",
            marginBottom:10
        },
        platformMainBox:{
            flexDirection:"row",
            justifyContent:"space-between",
            
            marginLeft:15,
            marginRight:140,
            marginTop:10
        },
        platformBox:{
            
            flexDirection:"row",
            alignItems:"center"
            
        },
        platformText:{
            fontSize:12,
            marginLeft:10,
            color:"#9b9b9b",
            fontWeight:"600"
        }

})
export default ForgetPassword
