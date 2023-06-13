import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Home  from "./screens/Home"
import ProductDetails from './screens/ProductDetails';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Cart from "./screens/Cart"
import confirmorder from './screens/ConfirmOrder';
import Pay from './screens/Pay';
import Login from './screens/Login';
import ForgetPass from './screens/ForgetPass';
import Verify from './screens/Verify';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import UpdateProfile from './screens/UpdateProfile';
import ChangePassword from './screens/ChangePassword';
import Orders from './screens/Orders';
const Stack=createNativeStackNavigator();



const main = () => {
  return <NavigationContainer>         
    <Stack.Navigator
    initialRouteName='home'
    screenOptions={{
      headerShown: false,
    }}>   

      <Stack.Group>

      <Stack.Screen name="home" component={Home}/>
      <Stack.Screen name= "productdetails" component={ProductDetails} />
      <Stack.Screen name ="cart" component={Cart} />
      <Stack.Screen name ="confirmorder" component={confirmorder} />
      <Stack.Screen name="pay" component={Pay} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgetpassword" component={ForgetPass} />
      <Stack.Screen name="verify" component={Verify} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="updateprofile" component={UpdateProfile} />
      <Stack.Screen name="changepassword" component={ChangePassword} />
      <Stack.Screen name="orders" component={Orders} />
      </Stack.Group>
      </Stack.Navigator>
      <Toast position='bottom' bottomOffset={50}/>
  </NavigationContainer>
  
}

export default main