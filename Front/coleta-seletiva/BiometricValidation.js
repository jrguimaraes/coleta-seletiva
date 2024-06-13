import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Biometric Validation</Text>
      {biometricSupported ? (
        !isAuthenticated && <Text>Waiting for authentication...</Text>
      ) : (
        <Text>Biometric authentication not supported on this device.</Text>
      )}
    </View>
  );
};

export default BiometricValidation;