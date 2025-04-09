import { StyleSheet } from "react-native"


const commandSpecificationStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF2F5',
        alignItems: 'start',
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0dcaf0',
        marginBottom: 10,
        width: '85%'
    },

    d_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 3
    },

    btn: {
        marginTop: 'auto',
        marginBottom:'auto',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: '50%'
    }
})

export default commandSpecificationStyles