import { View, Text,  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputStyle, formStyles as styles } from '../styles/styles' 
import { TextInput , Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
const ForgetPass = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigation();
    const submithandler =() =>{
        console.log("YES")
        //
        navigate.navigate("verify")
    }
    const loading = false; //Throttling
   return (
    
    <>
    <View style={{...defaultStyle, backgroundColor : colors.color2}}>

{/* Heading */}
<View style ={{
    marginBottom : 20 ,
}} > 
<Text style={formHeading}>Forget Password</Text>
</View>
<View style={styles.container}>
    <TextInput style ={{inputStyle, fontSize: 15, margin :10,}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Email'
     value= {email} onChangeText={setEmail}  keyboardType='email-address' />
     

     <Button textColor={colors.color2} 
     disabled={email === "" } 
     onPress={submithandler} 
     style ={styles.btn}
     loading ={loading}
     >Send OTP</Button>
     <Text style={styles.or} >OR</Text>
     <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate.navigate("login")}>
        <Text style ={styles.link}>Login</Text>
     </TouchableOpacity>
</View>
</View>

    {/* Footer */}
    <Footer activeRoute='profile' />
    </>
  )
}



export default ForgetPass