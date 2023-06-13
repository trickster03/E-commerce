import { TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from "../styles/styles"
import { useNavigation , useRoute} from "@react-navigation/native"
import { Avatar } from 'react-native-paper'
const header = ({back, emptyCart=false}) => {
    const route = useRoute();
    const navigate=useNavigation();

    const emptyCartHandler = () =>{
        console.log("Empty Cart")
    }  

  return (
  <>{ back && (
    (
       <TouchableOpacity
  style={{
   position:"absolute",
   left: 30,
   top: 40,
   zIndex: 10,
  }}
  onPress={emptyCart ? emptyCartHandler : () => navigate.navigate("home")}>

   <Avatar.Icon icon={"arrow-left"} 
   color={route.name==="productdetails" ? colors.color2 : colors.color3}
   style={{backgroundColor: colors.color4}}
   /> 
  </TouchableOpacity>
 ))}

  <TouchableOpacity
  style={{
    position:"absolute",
    right: 20,
    top: 40,
    zIndex: 10,
   }}
   onPress={() => navigate.navigate("cart")}>
 
    <Avatar.Icon icon={emptyCart ? "delete-outline" : "cart-outline"} 
    color={route.name==="productdetails" ? colors.color2 : colors.color3}
    style={{backgroundColor: colors.color4}} /> 
    
  </TouchableOpacity>

 </>
    
  )}
   


export default header