import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native-web';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{padding:18}}>
        <Image source={require("./assets/DATA/Container 17.png")}/>
        <text style={{fontSize:20, fontWeight:700, marginTop:18, marginLeft:15}}>Boost Productivity</text>
        <text style={{marginLeft:15,marginTop:13}}>Simplify tasks, boost productivity</text>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate("SignUpScreen")}}
        style={{backgroundColor:'#25c3d9',marginTop:15,borderRadius:999,padding:8,alignItems:'center',justifyContent:'center'}}>
          <text style={{color:'white'}}>Sign up</text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate("LoginScreen")}}
        style={{marginTop:10,borderRadius:999,padding:8,alignItems:'center',justifyContent:'center'}}>
          <text style={{}}>Login</text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})