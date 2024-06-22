import { CameraView, useCameraPermissions } from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import { useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CameraScreen() {
  const [facing, setFacing] = useState(CameraType.front);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [imageUri, setImageUri] = useState(null);  // State to hold the captured image URI

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

  function toggleCameraFacing() {
    console.log("flip")
    setFacing(current => (current == CameraType.front ? CameraType.front : CameraType.back));
  }

  

  return (

        
           imageUri ? (
      <SafeAreaView>

            <View style={styles.previewContainer}>
                <Image source={{ uri: imageUri }} style={styles.preview} />
                <TouchableOpacity style={styles.button} onPress={() => setImageUri(null)}>
                    <Text style={styles.text}>Take Another</Text>
                </TouchableOpacity>
            </View>
      </SafeAreaView>

        ):( 
          <View style={styles.container}>

          <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Text style={styles.text}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Text style={styles.text}>Take</Text>
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
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  previewContainer: {
    flex: 1,
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