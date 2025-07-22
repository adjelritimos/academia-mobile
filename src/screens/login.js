import { useContext, useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import doLogin from '../functions/user/doLogin'
import { AuthContext } from '../contexts/app_context'

const Login = ({ navigation }) => {

    const { setUser } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const typeUseName = (text) => {
        setUsername(text)
        setError('')
    }

    const typePassWord = (text) => {
        setPassword(text)
        setError('')
    }


    return (
        <View style={styles.container}>

            <View style={styles.topWhite} />

            <View style={styles.bottomBlue}>

                <Image source={require('./../../assets/logo.png')} style={styles.logo} />

                <TextInput value={username} onChange={(newText) => typeUseName(newText.nativeEvent.text)} placeholder="Nome do usuário" placeholderTextColor="#999" style={styles.input} />

                <TextInput value={password} onChange={(newText) => typePassWord(newText.nativeEvent.text)} placeholder="Palavra-passe" placeholderTextColor="#999" secureTextEntry style={styles.input} />

                <TouchableOpacity onPress={async () => await doLogin(username, password, setError, navigation, setUser, setLoading)} style={styles.button}>

                    {loading ? ( <ActivityIndicator color="#fff" /> ) : ( <Text style={styles.buttonText}>Entar</Text> )}

                </TouchableOpacity>

                <Text style={styles.textError}>{error}</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    topWhite: {
        flex: 0.5,
        backgroundColor: 'white',
        position: 'relative',
        paddingBottom: 20,
    },

    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        position: 'absolute',
        top: -60,
        left: 35,
        zIndex: 10,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 60,
    },

    bottomBlue: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#0dcaf0',
        borderTopRightRadius: 100,
        alignItems: 'center',
        paddingTop: 80,
    },

    input: {
        backgroundColor: 'white',
        width: '80%',
        paddingVertical: 13,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20
    },

    button: {
        width: '80%',
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'white',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    textError: {
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    },

})

export default Login
