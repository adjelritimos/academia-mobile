import { StyleSheet } from "react-native"


const commandStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF2F5',
        alignItems: 'center',
    },

    list: {
        flex: 1,
        width: '100%'
    },

    input: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        borderColor: '#0dcaf0',
        borderWidth: 1,
        backgroundColor: '#f8f9fa',
        marginBottom: 10,
        paddingStart: 10,
        paddingEnd: 10
    },

    item: {
        height: 60,
        width: '100%',
        borderRadius: 10,
        borderColor: '#0dcaf0',
        borderWidth: 1,
        backgroundColor: '#f8f9fa',
        marginBottom: 2,
        padding: 10,
        alignItems: 'start',
    },

    itemText: {
        fontSize: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#0dcaf0',
        fontWeight: 'bold',
    }
})

export default commandStyles