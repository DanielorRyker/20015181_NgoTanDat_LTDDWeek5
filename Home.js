import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native-web';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#f5f5f5'
    }}>
        <Image source={require("./assets/DATA/Container 17.png")}/>
        <text style={{fontSize:20, fontWeight:700, marginTop:18, marginLeft:40, textAlign: 'left', width: '100%'
        }}>Boost Productivity</text>
        <text style={{marginLeft:40,marginTop:13, textAlign: 'left', width: '100%'}}>Simplify tasks, boost productivity</text>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate("SignUp")}}
        style={{backgroundColor:'#25c3d9',marginTop:15,borderRadius:50,padding:8, width:"90%"}}>
          <text style={{color:'white',
          textAlign:'center'
          }}>Sign up</text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate("Login")}}
        style={{marginTop:10,borderRadius:50,padding:8, width: "90%"}}>
          <text style={{textAlign: 'center'}}>Login</text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})