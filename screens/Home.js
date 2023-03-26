import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import MenuSvg from '../assets/Menu.svg'
import LocationSvg from '../assets/Location.svg'
import GirlSvg from '../assets/Girl.svg'
import SearchSvg from '../assets/Search.svg'
import MenuOneSvg from '../assets/menuOne.svg'
import PizzaSvg from '../assets/Pizza.svg'
import BurgerOne from '../assets/BurgerOne.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import SvgUri from 'react-native-svg-uri';
import Banner from '../components/Banner'
import menus from '../data/Menu'



const Home = ({ navigation }) => {
     const [menu, setMenu] = useState([
          {
               id: 1,
               name: "Burger",
               image: "menuOne.svg",
               active: true,
          },
          {
               id: 2,
               name: "Pizza",
               image: "menuOne.svg",
               active: false,
          },
          {
               id: 3,
               name: "Cake",
               image: "menuOne.svg"
          },
          {
               id: 4,
               name: "Tea",
               image: "menuOne.svg"
          }
     ])
     const handelActive = (id) => {
          const newTodos = menu.map((todo) => {
               if (todo.id === id) {
                    return { ...todo, active: true };
               } else {
                    return { ...todo, active: false };
               }
               // return todo;
          });

          setMenu(newTodos);
     }
     return (
          <SafeAreaView>
               <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10 }}>
                    <View>
                         <View>
                              <MenuSvg />
                         </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                         <View style={{ marginHorizontal: 5 }}>
                              <LocationSvg />
                         </View>
                         <Text>
                              Myanmar, Yangon
                         </Text>
                    </View>
                    <View>
                         <GirlSvg />
                    </View>
               </View>
               <View style={{ borderRadius: 10, backgroundColor: "#ffffff", marginHorizontal: 20, marginTop: 30, height: 45, display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 25 }}>
                    <View style={{ marginHorizontal: 10 }}>
                         <SearchSvg />
                    </View>
                    <TextInput style={{ width: 250 }} placeholder='Search' />
               </View>
               <View style={{ marginTop: 20 }}>
                    <Banner />
               </View>
               <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <ScrollView
                         horizontal
                    >
                         <View style={{ marginTop: 20, display: "flex", flexDirection: "row", width: "100%", marginHorizontal: 10 }}>
                              {menu.map((data) => {
                                   return (
                                        <TouchableWithoutFeedback onPress={() => handelActive(data.id)}>
                                             <View key={data.id} style={{ borderRadius: 10, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: `${data.active ? '#D61255' : "white"}`, borderColor: "#D61255", borderWidth: 1, width: 120,height:45, padding: 10, marginHorizontal: 5 }}>
                                                  <View style={{ marginHorizontal: 10 }}>
                                                       {data.name === "Burger" ? <MenuOneSvg /> : <PizzaSvg />}

                                                  </View>
                                                  <Text style={{ fontSize: 14, fontWeight: "500", color: `${data.active ? 'white' : "black"}` }}>{data.name}</Text>
                                             </View>
                                        </TouchableWithoutFeedback>
                                   )
                              })}
                         </View>
                    </ScrollView>
               </View>
               <BurgerOne />


          </SafeAreaView>
     )
}

export default Home