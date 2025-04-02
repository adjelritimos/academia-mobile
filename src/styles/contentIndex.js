import { StyleSheet } from 'react-native'

const contentIndexStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ECF2F5',
        alignItems: 'flex-start',
        padding: 20,
    },

    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#0dcaf0',
        marginBottom: 10,
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#0dcaf0',
    },

    content: {
        fontSize: 16,
        color: '#000',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 3,
        width: '100%',
        height: 90,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#0dcaf0',
    },

    disabledContent: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#EAEAEA',
        padding: 10,
        borderRadius: 10,
        marginTop: 3,
        width: '100%',
        height: 90,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#0dcaf0',
    },

    contentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0dcaf0',
    },

    list: {
        width: '100%',
    }
})

export default contentIndexStyles
