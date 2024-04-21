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

const NewPasswordScreen=({navigation})=>{
    const handleContinue=()=>{
        navigation.navigate("SignIn")
        }
return(
    <SafeAreaView style={styles.container}>
         <NavHeader navigation={navigation} secondColor={"#fa6e23"} thirdColor={"#fa6e23"}/>
        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",marginTop:10}}>Create new password</Text>
        
        <Text style={[styles.text,{textAlign:"center"}]}> Create new password for your account</Text>
        
        {/* User Input Section */}
        
        <View style={styles.Box}>
            
            <Text style={styles.text}> New Password</Text>
            <View style={styles.InputBox}>
            <SimpleLineIcons name="lock" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='*************' />
            </View>

            <Text style={styles.text}> Confirm New Password</Text>
            <View style={styles.InputBox}>
            <SimpleLineIcons name="lock" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='*************' />
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
export default NewPasswordScreen
