import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputStyle , formStyles as styles } from '../styles/styles' 
import { TextInput , Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [oldpassword, setOldPassword] = useState("")
    const navigate = useNavigation();
    const submithandler =() =>{
        console.log("YES")
    }
    const loading = false; //Throttling
   return (
    
    <>
    <View style={{...defaultStyle, backgroundColor : colors.color2}}>

{/* Heading */}
<View style ={{
    marginBottom : 20 ,
}} > 
<Text style={formHeading}>Change Password</Text>
</View>
<View style={styles.container}>
      <TextInput style ={{inputStyle, fontSize: 15, margin :10,}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Password'
     value= {oldpassword} onChangeText={setOldPassword}  secureTextEntry = {true}
     />
      <TextInput style ={{inputStyle, fontSize: 15, margin :10,}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='New Password'
     value= {newPassword} onChangeText={setNewPassword}  secureTextEntry = {true}
     />
     <TouchableOpacity activeOpacity={0.8} onPress={()=> navigate.navigate("forgetpassword")}>
        <Text style ={styles.forget}>Forget Password?</Text>
     </TouchableOpacity>

     <Button textColor={colors.color2}
     disabled={ newPassword || oldpassword === "" } 
     onPress={submithandler} 
     style ={styles.btn}
     loading ={loading}
     >Log In</Button>
     <Text style={styles.or} >OR</Text>
     <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate.navigate("signup")}>
        <Text style ={styles.link}>Sign Up</Text>
     </TouchableOpacity>
</View>
</View>
    </>
  )
}

export default ChangePassword