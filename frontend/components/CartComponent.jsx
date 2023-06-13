import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'
const CartComponent = ({name,
    amount, 
    qty,
    stock,
    index,
    imgSrc,
    id ,
    incrementHandler,
    decrementHandler,
    navigate
    }) => {
    //const navigate = useNavigation();      //if we create navigate here then navigate will be created every time we use cart component
  return (
    <View style={{ 
        height: 100,
        flexDirection:"row",
        marginVertical: 20,
    }}>
        <View  style={{ width :"40%", 
    backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
    borderTopRightRadius: 100,
    borderBottomRightRadius : 100,
    }} >
        <TouchableOpacity onPress={()=>navigate.navigate("productdetails")}>
        <Image  source ={{
            uri : imgSrc,
        }} style={{
            width: 200,
            height:"100%",
            resizeMode:"contain",
            top : "-20%",
            left : "10%"
        }} />
        </TouchableOpacity>
       
    </View>
    <View style={{
        width :"40%",
        paddingHorizontal : 25,
    }}>
        <Text onPress={()=>navigate.navigate("productdetails")} numberOfLines={1} style={{
            fontSize: 17,
        }}>{name}</Text>
        <Text numberOfLines={1} style={{
            fontSize: 17,
            fontWeight:"900"
        }}>₹{amount}</Text>
        </View>
        <View style={{
            alignItems: "center",
            width: "20%",
            height: 80,
            justifyContent: "space-between",
            alignSelf:"center",
        }}>
              <TouchableOpacity onPress={()=> incrementHandler(id,qty,stock)}>
                <Avatar.Icon icon={"plus"}
                size={20}
                style={{
                borderRadius : 5,
                backgroundColor : colors.color5,
                height: 25,
                width: 25,
                }}/>
                 </TouchableOpacity>
             
               <Text style={styles.qtyText}>{qty}</Text>
          <TouchableOpacity onPress={()=> decrementHandler(id,qty,stock)}>
                <Avatar.Icon icon={"minus"}
                size={20}
                style={{
                borderRadius : 5,
                backgroundColor : colors.color5,
                height: 25,
                width: 25,
                }}/>
                 </TouchableOpacity>
        
    </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    qtyText:{
        backgroundColor:colors.color4,
        height:25,
        width:25,
        textAlignVertical:"center",
        textAlign:"center",
        borderWidth:1 ,
        borderRadius : 5,
        borderColor : colors.color5,
    }
})

export default CartComponent