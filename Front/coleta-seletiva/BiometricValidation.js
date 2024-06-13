import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const BiometricValidation = ({ navigation }) => {
  const [biometricSupported, setBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();
    setBiometricSupported(compatible && enrolled);

    if (compatible && enrolled) {
      authenticate();
    }
  };

  const authenticate = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate with biometrics',
    });
    if (result.success) {
      setIsAuthenticated(true);
      navigation.replace('MainApp'); // Use replace to prevent going back to the biometric screen
    } else {
      // Handle authentication failure
      console.log('Authentication failed');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center', backgroundColor: '#73A210', paddingTop:200}}>
      <Image
      source={require('../coleta-seletiva/assets/recycle.gif')}
      style={{width: 300, height: 300}}
      />
      <Text 
      style={{ fontSize:30, fontWeight: 'bold', color:'white'}}
      >Verificação de identidade</Text>
      {biometricSupported ? (
        !isAuthenticated && <Text style={{ color:'white'}}>Esperando a autenticação por biometria</Text>
      ) : (
        <Text>Erro</Text>
      )}
    </View>
  );
};

export default BiometricValidation;