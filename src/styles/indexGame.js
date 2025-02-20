import { StyleSheet } from "react-native"


const indexGameStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF2F5',
        alignItems: 'start',
    },

    dflex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '40%',
        marginBottom: 3,
    },

    title:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0dcaf0',
        marginBottom: 10,
    },

    buttonLemma:{
        width: '50%',
        height: '100%',
        backgroundColor: '#0dcaf0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginEnd: 1
    },

    buttonCommand:{
        width: '50%',
        height: '100%',
        backgroundColor: '#0dcaf0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    buttonContent:{
        width: '100%',
        height: '40%',
        backgroundColor: '#0dcaf0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    text:{
        fontSize: 30,
        color: '#f8f9fa',
        fontWeight: 'bold',
        textAlign: 'center',
    }

})

export default indexGameStyles