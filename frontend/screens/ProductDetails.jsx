import {
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const name = "MacBook Pro";
const stock = 0;
const price = "₹4,09,900.00";
const description =
  "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.";


const images = [
  {
    id: "jfhkbfdsajh",
    url: ("https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg"),
  },
  {
    id : "sadbfdfsdjk",
    url : ("https://m.media-amazon.com/images/I/81nltu3n+3L._SL1500_.jpg"),
  },
];


const ProductDetails = ({ route: { params } }) => {
    const isCarousel = useRef(null);  // useRef is a React Hook and it should be used inside a function
    const [quantity ,  setQuantity] = useState(1)
//   console.log(params.id);


const incrementQty = () =>{
    setQuantity(prev => prev+1)
}

const decrementQty = () =>{
    if(quantity !== 0)
    setQuantity(prev => prev-1)
}

const addToCartHandler =()=>{
    if(stock===0)
    {
        return Toast.show({
            type : "error",
            text1 : "Out of stock"
        })
    }
Toast.show({
    type : "success",
    text1 : "Added to Cart"
})    
}

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        paddingTop: 130,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />
      <Carousel
        layout= "tinder"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}/>
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -280,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text
          style={{
            fontSize: 25,
          }}
        >
          {name}
        </Text>

        <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: 900 }}>
            {price}
        </Text>

        <Text
          style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
          numberOfLines={4}
        >{description}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 5,
          }}
        >
          <Text
            style={{
              color: colors.color3,
              fontWeight: "100",
              paddingTop: 20,
            }}
          >
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon
                icon={"minus"}
                size={20}
                style={{
                  borderRadius: 5,
                  backgroundColor: colors.color5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                backgroundColor: colors.color4,
                height: 25,
                width: 25,
                textAlignVertical : "center",
                textAlign: "center",
                borderRadius : 5,
                borderColor : colors.color5
              }}
            >{quantity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon
                icon={"plus"}
                size={20}
                style={{
                  borderRadius: 5,
                  backgroundColor: colors.color5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity  onPress={addToCartHandler}>
            <Button icon={"cart"} style={style.btn} 
             textColor={colors.color2}  > Add to Cart</Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image
      source={{
        uri: item.url,
      }}
      style={style.image}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor : colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 280,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
},


btn :{
    backgroundColor : colors.color3,
    borderRadius : 100,
    padding : 5,
    marginVertical : 35,
}

});



export default ProductDetails;
