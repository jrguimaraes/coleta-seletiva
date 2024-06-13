import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {FabButton} from '../assets/components/Fabbutton';


function Mapa() {

  const [markerList, setMarkerList] = useState([]);

  const baseURL = "http://10.0.2.2:3000/api/pontos-coleta";
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchMarkerList() {
    await fetch(`${baseURL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log('aqui')
            setMarkerList(data);
        })
        .catch(err => {
            console.log(err);
        });
}


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão da localização negada!');
        return;
      }

      fetchMarkerList();

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  const mapStyle = [{ "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }]

  const markerListView = (markerList.map);


  return (
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
        style={{ width: "100%", height: "130%", }}
        customMapStyle={mapStyle}
        mapType="hybrid"

      >
        {markerList.map((marker) => {

          const latitude = parseFloat(marker.latitude)
          const longitude = parseFloat(marker.longitude)

          return ( 

          <Marker coordinate={
            {
              
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0,
              longitudeDelta: 1000,

            }
          
          }
            title={marker.name}
            description='Ponto de entrega'
          />
        )
      }
        )}
      </MapView>
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
    backgroundColor:"#FFF",
    borderRadius:10,
    maxWidth:"100%",
    width: 80,
    maxHeight:"100%",
    height: 80,
  },
});



export default Mapa;