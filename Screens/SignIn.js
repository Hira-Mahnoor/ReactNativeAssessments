import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput,
    FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import Button from '../Component/Button';
import {SafeAreaView, } from 'react-native-safe-area-context';



const SignIn=({navigation})=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const handleSignIn=()=>{
    navigation.navigate("SignUp")
    }

return(
    <SafeAreaView style={styles.container}>
        <View style={styles.Box}>
        <Image source={require('../assets/logo.png')} style={styles.Image}/>
        </View>
        <View style={styles.Box2}>
        <Text style={{fontSize:25,color:"#fa6e23",fontWeight:"bold"}}>Welcome!</Text>
        <Text style={{fontSize:18,color:"#272727",fontWeight:"500"}}>Sign In to Continue</Text>
        
         {/* Mobile Number and Password section */}
        <View style={{borderWidth:0,borderColor:"red",marginTop:25}}>
            <Text style={styles.text}>Mobile Number</Text>
            <View style={styles.InputBox}>
            <Feather name="phone" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='0300xxxxxxx' />
            </View>

            <Text style={styles.text}>Password</Text>
            <View style={styles.InputBox}>
            <MaterialIcons name="lock-outline" size={24} color="#B3B2B2" />
            <TextInput style={{marginLeft:10}} placeholder='Enter password' />
            </View>
        </View>
        
        {/* Remember me and forget box */}
        <View style={{borderWidth:0,flexDirection:"row",justifyContent:"space-between",marginTop:30}}>
            <View style={{borderWidth:0,flexDirection:"row",alignItems:"center",}}>
            <CheckBox
              style={{ width: 14, height: 14 }}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
            <Text style={{marginLeft:8,fontWeight:"600",color:"#747474"}}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("ForgetPassword")}}>
             <Text style={{fontWeight:"bold",color:"#fa6e23",textDecorationLine:"underline"}}>Forget Password?</Text>
            </TouchableOpacity>
        </View>

        {/* SignIn Button */}
        <View style={{marginTop:30}}>
            <Button
            title='Sign In'
            onPress={handleSignIn}
            />
        </View>

        {/* SignUp Section */}
       <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}}>
        <Text style={{fontWeight:"600"}}>
            Don't have a account?
        </Text>
        <TouchableOpacity onPress={handleSignIn}>
            <Text style={{fontWeight:"bold",color:"#fa6e23"}}> Sign Up</Text>
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
    Box:{
        borderWidth:0,
        flex:1,
        justifyContent:"center",
        borderColor:"red",
        marginLeft:25,
        marginRight:25,
        
    },
    Image:{
        // marginTop:100,
        width:100,
        height:100,
        alignSelf:"center",
       },

    Box2:{
        borderWidth:0,
        flex:2,
        borderColor:"red",
        marginLeft:25,
        marginRight:25
    },
    text:{
        color:"#747474",
        fontSize:14,
        fontWeight:"500",
        marginTop:10
    },
    InputBox:{
        flexDirection:"row",
        borderWidth:1,
        marginTop:10,
        padding:10,
        borderRadius:10,
        borderColor:"#fa6e23",
        alignItems:"center"
    },
    
})


export default SignIn
