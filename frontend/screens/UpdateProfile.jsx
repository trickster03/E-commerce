import { View, Text,  ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputStyle, formStyles as styles } from '../styles/styles' 
import { TextInput , Button} from 'react-native-paper'
import Header from '../components/Header'
const UpdateProfile = ({navigation}) => {
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [country, setCountry] = useState("")
    // const navigate = useNavigation();
    const disableBtn = !name || !email ||  !address || !city || !country || !pincode
    const submithandler =() =>{
        console.log("YES")
        //
        navigate.navigate("verify")
    }
    const loading = true; //Throttling
   return (
    <View style={defaultStyle}>
    <Header back={true} />
{/* Heading */}
<View style ={{
    marginBottom : 20 ,
    paddingTop : 70,
}}> 
<Text style={formHeading}>Update Profile</Text>
</View>
<ScrollView showsVerticalScrollIndicator={false} style={{
    padding : 20,
    backgroundColor : colors.color3,
    elevation : 10,
    borderRadius : 10,
}}>
<View >
    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Name'
     value= {name} onChangeText={setName} />
     

    <TextInput style ={{inputStyle, fontSize: 15, margin : 10}} mode={"outlined"} activeOutlineColor={colors.color1} placeholder='Email'
     value= {email} onChangeText={setEmail}  keyboardType='email-address' />


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
     >Update</Button>
     
</View>
</ScrollView>
</View>

  )
}



export default UpdateProfile