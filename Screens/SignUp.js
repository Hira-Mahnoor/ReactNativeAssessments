import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import {SafeAreaView, } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import Button from '../Component/Button';

const SignUp=({navigation})=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const handleSignUp=()=>{
        navigation.navigate("SignIn")
        }
return(
    <SafeAreaView style={styles.container}>
       
        <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{fontSize:18,fontWeight:"bold",left:70}}> Create Account</Text>
        </View>
        <Text style={[styles.text,{textAlign:"center"}]}> It's free and easy to set up!</Text>

        {/* User Input Section */}
        
        <View style={styles.Box}>
            <Text style={styles.text}>Username</Text>
            <View style={styles.InputBox}>
            <SimpleLineIcons name="user" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='Mateen' />
            </View>
            <Text style={styles.text}>Mobile Number</Text>
            <View style={styles.InputBox}>
            <SimpleLineIcons name="phone" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='0300xxxxxxx' />
            </View>

            <Text style={styles.text}>Password</Text>
            <View style={styles.InputBox}>
            <SimpleLineIcons name="lock" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='*************' />
            </View>

            <Text style={styles.text}>Institute Name</Text>
            <View style={styles.InputBox}>
            <SimpleLineIcons name="graduation" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='University of technology' />
            </View>

            {/* term and condition box */}
            <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <CheckBox
              style={{ width: 12, height: 12 }}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
            <Text style={{marginLeft:8,fontWeight:"500",color:"#747474",fontSize:12}}>I accept the terms & conditions</Text>
            </View>

            {/* Sign Up Button */}
            <View style={{marginTop:30}}>
            <Button
            title='Sign Up'
            onPress={handleSignUp}
            />
            </View>

            {/* Sign In Section */}
            {/* SignUp Section */}
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}}>
        <Text style={{fontWeight:"600"}}>
            Already have an account?
        </Text>
        <TouchableOpacity onPress={handleSignUp}>
            <Text style={{fontWeight:"bold",color:"#fa6e23"}}> Sign In</Text>
        </TouchableOpacity>
       </View>


        </View>
    </SafeAreaView>
)
}
const styles=StyleSheet.create({
    container:{
        flex:1,   
        backgroundColor:"#fafafa"
        },
        header:{
            // borderWidth:1,
            flexDirection:"row",
            marginLeft:25,
            marginRight:25,
            marginBottom:10
        },
        Box:{
            // borderWidth:1,
            // borderColor:"red",
            marginLeft:25,
            marginRight:25,
            marginTop:80
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

})
export default SignUp
