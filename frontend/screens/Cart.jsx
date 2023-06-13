import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import CartComponent from '../components/CartComponent'
import { Button } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
export const CartItems =[{
    name : "Mackbook" ,
    image : ("https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg") , 
    product : "jksahd" , 
    stock : 3 , 
    price : 89999 ,
    quantity : 2
},
{
    name : "iPad" , 
    image : ("https://m.media-amazon.com/images/I/71VbHaAqbML._SX679_.jpg" ), 
    product : "jksahasdd" ,
    stock : 3 ,
    price : 54999 ,
    quantity : 5,
},
{
    name : "Prakhar" ,
    image : ("https://media.licdn.com/dms/image/C4D03AQHfOlZDZABFMw/profile-displayphoto-shrink_800_800/0/1658477771710?e=1690416000&v=beta&t=CsY60AZS5Cqyvi3a3vZr4MjKC_RYWob_IIaY69C9jBQ") , 
    product : "jksahddsff" , 
    stock : 3 , 
    price : 0 ,
    quantity : 2
}]

const Cart = () => {
    const navigate = useNavigation();
    const route =useRoute();

    const incrementHandler = (id,qty,stock) =>{
        console.log("Increasing",id,qty,stock)
    }
    const decrementHandler = (id,qty,stock) =>{
        console.log("Decreasing",id,qty,stock)
    }
  return (
    <View style={{
        ...defaultStyle,
        padding:0,
    }}>
        <Header emptyCart ={false} back={true} />
        {/* Heading */}
        <Heading text1="Shopping" text2="Cart" containerStyle={{
                paddingTop : 70,
                marginLeft : 35,
        }} />
        <View style={{
            flex :1,
            paddingVertical: 20,
        }}>
            <ScrollView>
                {
                    CartItems.map ((item,index)=>(// '()' automatically returns the item to be rendered but if we use '{}' we'll have to add a return statement
                        <CartComponent key={item.product} 
                        id ={item.product} 
                        name={item.name}
                        stock={item.stock}
                        amount ={item.price}
                        imgSrc= {item.image}
                        index ={index}
                        qty ={item.quantity}
                        incrementHandler ={incrementHandler}
                        decrementHandler ={decrementHandler}
                        navigate={navigate} />
                    ))
                }
            </ScrollView>
        </View>
        <View style={{
            flexDirection :"row",
            justifyContent:"space-between",
            paddingHorizontal : 35,
        }}>
            <Text>5 Items</Text>
            <Text>₹5</Text>
        </View>
        <TouchableOpacity /*onPress={CartItems.length >0 ? ()=>navigate.navigate('confirmorder') : null}*/
        onPress={()=> navigate.navigate("confirmorder")}>
            <Button style={{
                backgroundColor: colors.color3,
                borderRadius: 100,
                padding: 5,
                margin: 30,
            }} icon={"cart"} textColor={colors.color2}>Checkout</Button>
        </TouchableOpacity>
      
    </View>
  )
}




export default Cart