import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const baseUrl = 'https://ea03-2804-d84-2188-5d00-6b01-af57-169e-3ce8.ngrok-free.app';

const TabelaRegioes = () => {
    const [visibleItem, setVisibleItem] = useState(null);
    const [pontosList, setPontosList] = useState([]);

    const deleteItem = async (itemId) => {
        console.log(`${baseUrl}/pontos-coleta/${itemId}`);
        try {
            const response = await axios.delete(`${baseUrl}/pontos-coleta/${itemId}`);
            console.log('Item deleted successfully:', response.data);
            // Atualizar a lista após a exclusão bem-sucedida
            setPontosList(pontosList.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
            // Lide com o erro, mostre uma mensagem de erro, etc.
        }
    };

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
                            <View
                                key={ponto.id}
                                style={styles.pontoContainer}
                            >
                                <Text style={styles.pontoTitulo}>{ponto.nome}</Text>
                                <Text style={styles.pontoTitulo}>{ponto.tipo_material}</Text>
                                <Text style={styles.pontoTitulo}>{ponto.endereco}</Text>

                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: `data:image/png;base64,${ponto.imagem}`,
                                    }}
                                />

                                <Text style={styles.pontoTitulo}>{ponto.detalhes}</Text>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#C61C33',
                                        padding: 10,
                                        borderRadius: 5,
                                        marginTop: 30,
                                    }}

                                    onPress={() => deleteItem(ponto.id)}
                                >
                                    <Text style={{ color: 'white' }}>Marcar como coletado</Text>
                                </TouchableOpacity>
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
    pontoContainer: {
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pontoTitulo: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',

    },
    image: {
        marginTop: 30,
        height: 300,
        width: 300,
        borderWidth: 2,
        borderColor: "#73A252",
        borderRadius: 30,
    },
});

export default TabelaRegioes;