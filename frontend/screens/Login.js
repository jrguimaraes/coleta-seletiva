import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const baseUrl = 'https://ea03-2804-d84-2188-5d00-6b01-af57-169e-3ce8.ngrok-free.app';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  async function createMarker(data) {
    axios.post(`${baseUrl}/usuarios/login/`, { 
      "email": data.email,
      "senha": data.senha
    },{
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
        Alert.alert('Sucesso', 'Login concluído');
        navigation.navigate('MainApp');
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Erro ao fazer login');
    });
  }

  const handleSubmit = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha o email e a senha');
      return;
    }

    const formData = {
      email,
      senha,
    };
    await createMarker(formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite a senha"
      />

      <Button style={styles.button} title="Entrar" onPress={handleSubmit} />

      <Button style={styles.button} title="Entrar com digital" onPress={ () => navigation.navigate('BiometricValidation')} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
  },
  picker: {
    height: 40,
    width: '100%',
  }
});

export default LoginPage;
