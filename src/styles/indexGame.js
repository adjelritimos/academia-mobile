import { StyleSheet } from "react-native"


const indexGameStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF2F5',
        alignItems: 'start',
    },

    title:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0dcaf0',
        marginBottom: 10,
    },

    buttonLemma:{
        width: '100%',
        height: '40%',
        backgroundColor: '#0dcaf0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },

    buttonCommand:{
        width: '100%',
        height: '40%',
        backgroundColor: '#0dcaf0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },

    text:{
        fontSize: 30,
        color: '#f8f9fa',
        fontWeight: 'bold',
    }

})

export default indexGameStyles