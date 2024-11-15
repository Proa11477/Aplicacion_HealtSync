import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//pantallas
import LoginScreen from "./src/LoginScreen";
import HomeScreen from "./src/HomeScreen";
import PatientForm from "./src/PatientForm";
import SignUpForm from "./src/SignUpScreen";


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {isAuthenticated ? (
            <Drawer.Navigator initialRouteName="Inicio">
              <Drawer.Screen name="Inicio" component={HomeScreen} />
              <Drawer.Screen name="Medicion de Signos" component={PatientForm} />
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Inicio">
                {(props) => (
                  <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />
                )}
              </Stack.Screen>
              <Stack.Screen name="SignUp" component={SignUpForm} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
    </GestureHandlerRootView>
  );
};


