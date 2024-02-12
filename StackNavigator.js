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


export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />    
        <Stack.Screen name="digitalwellbeing" component={DigitalWellbeing} />
        <Stack.Screen name="blinkrate" component={Blinkrate} />
        <Stack.Screen name="distance" component={Distance} />


        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="EyeHealth" component={EyeHealth} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
