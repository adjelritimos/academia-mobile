import { StyleSheet } from 'react-native'

const gameContentIndexStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    
    image: {
        marginTop: 50,
        width: 200,
        height: 200
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },

    points: {
        fontSize: 150,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#0dcaf0'
    },

    button: {
        backgroundColor: '#0dcaf0',
        height: 80,
        padding: 10,
        borderRadius: 5,
        marginTop: 'auto',
        width: '100%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default gameContentIndexStyles