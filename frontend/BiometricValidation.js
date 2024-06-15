import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const BiometricValidation = ({ navigation }) => {
  const [biometricSupported, setBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      console.log(`Compatible: ${compatible}, Enrolled: ${enrolled}`);
      setBiometricSupported(compatible && enrolled);

      if (compatible && enrolled) {
        authenticate();
      }
    } catch (error) {
      console.error("Error checking biometric support:", error);
    }
  };

  const authenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with biometrics',
      });
      if (result.success) {
        setIsAuthenticated(true);
        navigation.replace('MainApp'); // Use replace to prevent going back to the biometric screen
      } else {
        console.log('Authentication failed');
        Alert.alert('Autenticação falhou', 'Por favor, tente novamente.');
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#73A210', paddingTop: 200 }}>
      <Image
        source={require('./assets/recycle.gif')}
        style={{ width: 300, height: 300 }}
      />
      <Text
        style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 20 }}
      >
        Verificação de identidade
      </Text>

      {biometricSupported ? (
        !isAuthenticated && <Text style={{ color: 'white' }}>Esperando a autenticação por biometria</Text>
      ) : (
        <Text style={{ color: 'red' }}>Biometria não suportada ou não configurada</Text>
      )}

      {!biometricSupported && (
        <Button title="Continuar sem biometria" onPress={() => navigation.replace('MainApp')} />
      )}
    </View>
  );
};

export default BiometricValidation;