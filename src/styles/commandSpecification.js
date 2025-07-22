import { StyleSheet } from "react-native"


const commandSpecificationStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF2F5',
        alignItems: 'start',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0dcaf0',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '85%'
    },

    d_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 3
    },

    btn: {
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: '50%'
    },

    desciption: {
        backgroundColor: 'white',
        borderColor: '#0dcaf0',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10
    },

    desciptionImage: {
        backgroundColor: 'white',
        borderColor: '#0dcaf0',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },

    desciption_text: {
        fontSize: 20,
        marginBottom: 2,
    },

    desciption_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0dcaf0',
        marginBottom: 2,
    },

    desciption_title_1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0dcaf0',
        marginTop: 10,
        marginBottom: 1,
    },

    description_image: {
        height: 490,
        width: '90%',
        borderRadius: 10,
        resizeMode: 'stretch',
    }
})

export default commandSpecificationStyles