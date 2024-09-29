import React from 'react'
import { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const Sign_Up = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState
  const [password, setPassword] = useState
  return (
    <View style={{backgroundColor: "white"}}>
      <View style={{flex:1, justyconten:"center", alignItems:"center", paddingTop: 100}}>
        <Image source={require("./assets/DATA/Image 19.png")} style={{}} />
        <Text style={{fontSize: 30, fontWeight: "bold"}}>Nice to see you!</Text>
        <Text style={{fontSize: 15, color: "gray"}}>Create your account</Text>
      </View>
      <View style={{ flexDirection:"row",margin: 20, padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 10}} >
        <Image source={require("./assets/DATA/codicon_account.png")} style={{marginRight: 10}} />
        <TextInput placeholder="Enter your user name" style={{flex:1, color: "gray", fontWeight: "bold"}}/>
      </View>
      <View style={{ flexDirection:"row",margin: 20, padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 10}} >
        <Image source={require("./assets/DATA/Vector.png")} style={{marginRight: 10}} />
        <TextInput placeholder="Enter your email dress" style={{flex:1, color: "gray", fontWeight: "bold"}}/>
      </View>
      <View style={{ flexDirection:"row",margin: 20, padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 10}} >
        <Image source={require("./assets/DATA/lock.png")} style={{marginRight: 10}} />
        <TextInput placeholder="Enter your password" style={{flex:1, color: "gray", fontWeight: "bold"}}/>
      </View>
      
    </View>

  )
}

export default Sign_Up