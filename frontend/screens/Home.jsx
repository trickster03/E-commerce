import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React , {useState} from 'react'
import { defaultStyle } from '../styles/styles'
import Header from "../components/Header"
import { colors } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import ProductsCart from '../components/ProductsCart'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'
import Heading from '../components/Heading'
const Home = () => {
  const categories=[{ category:"Nigga" , _id:"dasjkdjk"},{ category: "Men",_id:"fnbsdjfhu"} ,{ category: "Women",_id:"asedhgjasdh"} ];
  
  const [category, setCategory] = useState("")
  const [activeSearch , setActiveSearch] = useState(false)
  const [searchQuery , setSearchQuery] = useState("")

  const navigate = useNavigation()

  const addToCartHandler =(id) =>{
    console.log("add to cart", id)
  }

  const products =[{
    price : 12000,
    name : "Nike Air Max 90",
    _id : "dsadkas",
    stock: 23,
    images:[
      {
         url: ("https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a9318f18-1625-4802-a0fd-a452bd9920c9/air-max-90-shoes-nLFl5V.png"),   
      },
    ]
  },
  {
  price : 8999.00,
  name : "Adidas Rivalry low 86",
  _id : "fdsfds",
  stock: 34,
  images:[
    {
       url: ("https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b954a4295e564974baa5af34000db9a3_9366/Rivalry_Low_86_Shoes_Beige_FZ6323_01_standard.jpg"),
    },
  ]
},
{
  price : 0.00,
  name : "Product Manager@ Mastercard",
  _id : "asda",
  stock: 1,
  images:[
    {
       url: ("https://media.licdn.com/dms/image/C4D03AQHfOlZDZABFMw/profile-displayphoto-shrink_800_800/0/1658477771710?e=1690416000&v=beta&t=CsY60AZS5Cqyvi3a3vZr4MjKC_RYWob_IIaY69C9jBQ"),
    },
  ]
},
{
  price : 0.00,
  name : "Risk Manager@ CanaraBank",
  _id : "dasd",
  stock: 1,
  images:[
    {
       url: ("https://media.licdn.com/dms/image/C5603AQE-UjNLKQzcTQ/profile-displayphoto-shrink_800_800/0/1517576081139?e=1690416000&v=beta&t=e_1yC-fqQd7ezWQI4fxMNg4cv8rHYeK6_H8-XXr1b6g"),
    },
  ]
},
]; 
  const cateogryButtonHandler = (id) =>{
    setCategory(id)
    //console.log(category)
  }
  
 

  return (
    <>
    {activeSearch && (
    <SearchModal searchQuery = {searchQuery} setSearchQuery = {setSearchQuery}
    setActiveSearch = {setActiveSearch} products={products}
     />
     )}
    <View style={defaultStyle}>
        <Header/>
        <View style={{
          paddingTop: 80,
          flexDirection : "row",
          justifyContent : "space-between",
          alignItems : "center",
        }}>
        {/* Heading */}
        <Heading />
        {/* search bar */}

        <View>
            <TouchableOpacity onPress={()=> setActiveSearch((prev)=> !prev)}>
            <Avatar.Icon size={50} icon={"magnify"} color={"gray"} 
            style={{backgroundColor : colors.color2 , elevation: 12}}/>
            </TouchableOpacity>
        </View>
        
        </View>
        <View style={{
          flexDirection: "row",
          height: 80,
        }}>
          
           <ScrollView horizontal showsVerticalScrollIndicator ={false}
           contentContainerStyle={{alignItems:"center"}}>
             {categories.map((item,index) => (          //array.map=> We can use the map method in React Native easily, especially showing items as lists from an array
              <Button key={item._id}
              style={{
                backgroundColor: category=== item._id ? colors.color1 : colors.color5,               //while rendering the categories array the .map checks which category has value equal to item._id   
                borderRadius: 100,
                margin : 5,
              }}
              onPress={()=> cateogryButtonHandler(item._id)}
              >
                <Text style={{
                  fontSize: 12,
                  color: category=== item._id ? colors.color2 : "gray",
                }}>
                  {item.category}
                </Text>
              </Button>
            ))}
           </ScrollView>
          

        </View>
        
       

        {/*Products*/}

        <View style={{flex : 1}}>

        <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}>


        {
          products.map((item,index)=>(
            <ProductsCart 
            stock = {item.stock}
            name={item.name}
            price={item.price}
            image={item.images[0]?.url}
            addToCartHandler={addToCartHandler}
            id={item._id}
            key={item._id}
            i={index}
            navigate={navigate}
            />
          ))
        }

        </ScrollView >

        </View>


        </View>
          
        {/* Footer*/ }
   
        <Footer activeRoute ={"Home"} />


    </>
  )
}

export default Home