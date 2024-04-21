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

const VerifyOPT=({navigation})=>{
    const handleVerify=()=>{
        navigation.navigate("NewPasswordScreen")
        }
return(
    <SafeAreaView style={styles.container}>
        <NavHeader navigation={navigation} secondColor={"#fa6e23"}/>
        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>Verification</Text>
        
        <Text style={[styles.text,{textAlign:"auto",margin:25}]}>We've sent OPT to your mobile number
         at *******013. Please enter four digit code you receive.</Text>
        
        {/* User Input Section */}
        
        <View style={styles.Box}>
            <View style={styles.CodeInputMainBox}>
            <View style={styles.CodeInputBox}>
                <Text style={{fontSize:28}}>5</Text>
            </View>
            <View style={styles.CodeInputBox}>
                <Text style={{fontSize:28}}>7</Text>
            </View>
            <View style={styles.CodeInputBox}>
                <Text style={{fontSize:28}}>9</Text>
            </View>
            <View style={styles.CodeInputBox}>
                <Text style={{fontSize:28}}>-</Text>
            </View>
            </View>

            <View style={{alignItems:"center",marginTop:40}}>
                <Text style={{color:"#969090"}}>Did'nt receive code?</Text>
                <Text style={{marginTop:10,fontWeight:"bold",color:"#B3B2B2"}}>Resend in 35 s</Text>
                <Text style={{fontSize:12,color:"#349feb",marginTop:10}}>Resend Code</Text>
            </View> 
        </View>
        <View style={{margin:25}}>
        <Button title='Verify' onPress={handleVerify}/></View>
        
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
        CodeInputMainBox:{
            flexDirection:"row",
            justifyContent:"space-around"
        },
        CodeInputBox: {
            // borderWidth:1,
            width:50,
            borderRadius:10,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#fcc4a8"

        }

})
export default VerifyOPT
