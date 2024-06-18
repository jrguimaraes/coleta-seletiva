import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const TabelaRegioes = () => {
    const [visibleItem, setVisibleItem] = useState(null);
    const [details, setDetails] = useState({});

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
    
    const fetchDetails = async (id) => {


        try {
            const response = await axios.get(`https://491d-2804-d84-2188-5d00-3f6e-14b0-277-8b2b.ngrok-free.app/regioes`);
            setDetails((prevDetails) => ({
                ...prevDetails,
                [id]: response.data,
            }));
        } catch (error) {
            console.error('Error fetching details:', error);
        }
    };

    const toggleVisibility = (id) => {
        if (visibleItem === id) {
            setVisibleItem(null);
        } else {
            setVisibleItem(id);
            if (!details[id]) {
                fetchDetails(id);
            }
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.id}) {item.name}</Text>
            <Button color="#73A252" title="Mostrar Denúncias" onPress={() => toggleVisibility(item.id)} />
            {visibleItem === item.id && details[item.id] && (

                <View style={styles.details}>
                    <Text>Detalhes de {item.name}</Text>
                    <Text>{details[item.id].description}</Text>
                    {/* Adicione mais campos conforme necessário */}
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