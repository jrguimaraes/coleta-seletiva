import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Mapa from './Mapa';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const baseUrl = 'https://ea03-2804-d84-2188-5d00-6b01-af57-169e-3ce8.ngrok-free.app';



const FormPage = () => {
  const [nome, setNome] = useState('');
  const [tipoMaterial, setTipoMaterial] = useState('');
  const [regiao, setRegiao] = useState('');
  const [regions, setRegions] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();

  async function createMarker(data) {
    const { imagem, locationPosition } = route.params;

    axios.post(`${baseUrl}/pontos-coleta/`, { 
      "nome": data.nome, // formulario
      "tipo_material": data.tipoMaterial, // formulario
      "latitude": locationPosition.coords.latitude, // imagem
      "longitude": locationPosition.coords.longitude, // imagem
      "regiao": data.regiao, // formulario
      "imagem": imagem, // imagem
    },{
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
        Alert.alert('Sucesso', 'Formulário enviado com sucesso');
    })
    .catch(error => {
      console.error('Erro ao inserir novo ponto de coleta:', error);
      Alert.alert('Erro', 'Erro ao criar ponto de coleta');
    });
    navigation.navigate('Mapa');
  }

  const handleSubmit = async () => {
    if (!nome || !tipoMaterial || !regiao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const formData = {
      nome,
      tipoMaterial,
      regiao,
    };
    console.log('Dados do formulário:', formData);
    await createMarker(formData);
  };

  getRegions = async () => {
    const regionsResult = await axios.get(`${baseUrl}/regioes/`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    setRegions(regionsResult.data);

  }

  useEffect(() => {
    getRegions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>Tipo de Material</Text>
      <TextInput
        style={styles.input}
        value={tipoMaterial}
        onChangeText={setTipoMaterial}
        placeholder="Digite o tipo de material"
      />

      <Text style={styles.label}>Região</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={regiao}
          onValueChange={(itemValue) => setRegiao(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione uma região" value="" />
          {regions.map((regiao) => (
            <Picker.Item key={regiao.id} label={regiao.nome} value={regiao.id} />
          ))}
        </Picker>
      </View>

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  },
});

export default FormPage;
