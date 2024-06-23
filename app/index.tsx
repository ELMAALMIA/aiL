import React from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function LoginScreen (){
  const router = useRouter();

    const handleLoginPress = () => {
        router.push("cameraScreen")
      };
    
      return (
        <View style={styles.container}>
          <Ionicons name="finger-print-outline" size={80} color="black" />
            <Text style={styles.textStyle}>Login using Face and Voice Recognition</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: "#023047",
                padding: 10,
                borderRadius:100
              }}
              onPress={handleLoginPress}
            >
              <Text style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                textTransform:"uppercase"
              }}>Start</Text>
                </TouchableOpacity>
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
      fontSize: 30,
      textAlign:"center"
    },
    buttonContainer: {
      width: '80%', 
      paddingHorizontal: 20, 
    }
  });