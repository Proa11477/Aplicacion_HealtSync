import React, { useState } from "react";
import { Alert } from "react-native";
import { NativeBaseProvider, Box, Button, Center, FormControl, Heading, Input, Link, VStack, Text, HStack } from "native-base";
import {View, Image, StyleSheet} from 'react-native';

const LoginScreen = ({ setIsAuthenticated, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    
    if (email && password) {
      Alert.alert("Inicio De Sesión Exitoso", "Bienvenido!"); 
      setIsAuthenticated(true); 
      navigation.navigate("Inicio");
    } else {
      
      Alert.alert("Inicio De Sesión Fallido", "Correo Electronico o Contraseña Incorrectos.");
    }
  };

  const Registro = () => {
    navigation.navigate("SignUp");
  };

  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dhuwsklrw/image/upload/v1731341721/NameApp_vymoui.png' }}
            style={styles.image}
        />
        </View>
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
            Welcome to HealthSync
          </Heading>
          <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input value={email} onChangeText={(text) => setEmail(text)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" value={password} onChangeText={(text) => setPassword(text)} />
              <Link
                _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }}
                alignSelf="flex-end"
                mt="1"
              >
                Forgot Password?
              </Link>
            </FormControl>
            <Button mt="2" bg="#65558F"  onPress={handleLogin}>
              Log In
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                Don't Have An Acount?.{" "}
              </Text>
              <Link
                _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }}
                onPress={Registro}
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 400,
    height: 80,
    marginBottom: 20,
  },
});

export default LoginScreen;