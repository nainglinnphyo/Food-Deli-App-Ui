import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './components/BottomTab'
import Welcome from "./screens/Welcome";
// import { StatusBar } from "react-native";
const Stack = createNativeStackNavigator();



export default function App() {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 3000);
  }, [])

  if (!load) {
    return (
      <View>
        <Welcome />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
