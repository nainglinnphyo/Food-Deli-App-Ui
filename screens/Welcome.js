import { View, Text, StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg';
import React from 'react'
import Logo from '../assets/Logo.svg';
import WelcomeBG from '../assets/WelcomeBG.svg';
import { useFonts } from 'expo-font';
import { LongPressGestureHandler} from "react-native-gesture-handler";

export default Welcome = () => { 
     return (
          <View style={styles.container}>
               <View style={styles.bgContainer}>
                    <WelcomeBG />

               </View>
               <View style={styles.dotOne}>
               </View>
               <View style={styles.dotTwo}>
               </View>
               <View style={styles.logo}>
                    <Logo />
                    <View style={styles.textView} >
                         <Text style={styles.text}>
                              Food Couriers
                         </Text>
                    </View>
               </View>

          </View>
     )
}

const styles = StyleSheet.create(
     {
          container: {
               alignItems: "center",
               position: "relative"
          },
          bgContainer: {
          },
          logo: {
               position: "absolute",
               bottom: 280
          },
          textView: {
               alignItems: "center"
          },
          text: {
               color: "#D61355",
               fontWeight: "900",
               fontSize: 40,
               letterSpacing: 5,
          },
          dotOne: {
               width: 20,
               height: 20,
               backgroundColor: "#D61355",
               position: "absolute",
               top: 230,
               left: 100,
               borderRadius: 100
          },
          dotTwo: {
               width: 15,
               height: 15,
               backgroundColor: "#D61355",
               position: "absolute",
               top: 280,
               right: 100,
               borderRadius: 100
          }
     }
)

