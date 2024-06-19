import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const baseUrl = 'https://ea03-2804-d84-2188-5d00-6b01-af57-169e-3ce8.ngrok-free.app';

const TabelaRegioes = () => {
    const [visibleItem, setVisibleItem] = useState(null);
    const [pontosList, setPontosList] = useState([]);

    const data = [
        { id: 1, name: 'Centro 1' },
        { id: 2, name: 'Centro 2' },
        { id: 3, name: 'Esperanla' },
        { id: 4, name: 'Alto do Recanto' },
        { id: 5, name: 'Encanto' },
        { id: 6, name: 'Recanto' },
        { id: 7, name: 'Mantiqueira' },
        { id: 8, name: 'Acampamento' },
        { id: 9, name: 'Eicaliptos - Araçá' },
        { id: 10, name: 'Capitão Zenóbio' },
        { id: 11, name: 'Goiabal' },
        { id: 12, name: 'Lameirão' },
        { id: 13, name: 'Fortaleza' },
        { id: 14, name: 'Parque Acácias - STA Cecília' },
        { id: 15, name: 'Monte Alegre' },
        { id: 16, name: 'Ville Monte Alegre' },
        { id: 17, name: 'Pedras Ruivas' },
        { id: 18, name: 'Mato Grosso / Grotão' }
    ];

    const toggleVisibility = (id) => {
        setVisibleItem(visibleItem === id ? null : id);
    };

    useEffect(() => {
        if (visibleItem !== null) {
            const fetchPontos = async () => {
                try {
                    console.log(`${baseUrl}/pontos-coleta/regiao/${visibleItem}`);
                    const response = await fetch(`${baseUrl}/pontos-coleta/regiao/${visibleItem}`);
                    const json = await response.json();
                    setPontosList(json);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchPontos();
        }
    }, [visibleItem]);


    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.id}) {item.name}</Text>
            <Button color="#73A252" title="Mostrar Pontos" onPress={() => toggleVisibility(item.id)} />
            {visibleItem === item.id && (

                <View style={styles.details}>

                    {pontosList.map((ponto) => {

                        return (
                            <View style={{borderWidth:2, borderColor:"#000", marginBottom:50}}>
                                <Text key={ponto.id}>{ponto.nome} / {ponto.tipo_material}</Text>
                                <Image
                                    style={{height:300, width:300,}}
                                    source={{
                                        uri: `data:image/png;base64,${ponto.imagem}`,
                                    }}
                                />
                            </View>
                            
                        );

                    })}

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
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderBlockColor: "#73A252"
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    details: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'lightgrey',
    },
});

export default TabelaRegioes;