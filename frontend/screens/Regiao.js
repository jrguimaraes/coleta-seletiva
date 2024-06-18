import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polygon } from "react-native-maps";
import { Table, Row, Rows, ScrollView } from 'react-native-table-component';

import Regioes from '../assets/components/regioes';

const TableCustom = ({ tableHead, tableData }) => {
  return (
    <Table borderStyle={{ borderWidth: 2, borderColor: '#73A252' }}>
      <Row data={tableHead} style={{ height: 40, backgroundColor: '#73A252' }} textStyle={{ margin: 6, fontWeight: 'bold', fontSize: 18, }} />
      <Rows data={tableData} textStyle={{ margin: 6 }} />
    </Table>
  )
}

function Regiao() {

  const [isTableEnlarged, setIsTableEnlarged] = useState(false);

  const handleTablePress = () => {
    setIsTableEnlarged(!isTableEnlarged);
  };


  
  return (
    <View style={styles.container}>

      <Regioes/>

      <TouchableOpacity
        style={[
          styles.tableContainer,
          isTableEnlarged ? styles.tableEnlarged : styles.tableSmall
        ]}
        onPress={handleTablePress}
      >
        <TableCustom
          tableHead={['Nº', 'Bairro']}
          tableData={[
            ['1', 'Centro 1'],
            ['2', 'Centro 2'],
            ['3', 'Esperanla'],
            ['4', 'Alto do Recanto'],
            ['5', 'Encanto'],
            ['6', 'Recanto'],
            ['7', 'Mantiqueira'],
            ['8', 'Acampamento'],
            ['9', 'Eicaliptos - Araçá'],
            ['10', 'Capitão Zenóbio'],
            ['11', 'Goiabal'],
            ['12', 'Lameirão'],
            ['13', 'Fortaleza'],
            ['14', 'Parque Acácias - STA Cecília'],
            ['16', 'Monte Alegre'],
            ['17', 'Pedras Ruivas'],
            ['18', 'Mato Grosso / Grotão']
          ]}
          tableStyle={{ flex: 1 }}
          rowStyle={{ height: 40 }}
        />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  Text: {
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    orderColor: '#000',
    color: '#000',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    paddingTop: 0,
  },
  map: {
    flex: 1,
  },
  tableContainer: {
    position: 'absolute',
    backgroundColor: "#FFF",
    bottom: 50,
    right: 10,
  },
  tableSmall: {
    top: 100,
    width: 150,
    height: '100%',
  },
  tableEnlarged: {
    width: '95%',
    height: 'auto',
  },
});

export default Regiao;
