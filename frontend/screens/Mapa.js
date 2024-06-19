import React, { useState, useEffect, useRef, useCallback  } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import {Camera, CameraType} from "expo-camera/legacy";
import axios from 'axios';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';


const baseUrl = 'https://ea03-2804-d84-2188-5d00-6b01-af57-169e-3ce8.ngrok-free.app';

function Mapa() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [markerList, setMarkerList] = useState([]);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  async function requestLocationPermission() {
    await requestForegroundPermissionsAsync();
  }

  useEffect(() => {
    (async () => {
        await Camera.requestCameraPermissionsAsync();
    })();
    requestLocationPermission();
  }, []); 

  const takePicture = async () => {
    if (cameraRef.current) {
        try {
            const photo = await cameraRef.current.takePictureAsync({base64: true, quality: 0.2});
            setCameraOpen(false);
            const locationPosition = await Location.getCurrentPositionAsync({});

            navigation.navigate('Form', {imagem: photo.base64, locationPosition});
        } catch (error) {
            console.error('Erro ao capturar a foto:', error);
        }
    }
  }; 

  async function updateMarkerList() {
    axios.get(`${baseUrl}/pontos-coleta/`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      setMarkerList(response.data);
      console.log('Dados recebidos');
    })
    .catch(error => {
      console.error('Erro ao recuperar os pontos de coleta:', error);
    });
  }

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        await updateMarkerList();
      };

      fetchData();
    }, [])
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão da localização negada!');
        return;
      }
    })();
  }, []);

  const mapStyle = [{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "visibility": "off" 
    }]},
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [{ 
        "visibility": "off" 
      }]
    }];


  return (
    <View style={{flex:1}}>
        {
          !cameraOpen && (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <MapView loadingEnabled={true}
              region={
                {
                  latitude: -22.365244688869595,
                  longitude: -43.4008237626156,
                  latitudeDelta: 0.002305,
                  longitudeDelta: 0.15525,
                }
              }
              style={{ width: "100%", height: "130%" }}
              customMapStyle={mapStyle}
              mapType="hybrid">

              {markerList.map(marker => {
                return <Marker key={marker?.id} coordinate = {
                  {
                    latitude: parseFloat(marker.latitude),
                    longitude: parseFloat(marker.longitude),
                    latitudeDelta: 0,
                    longitudeDelta: 1000,
                  }
                }
                title={marker.nome}
                description='Ponto de entrega'/>
              })}
              </MapView>
            </View>
          )
        }
        <View style={{ position: 'absolute', bottom: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#73A252',
              borderColor: "#FFF",
              borderWidth: 1,
              borderRadius: 90,
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} onPress={() => setCameraOpen(true)}>Câmera</Text>
          </TouchableOpacity>
        </View>
        {
          cameraOpen && (
            <View style={{flex: 1}}>
            <Camera ref={cameraRef} style={{flex: 1}} type={CameraType.back}>
                <View style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 20}}>
                  <View style={{
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: "flex-end",
                      justifyContent: "space-around"}}>
                      <TouchableOpacity onPress={() => {setCameraOpen(false)}}>
                          <Text style={{fontSize: 18, marginBottom: 10, color: 'white'}}>Voltar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={takePicture}>
                          <Text style={{fontSize: 18, marginBottom: 10, color: 'white'}}>Tirar Foto</Text>
                      </TouchableOpacity>
                  </View>
                </View>
            </Camera>
          </View>
          )
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    backgroundColor: "#FFF",
    borderRadius: 10,
    maxWidth: "100%",
    width: 80,
    maxHeight: "100%",
    height: 80,
  },
});

export default Mapa;