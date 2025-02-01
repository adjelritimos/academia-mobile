import { StyleSheet } from "react-native"


const instrutionStyles = StyleSheet.create({

    main: {
        flex: 1,
        padding: 20,
    },

    container: {
        flex: 1,
        backgroundColor: '#ECF2F5',
        alignItems: 'start',
    },

    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0dcaf0',
        marginBottom: 10,
    },

    containerText: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#0dcaf0',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },

    button: {
        width: '100%',
        backgroundColor: '#0dcaf0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        padding: 20
    },

    text: {
        fontSize: 20,
        color: '#0dcaf0',
        fontWeight: 'bold',
        textAlign: 'justify'
    },

    buttonText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'justify'
    },

    rules: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0dcaf0",
        marginBottom: 20,
    },
    rule: {
        fontSize: 20,
        marginBottom: 5,
        color: 'white',
        backgroundColor: "green",
        borderRadius: 10,
        padding: 10,
        fontWeight: 'bold',
    },

    ruleError: {
        fontSize: 20,
        marginBottom: 5,
        color: 'white',
        backgroundColor: "#ffc107",
        borderRadius: 10,
        padding: 10,
        fontWeight: 'bold',
    }
})

export default instrutionStyles