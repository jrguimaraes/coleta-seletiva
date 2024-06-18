import { StyleSheet } from 'react-native';

import { Table, Row, Rows } from 'react-native-table-component';


const TableCustom = ({tableHead, tableData}) => {
    return (
        <Table borderStyle={styles.border}>
            <Row data={tableHead} style={styles.head} textStyle={styles.textHead}/>
            <Rows data={tableData} textStyle={styles.text}/>
        </Table>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#bdecb6' },
    textHead: { margin: 6, fontWeight: 'bold', fontSize:  18 },
    text: { margin: 6 },
    border: { borderWidth: 2, borderColor: '#bdecb6' }
});

export default TableCustom;