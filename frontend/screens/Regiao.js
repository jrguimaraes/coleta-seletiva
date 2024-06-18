import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { FAB } from 'react-native-paper'

import Regioes from '../assets/components/regioes';
import TableCustom from '../assets/components/Table';

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

        <TableCustom></TableCustom>

      )}


    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 0,
  },

});

export default Regiao;
