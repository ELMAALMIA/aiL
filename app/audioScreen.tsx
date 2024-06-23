import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text ,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import Svg, { Polyline } from 'react-native-svg';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
export default function AudioScreen() { 
const router = useRouter();
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [sound, setSound] = useState<Audio.Sound|null>(null);
  const [audioUri, setAudioUri] = useState("");
    const [audioData, setAudioData] = useState<Uint8Array[]>([]);
      const [recordingTime, setRecordingTime] = useState(0);
    const [permissionResponse, requestPermission] = Audio.usePermissions();
    
    useEffect(() => {
    let timer:any;
    if (recording) {
      timer = setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!recording && recordingTime !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [recording]);

 
  async function startRecording() {
    try {
      if (permissionResponse?.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      recording.setOnRecordingStatusUpdate((status) => {
        if (status.isRecording) {
          setRecordingTime(status.durationMillis / 1000); // Update recording time in seconds
        }
      });
      await recording.startAsync();
      setRecording(recording);
      setRecordingTime(0);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
      setRecording(null);
      if (recording) {
             await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            setAudioUri(uri ?? "");
            console.log('Recording stopped and stored at', uri); 
      }

  }

  async function playSound() {
    try {
      console.log('Loading sound...');
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUri }
      );
      setSound(sound);
      console.log('Playing sound...');
      await sound.playAsync();
    } catch (error) {
      console.error('Failed to play sound', error);
    }
  }

  async function stopSound() {
    console.log('Stopping sound...');
    await sound?.stopAsync();
    setSound(null);
  }

  async function reRecord() {
      setAudioUri("");
    setRecordingTime(0);
      setAudioData([]);
      stopSound()
  }
  function formatTime(seconds:number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
   

  return (
      <View style={styles.container}>
          <MaterialIcons name="record-voice-over" size={60} color="black" />
          <Text style={{
            marginBottom: 20, 
            fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
            textTransform:"uppercase"
          
          }}>Record your voice</Text>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",

              marginBottom: 20,
            gap: 20
          
          }}>{
                  !audioUri ? (
                      <View style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                            gap: 20
                      }}>
                          
                      <TouchableOpacity style={styles.actionBtn} onPress={recording ? stopRecording : startRecording}>
                          {
                              recording ? (
                                    <MaterialIcons name="stop" size={24} color="white" />
                                ) : (
                                    <MaterialIcons name="fiber-manual-record" size={24} color="white" />
                              )
                          }
                          
                          </TouchableOpacity>
                            <Text style={styles.timer}>{formatTime(recordingTime)}</Text>
                          
                      {recording && (
                            <Animatable.Text
                            animation="pulse"
                            iterationCount="infinite"
                            style={styles.recordingIndicator}
                            >
                            Recording...
                            </Animatable.Text>
                          )}
                          
                      </View>
                          
                  ) : (
                          <View style={{
                                flexDirection: "column",
                              justifyContent: "center",
                                alignItems: "center",
                               width: "100%"
                          }}>
                            <Text style={styles.timer}>{formatTime(recordingTime)}</Text>

                              <View style={{
                                flexDirection: "row",
                              justifyContent: "center",
                                alignItems: "center",
                                gap: 20
                          }}>
                                        <TouchableOpacity style={styles.actionBtn}  onPress={reRecord} >
                                <Ionicons name="reload" size={24} color="white" />
                            </TouchableOpacity>
                              <TouchableOpacity style={styles.actionBtn} onPress={
                                    sound ? stopSound : playSound
                            } >
                                  {
                                      sound ? (
                                          <Entypo name="controller-stop" size={24} color="white" />
                                      ) : (
                                          <Entypo name="controller-play" size={24} color="white" />
                                      )
                                }
                              </TouchableOpacity>
                              </View>
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
                              onPress={() => router.push("home")}
                              >
                                  <Feather name="send" size={20} color="white" />
                                  
                                  <Text
                                      style={{
                                            color: "white",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            textTransform: "uppercase"
                                        
                                  }}
                                  >Authenticate</Text>
                              </TouchableOpacity>
                          </View>
                  )
          }  
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  recordingIndicator: {
    fontSize: 18,
    color: 'red',
    },
    actionBtn: {
        backgroundColor: "#023047",
        padding: 10,
        borderRadius:100     
    },
    timer: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
        color: '#023047',
    fontWeight: 'bold',
  },
});
