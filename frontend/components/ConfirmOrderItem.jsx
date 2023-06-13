import { View, Text, Image } from 'react-native'
import React from 'react'

const ConfirmOrderItem = ({image, name,price,quantity}) => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
    }}>
      <Image source={{
        uri: image
      }} style={{
        width: 50,
        height: 50,
        resizeMode :"contain",
      }} 
      />
      <Text>{name}</Text>
      <View>
      <Text>{quantity}</Text>
      <Text style={{marginHorizontal : 10}}>X</Text>
      <Text>₹{price}</Text>
      </View>
    </View>
    
  )
}

export default ConfirmOrderItem