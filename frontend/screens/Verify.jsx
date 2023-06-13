import { View, Text,  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputStyle, formStyles as styles } from '../styles/styles' 
import { TextInput , Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
const Verify = () => {
    const [otp,setOtp] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigation();
    const submithandler =() =>{
        console.log("YES")
        //
        navigate.navigate("login")
    }
    const loading = false; //Throttling
   return (
    
    <>
    <View style={{...defaultStyle, backgroundColor : colors.color2}}>

{/* Heading */}
<View style ={{
    marginBottom : 20 ,
}} > 
<Text style={formHeading}>Reset Password</Text>
</View>
<View style={styles.container}>
    <TextInput style ={{inputStyle, fontSize: 15,margin :10,}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='OTP'
     value= {otp} onChangeText={setOtp}  keyboardType="number-pad" />
     <TextInput style ={{inputStyle, fontSize: 15, margin :10,}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='New Password'
     value= {password} onChangeText={setPassword}    secureTextEntry = {true}/>

     <Button textColor={colors.color2} 
     disabled={otp === "" || password === ""} 
     onPress={submithandler} 
     style ={styles.btn}
     loading ={loading}
     >Reset Password</Button>
     <Text style={styles.or} >OR</Text>
     <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate.navigate("login")}>
        <Text style ={styles.link}>Resend OTP</Text>
     </TouchableOpacity>
</View>
</View>

    {/* Footer */}
    <Footer activeRoute='profile' />
    </>
  )
}



export default Verify