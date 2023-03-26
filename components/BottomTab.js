import { View, Text } from 'react-native'
import React from 'react'
import Logo from '../assets/Logo.svg'
import Welcome from "../screens/Welcome";
import HomeSvg from "../assets/HomeIcon.svg";
import ProfileSvg from "../assets/Profile.svg";
import CartSvg from "../assets/Cart.svg";
import MessageSvg from "../assets/Message.svg";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
     return (
          <Tab.Navigator
               screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                         height: 60
                    }
               }}>
               <Tab.Screen name="Home" component={Home} options={{
                    headerShown: false,
                    tabBarIconStyle: { display: "none" },
                    tabBarLabel: ({ focused }) => {
                         if (focused) {
                              return (
                                   <View style={{ height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{ marginHorizontal:5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#FFE5E5", height: 40, borderRadius: 10 }}>
                                             <View style={{ marginHorizontal: 2 }}>
                                                  <HomeSvg />
                                             </View>
                                             <Text
                                                  style={{ fontWeight: "500" }}
                                             >
                                                  {focused ? "Home" : ""}
                                             </Text>
                                        </View>
                                   </View>
                              );
                         } else {
                              return (
                                   <View style={{ height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", height: 40, borderRadius: 10 }}>
                                             <View>
                                                  <HomeSvg />
                                             </View>
                                        </View>
                                   </View>
                              );
                         }

                    },
               }} />
               <Tab.Screen name="Profile" component={Details} options={{
                    headerShown: false,
                    tabBarIconStyle: { display: "none" },
                    tabBarLabel: ({ focused }) => {
                         if (focused) {
                              return (
                                   <View style={{  marginHorizontal:5,height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#FFE5E5", height: 40, borderRadius: 10 }}>
                                             <View style={{ marginHorizontal: 2 }}>
                                                  <ProfileSvg />
                                             </View>
                                             <Text
                                                  style={{ fontWeight: "500" }}
                                             >
                                                  {focused ? "Profile" : ""}
                                             </Text>
                                        </View>
                                   </View>
                              );
                         } else {
                              return (
                                   <View style={{ height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", height: 40, borderRadius: 10 }}>
                                             <View>
                                                  <ProfileSvg />
                                             </View>
                                        </View>
                                   </View>
                              );
                         }

                    },
               }} />
               <Tab.Screen name="Message" component={Details} options={{
                    headerShown: false,
                    tabBarIconStyle: { display: "none" },
                    tabBarLabel: ({ focused }) => {
                         if (focused) {
                              return (
                                   <View style={{  marginHorizontal:5, height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#FFE5E5", height: 40, borderRadius: 10 }}>
                                             <View style={{ marginHorizontal: 2 }}>
                                                  <MessageSvg />
                                             </View>
                                             <Text
                                                  style={{ fontWeight: "500" }}
                                             >
                                                  {focused ? "Message" : ""}
                                             </Text>
                                        </View>
                                   </View>
                              );
                         } else {
                              return (
                                   <View style={{ height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", height: 40, borderRadius: 10 }}>
                                             <View>
                                                  <MessageSvg />
                                             </View>
                                        </View>
                                   </View>
                              );
                         }

                    },
               }} />
               <Tab.Screen name="Cart" component={Details} options={{
                    headerShown: false,
                    tabBarIconStyle: { display: "none" },
                    tabBarLabel: ({ focused }) => {
                         if (focused) {
                              return (
                                   <View style={{height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{marginHorizontal:5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#FFE5E5", height: 40, borderRadius: 10 }}>
                                             <View style={{ marginHorizontal: 2 }}>
                                                  <CartSvg />
                                             </View>
                                             <Text
                                                  style={{ fontWeight: "500" }}
                                             >
                                                  {focused ? "Cart" : ""}
                                             </Text>
                                        </View>
                                   </View>
                              );
                         } else {
                              return (
                                   <View style={{ height: 60, width: 100, display: "flex", justifyContent: "center" }}>
                                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", height: 40, borderRadius: 10 }}>
                                             <View>
                                                  <CartSvg />
                                             </View>
                                        </View>
                                   </View>
                              );
                         }

                    },
               }} />
          </Tab.Navigator>
     )
}

export default BottomTab