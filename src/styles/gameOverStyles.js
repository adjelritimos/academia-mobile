import { StyleSheet } from "react-native"

const gameOverStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ECF2F5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    section:{
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        padding: 10,
        shadowColor: '#000',
        elevation: 3
    },

    gameOverText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff0000',
        marginBottom: 20,
    },

    button: {
        width: '100%',
        backgroundColor: '#0dcaf0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
    },

    buttonText: {
        fontSize: 25,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
        fontWeight: 'bold',
    },

    gameOverImage:{
        width: 200,
        height: 200,
    }
})

export default gameOverStyles