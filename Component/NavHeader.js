import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NavHeader= ({ title, onPress,secondColor,thirdColor}) => {
  return (
   <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <View style={{flexDirection:"row"}}>
        <View style={[styles.barBox,{backgroundColor:"#fa6e23"}]}>
        </View>
        <View style={[styles.barBox,{backgroundColor: secondColor || "#9b9b9b"}]}>
        </View>
        <View style={[styles.barBox,{backgroundColor: thirdColor || "#9b9b9b"}]}>
        </View>
        </View>

        </View> 
  );
};

const styles = StyleSheet.create({
    header:{
        borderWidth:0,
        flexDirection:"row",
        marginLeft:25,
        marginRight:25,
        marginBottom:10,
        alignItems:"center",
        padding:5,
        justifyContent:"space-between"
        
    },
    barBox:{
        borderWidth:0,
        width:80,
        height:5,
        margin:5,
        borderRadius:5
    }
 
});

export default NavHeader;
