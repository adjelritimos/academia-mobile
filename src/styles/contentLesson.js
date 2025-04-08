import { StyleSheet } from 'react-native'

const contentLessonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF2F5',
        alignItems: 'flex-start',
        padding: 10,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0dcaf0',
    },

    content: {
        fontSize: 18,
        color: '#000',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 3,
        width: '100%',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#0dcaf0',
        textAlign: 'left'
    },

    btnItem: {
        minHeight: 60,
        width: '100%',
        borderRadius: 10,
        borderColor: '#0dcaf0',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 2,
        padding: 10,
        alignItems: 'center'
    },

    btn: {
        backgroundColor: '#0dcaf0',
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    btnTxt: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },

    contentTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#0dcaf0',
    },

    normal: {
        fontWeight: 'normal',
        fontSize: 18,
    },
})

export default contentLessonStyles
