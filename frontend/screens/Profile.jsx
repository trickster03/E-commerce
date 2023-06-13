import { StyleSheet,View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle , formHeading } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useNavigation } from '@react-navigation/native'
const Profile = () => {
    const [avatar, setAvatar] = useState(null)
    const user={
        name : "Pranjal",
        email : "prjrules07@gmail.com"
    }
    const navigate = useNavigation()
    const logoutHandler = () =>{
        console.log("Signing Out")
    }
    const navigateHandler = (text) =>{
        const key = text
        switch(key){
            case "Admin" :
                navigate.navigate("adminpanel")
                break;
            case "Orders" :
                navigate.navigate("orders")
                break;
            case "Profile" :
                navigate.navigate("updateprofile")
                break;
            case "Password" :
                navigate.navigate("changepassword")
                break;
            case "Log Out" :
                logoutHandler()
                break;

        }
    }
    const loading=false
  return (
    <>
    <View style={defaultStyle}>
      <View style ={{
    marginBottom : 20 ,}} > 
    <Text style={formHeading}>Profile</Text>
    </View>

    {/* Loading */}

    {
        loading ? <Loader /> : (
        <>
        <View style={styles.container}>
            <Avatar.Image source={{
                uri : avatar,
            }} size={100} style={{backgroundColor : colors.color1}} />
            <TouchableOpacity onPress={()=>("camera", {updateProfile: true})}>
            <Button textColor={colors.color2}>Change Photo</Button>
            </TouchableOpacity>
            <Text style={styles.name}>{user?.name}</Text>
            <Text style={{fontWeight: "300" , color: colors.color2}}>{user?.email}</Text>
        </View>
        <View>
        <View style={{
            flexDirection: "row",
            // flexWrap : "wrap",
            margin: 10,
            justifyContent: "space-between",
        }}>
            <ButtonBox  icon ={"format-list-checkbox"} text={"Orders"} handler={navigateHandler}/>
            <ButtonBox   icon={"view-dashboard"} text={"Admin"} handler={navigateHandler}  reverse={true} />
            <ButtonBox icon={"pencil"} text={"Profile"}  handler={navigateHandler} />
            
        </View>
        <View style={{
            flexDirection: "row",
            // flexWrap : "wrap",
            margin: 10,
            justifyContent: "space-evenly",
        }}>
            <ButtonBox  icon ={"pencil"} text={"Password"} handler={navigateHandler}/>
            <ButtonBox  icon ={"exit-to-app"} text={"Log Out"} handler={navigateHandler}/>
        </View>
        </View>
        </>)
    }
    
    </View>
    <Footer />
    </>
  )
}
const styles= StyleSheet.create ({
    container : {
        elevation : 7,
        backgroundColor : colors.color3,
        padding: 30,
        borderRadius : 10,
        alignItems : "center",
    },
    name:{
        fontWeight: "500",
        marginTop:10,
        color : colors.color2,
        fontSize: 20,
    }
})

const ButtonBox = ({icon,text,handler,reverse})=>{
    return (
        <TouchableOpacity /*disabled={loading}*/ activeOpacity={1} style={{
            backgroundColor : reverse ? colors.color1 : colors.color3,
            height: 80,
            width: 80,
            borderRadius: 20,
            alignItems:"center",
           
        }} onPress={()=> handler(text)} >
            <Avatar.Icon size={50} 
            color={colors.color2} 
            style={{backgroundColor:colors.color3}}
            icon={icon}
            />
            <Text style={{
                color:colors.color2,
                textAlign:"center",

            }} >{text}</Text>
        </TouchableOpacity>
    )
}

export default Profile