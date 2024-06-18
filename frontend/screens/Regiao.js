import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { FAB } from 'react-native-paper'

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

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <View style={styles.container}>

      <Regioes />


      <FAB
        icon="menu"
        color="white"
        style={{
          backgroundColor: '#73A252',
          position: 'absolute',
          right: 20,
          bottom: 30,
          margin: 16,
          zIndex: 999
        }}

        onPress={toggleVisibility}
      />

      {isVisible && (


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

      )}


    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 0,
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
