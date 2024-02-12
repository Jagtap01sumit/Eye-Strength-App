import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import WelcomeScreen from "./screen/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import DigitalWellbeing from  "./screen/DigitalWellbeing";
import Blinkrate from "./screen/Blinkrate";
import Distance from "./screen/Distance";



import RegisterScreen from "./screen/RegisterScreen";
import EyeHealth from "./screen/EyeHealth";
import Setting from "./screen/Setting";
import Charts from "./screen/Charts";


export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />

        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false}}/>    
        <Stack.Screen name="digitalwellbeing" component={DigitalWellbeing} options={{ headerShown: false}}/>
        <Stack.Screen name="blinkrate" component={Blinkrate} options={{ headerShown: false}}/>
        <Stack.Screen name="distance" component={Distance} options={{ headerShown: false}}/>
        <Stack.Screen name="setting" component={Setting} options={{ headerShown: false}}/>
        <Stack.Screen name="charts" component={Charts} options={{ headerShown: false}}/>


        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="EyeHealth" component={EyeHealth} options={{ headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
