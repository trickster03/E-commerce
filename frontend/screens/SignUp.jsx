import { View, Text,  TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputStyle,defaultImg , formStyles as styles } from '../styles/styles' 
import { TextInput , Button, Avatar} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'

const SignUp = () => {
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [country, setCountry] = useState("")
    const navigate = useNavigation();
    const disableBtn = !name || !email || !password || !address || !city || !country || !pincode
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
<Text style={formHeading}>Sign Up</Text>
</View>
<ScrollView showsVerticalScrollIndicator={false} style={{
    padding : 20,
    backgroundColor : colors.color3,
    elevation : 10,
    borderRadius : 10,
}}>
<View style={{minHeight : 900 }}>
    <Avatar.Image style={{
            alignSelf : "center",
            backgroundColor: colors.color1,
        }}
        size ={80}
        source={{
            uri: defaultImg,
        }}
        
    />
    <TouchableOpacity onPress={()=> navigate.navigate("camera")}>
        <Button textColor={colors.color1} >Change Photo</Button>
    </TouchableOpacity>

    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Name'
     value= {name} onChangeText={setName} />
     

    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Email'
     value= {email} onChangeText={setEmail}  keyboardType='email-address' />
     
     <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Password'
     value= {password} onChangeText={setPassword} />


    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Address'
     value= {address} onChangeText={setAddress} />

    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='City'
     value= {city} onChangeText={setCity} />

    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Country'
     value= {country} onChangeText={setCountry} />

    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Pincode'
     value= {pincode} onChangeText={setPincode} keyboardType='number-pad' />

     <Button textColor={colors.color2} 
     disabled={disableBtn} 
     onPress={submithandler} 
     style ={styles.btn}
     loading ={loading}
     >Sign Up</Button>
     <Text style={styles.or} >OR</Text>
     <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate.navigate("login")}>
        <Text style ={styles.link}>Login</Text>
     </TouchableOpacity>
</View>
</ScrollView>
</View>

    {/* Footer */}
    <Footer activeRoute='profile' />
    </>
  )
}



export default SignUp