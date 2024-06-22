import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useRouter } from "expo-router";


export default function LoginScreen (){
  const router = useRouter();

    const handleLoginPress = () => {
        router.push("cameraScreen")
      };
    
      return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Login using Face and Voice Recognition</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Login"
                onPress={handleLoginPress}
                color="#1e90ff"
                />
            </View>
            <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      marginBottom: 20, 
    },
    buttonContainer: {
      width: '80%', 
      paddingHorizontal: 20, 
    }
  });