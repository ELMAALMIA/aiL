import { CameraView, useCameraPermissions } from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import { useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

export default function CameraScreen() {
  const [facing, setFacing] = useState(CameraType.front);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);
  const [imageUri, setImageUri] = useState(null);  // State to hold the captured image URI
  const router = useRouter();


  const takePicture = async () => {
    if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo.uri);  // Do something with the photo URI
        setImageUri(photo.uri);  // Store the captured image URI in state
    }
};

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (

        
           imageUri ? (
            <View style={styles.previewContainer}>
                <Image source={{ uri: imageUri }} style={styles.preview} />
                <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 10,
            margin: 10,

                }} onPress={() => setImageUri(null)}>
                  <Ionicons name="reload" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                backgroundColor: 'black',
                padding: 10,
                borderRadius: 10,
                margin: 10,

                }} onPress={() => router.push("audioScreen")}>
                 <MaterialIcons name="navigate-next" size={24} color="white" />
                </TouchableOpacity>
                </View>
            </View>
        ):( 
          <View style={styles.container}>

          <CameraView style={styles.camera} facing={facing} ref={cameraRef} >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Feather name="camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </CameraView>
  </View>)
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems:"flex-end",
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    display: "flex",
    justifyContent:"center",
    alignItems: 'center',
    borderColor: "white",
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 100,
    padding:10
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  previewContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
},
preview: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 15,
}
});