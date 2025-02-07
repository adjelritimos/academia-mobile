import { StyleSheet } from "react-native"


const gameCommandtyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF2F5',
        alignItems: 'center',
    },

    list:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    question :{
        height: 400,
        width: '100%',
        borderRadius: 10,
        borderColor: '#0dcaf0',
        borderWidth: 1.5,
        backgroundColor: '#f8f9fa',
        marginBottom: 20,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20
    },

    questionText:{
       fontSize: 18,
       color: '#0dcaf0',
       marginTop: 'auto',
       marginBottom: 'auto',
       fontWeight: 'bold',
       textAlign: 'center',
       alignSelf: 'center'   
    },

    item: {
        minHeight: 60,
        width: '100%',
        borderRadius: 10,
        borderColor: '#0dcaf0',
        borderWidth: 1,
        backgroundColor: '#f8f9fa',
        marginBottom: 2,
        padding: 10,
        alignItems: 'center'
    },

    itemText: {
        fontSize: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#0dcaf0',
        fontWeight: 'bold',
    }, 

    buttonText: {
        fontSize: 40,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
        fontWeight: 'bold',
    },

    nextButton:{
        width: '100%',
        height: 100,
        backgroundColor: '#0dcaf0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10
    },

    title: {
        fontWeight: 'bold',
        fontSize: 30, 
        alignSelf: 'flex-end',
        padding: 0,
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    subtitle: {
        fontSize: 20, 
        padding: 0,
        margin: 0,
         marginTop: 'auto',
        marginBottom: 'auto'
    },

    dflex: {
        flexDirection: 'row',
        width: '100%',
        borderBottomColor: '#0dcaf0',
        borderBottomWidth: 1,
       justifyContent: 'space-between'
    }
})

export default gameCommandtyles