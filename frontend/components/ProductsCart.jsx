import {Image ,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

const ProductsCart = ({
    stock,
    name,
    image,
    price,
    id,
    addToCartHandler,
    i,
    navigate,
}) => {
  return (
   <TouchableOpacity activeOpacity={1} onPress={()=> navigate.navigate("productdetails",{id})} >
    
    <View style={{
        elevation: 5,
        width: 220,
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,
        borderRadius: 20,
        height: 400,
        backgroundColor: i%2 === 0 ? colors.color1 : colors.color2
    }}>

    <Image 
            source={{
                uri : image,
            }}
            style={{
                width: "100%",
                height: 200,
                resizeMode: "contain",
                position   : "absolute",
                left : 1,
                top : 150,
            }}
    />
    <View style={{
        flexDirection:"row",
        padding: 20,
        justifyContent: "space-around",
        width : "100%",
    }}>
        <Text 
            numberOfLines={2}
            style={{
                color : i%2 === 0 ? colors.color2 : colors.color3,
                fontSize : 17,
                fontWeight : "300",
            }}        
        > {name}</Text>

        <Text 
            numberOfLines={2}
            style={{
                color : i%2 === 0 ? colors.color2 : colors.color3,
                fontSize : 12,
                fontWeight : "700",
                top : 50,
                right : 100
            }}        
        > ₹{price}</Text>
    </View>

            <TouchableOpacity style ={{
                backgroundColor : i%2=== 0 ? colors.color2 : colors.color3,
                borderRadius: 0,
                borderBottomRightRadius : 20,
                borderBottomLeftRadius : 20,
                width : "100%"
            }}>
                <Button textColor= {i%2===0 ? colors.color1 : colors.color2 }
                onPress={addToCartHandler(id,stock)}>
                    Add to cart
                </Button>
            </TouchableOpacity>

    </View>

   </TouchableOpacity>
  )
}

export default ProductsCart