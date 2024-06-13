import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';


import TableCustom from '../assets/components/Table';

const Pontos = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.textTitle}>COLETA SEMANAL DE MATERIAL DE PODA</Text>
                <Text style={styles.textSubtitle}>Porta-a-porta e dias diversificados</Text>
                <TableCustom tableHead={['Dia', 'Bairro']} tableData={[
                    ['Segunda-feira', 'Palmares, Centro, Monte Alegre, Parque das Acacias (Estrada das Mangueiras) e no entorno do ciep 278.'],
                    ['Terça-feira', 'Centro, Recanto dos Eucaliptos (Araçá). Rua ao Lado do Fórum (Rua João Paim), Roseiral, Estrada da Cachoeira.'],
                    ['Quarta-feira (Porta-a-porta)', 'Centro, Recanto, Alto do Recanto (Morro do lney), Mantiquira, Acampamento.'],
                    ['Quinta-feira (Porta-a-porta)', 'Centro, subida do PRODEQ, Mato Grossa (Grotão), Biriba e Parque Barcelos.'],
                    ['Sexta-feira (Porta-a-porta)', 'Centro, Lameirao Golabal, Morro do Capitao e Fortaleza.'],
                    ['Sábado', 'Centro, centro de Arcozelo, Monte Alegre.']
                ]} />
                <Text style={styles.textTitle}>COLETA SEMANAL DE MATERIAL RECICLÁVEL</Text>
                <Text style={styles.textSubtitle}> Porta-a-porta</Text>
                <TableCustom tableHead={['Dia', 'Bairro']} tableData={[
                    ['Segunda-feira', 'Centro, Parque Barcellos, Esperança e Mato Grosso (um logradouro).'],
                    ['Terça-feira', 'Acampamento, Recanto, Alto do Recanto (Morro do llney) e Mantlquira.'],
                    ['Sexta-feira', 'Morro do Capitão, Goiabal, Lameirão e Fortaleza.']
                ]} />
                <Text style={styles.textTitle}>COLETA SELETIVA EM PONTOS DE ENTREGA VOLUNTÁRIA E ALGUNS PONTOS COMERCIAIS</Text>
                <TableCustom tableHead={['Dia', 'Bairro']} tableData={[
                    ['Quarta-feira', 'Centro, Palmares, Monte Alegre, Maravilha, Bela Vista, Coqueiros, Rio Pardo, Vista Alegre, Granja, Avelar.'],
                    ['Quinta-feira', 'Mercado Fernandes (Centro), Monte Alegre, Campo Verde, Arcozelo/Ceasa, Avelar, Granja.'],
                    ['Sábado', 'Mercado Fernandes (Centro), Monte Alegre, Arcozelo/Ceasa, Avelar, Granja Vista Alegre.']
                ]} />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 12, paddingTop: 30, backgroundColor: '#fff' },
    textTitle: { textAlign: 'center', fontWeight: 'bold', fontSize: 20, margin: 10 },
    textSubtitle: { textAlign: 'center', marginBottom: 10 }
});

export default Pontos;