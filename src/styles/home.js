import { StyleSheet } from "react-native"


const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF2F5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    roundLogo: {
        width: 300,
        height: 300,
        borderRadius: 50,
    },

    d_flex:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },

    textInitButtons:{
        fontSize: 20,
        color: '#0dcaf0',
        fontWeight: 'bold',
    },

    textGameButtons:{
        fontSize: 20,
        color: '#f8f9fa',
        fontWeight: 'bold',
    },

    buttonToLema: {
        width: '50%',
        height: 100,
        marginEnd: 1,
        backgroundColor: '#f8f9fa',
        borderColor: '#0dcaf0',
        borderWidth: 1,
        color: '#fff',
        fontSize: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonToComand: {
        width: '50%',
        height: 100,
        marginStart: 1,
        backgroundColor: '#f8f9fa',
        borderColor: '#0dcaf0',
        borderWidth: 1,
        fontSize: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonToGame: {
        width: '100%',
        height: 100,
        marginTop: 3,
        backgroundColor: '#0dcaf0',
        color: '',
        fontSize: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonToContent: {
        width: '100%',
        height: 100,
        marginTop: 3,
        backgroundColor: 'white',
        borderColor: '#0dcaf0',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    content:{
        fontSize: 15,
        color: '#1ef4f1',
        height: 100
    }

})

export default globalStyles