//CODIGO LIXO, SÓ TA AQUI PRA SER COPIADO

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const TabelaRegioes = () => {
    
  const [visibleItem, setVisibleItem] = useState(null);

  // Lista de nomes únicos
  const uniqueNames = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan',
    'Judy', 'Mallory', 'Niaj', 'Oscar', 'Peggy', 'Quentin', 'Rupert', 'Sybil', 'Trent'
  ];

  // Gerar dados com nomes únicos
  const data = uniqueNames.map((name, index) => ({
    id: index + 1,
    name,
  }));

  const revelaItens = (id) => {
    setVisibleItem(visibleItem === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.id}. {item.name}</Text>
      <Button title="Show Details" onPress={() => revelaItens(item.id)} />
      {visibleItem === item.id && (
        <View style={styles.details}>
          <Text>Details for {item.name}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  details: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgrey',
  },
});

export default TabelaRegioes;