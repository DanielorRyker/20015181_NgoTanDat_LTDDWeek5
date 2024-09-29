import React from 'react'
import { useState } from 'react'
import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import CheckBox from 'expo-checkbox'

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agree, setAgree] = useState(false)
  return (
    <View style={{
      backgroundColor: "white"}}>
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
        <Image source={require("./assets/DATA/eye.png")} style={{marginLeft: 10}} />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 15,
            padding: 15,
            alignItems: "center",
          }}
        >
        <CheckBox
          style={{marginRight: 10}}
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />

          <Text style={{textAlign: "center", color: "gray"}}>
            I agree with 
            <TouchableOpacity
              style={{color: "#4630EB"}}
            > Terms & Conditions</TouchableOpacity>
          </Text>
        </View>

        <TouchableOpacity
          style={{
            margin: 20,
            padding: 15,
            alignItems: "center",
            backgroundColor: "#4630EB",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUp