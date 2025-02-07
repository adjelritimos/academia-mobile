import { StyleSheet } from "react-native"

const timeUpStyles = StyleSheet.create({

    title:{
        fontWeight: 'bold',
        fontSize: 50,
        color: 'red',
        textAlign: 'center'
    },

    view:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container:{
        borderColor: '#0dcaf0',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        width: '100%',
        backgroundColor: 'white',
        alignSelf: 'flex-end'
    },

    corret: {
        fontSize: 20,
        color: 'green',
        textAlign: 'justify'
    },

    answer: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        borderBottomColor: '#0dcaf0',
        borderBottomWidth: 1
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

})

export default timeUpStyles