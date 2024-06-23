import React, { useState } from 'react';
import { Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [username, setUsername] = useState('Ayoub el maalmi');

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('User logged out');
    setUsername(""); // Reset username or redirect to login screen
  };

  return (
    <SafeAreaView style={styles.container}>
          <Text style={styles.welcomeText}>Hello, welcome back </Text>
          <Text style={styles.welcomeText}>{username} !</Text>
 <TouchableOpacity style={{
                                  backgroundColor: "#023047",
                                  padding: 10,
                                  borderRadius: 100,
                                  width: "60%",
                                  display: "flex",
                                  flexDirection:"row",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginTop: 20,
                                    gap: 10
                              }}
                              onPress={handleLogout}
                              >
                                 
                                  
                                  <Text
                                      style={{
                                            color: "white",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            textTransform: "uppercase"
                                        
                                  }}
                                  >Logout</Text>
                              </TouchableOpacity>    
                              
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 16,
    textAlign: 'center',
    }
}
);