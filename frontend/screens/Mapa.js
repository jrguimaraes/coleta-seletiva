import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import {Camera, CameraType} from "expo-camera/legacy";
import axios from 'axios';

const baseUrl = 'https://51d6-2804-18-487c-e352-8649-34f5-976f-a39b.ngrok-free.app';

function Mapa() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [permission, setPermission] = useState(null);
  const [imgUri, setImgUri] = useState(null);
  const cameraRef = useRef(null);

  async function requestLocationPermission() {
    const {granted} = await requestForegroundPermissionsAsync();

    if (granted) {
        const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);
    }
  }

  useEffect(() => {
    (async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        setPermission(status === 'granted');
    })();
    requestLocationPermission();
  }, []); 

  const takePicture = async () => {
    if (cameraRef.current) {
        try {
            const photo = await cameraRef.current.takePictureAsync({base64: true, quality: 0.2});
            setCameraOpen(false);
            setImgUri(photo.base64);
            //await createMarker();
        } catch (error) {
            console.error('Erro ao capturar a foto:', error);
        }
    }
};




  const [markerList, setMarkerList] = useState([]);
  const [newMarkerList, setNewMarkerList] = useState([]);


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  async function createMarker(data) {
    axios.post(`${baseUrl}/pontos-coleta/`, { 
      "nome": data.nome, // formulario
      "latitude": data.latitude, // imagem
      "longitude": data.longitude, // imagem
      "regiao": data.regiao, // formulario
      "imagem": data.imagem, // imagem
    },{
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      setMarkerList([...markerList, {longitude: data.longitude, latitude: data.latitude}]);
      console.log(`Inserido no banco o ponto de coleta: ${JSON.stringify(response?.data)}`);
    })
    .catch(error => {
      console.error('Erro ao recuperar os pontos de coleta:', error);
    });
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão da localização negada!');
        return;
      }

      await updateMarkerList();

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
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
          (!cameraOpen && !imgUri) && (
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
                      <TouchableOpacity onPress={() => {setCameraOpen(false); setImgUri(null)}}>
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
        {
          imgUri && (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => setImgUri(null)}>
                <Image style={{width: 300, height: 300}} source={{uri: `data:image/png;base64,${imgUri}`}}></Image>
              </TouchableOpacity>
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