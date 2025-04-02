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
        backgroundColor: 'white',
        marginBottom: 10,
        paddingStart: 10,
        paddingEnd: 10,
        fontSize: 18
    },

    item: {
        height: 60,
        width: '100%',
        borderRadius: 10,
        borderColor: '#0dcaf0',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 3,
        padding: 10,
        alignItems: 'flex-start',
    },

    itemText: {
        fontSize: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#0dcaf0',
        fontWeight: 'bold',
    },

    btnSound: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    d_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 2
    }

})

export default commandStyles