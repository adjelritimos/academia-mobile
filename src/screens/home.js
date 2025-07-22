import { View, Text, Image, TouchableOpacity, BackHandler, ScrollView } from "react-native"
import globalStyles from "../styles/home"
import { useEffect } from "react"
import alertQuitApp from "../functions/others/alertquitApp"


const Home = ({ navigation }) => {

    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress', () => {
                alertQuitApp()
                return true
            }
        )

        return () => backHandler.remove()

    }, [navigation])

    return (
        <ScrollView>
            <View style={globalStyles.container}>

                <Image source={require('./../../assets/logo.png')} style={globalStyles.roundLogo} />

                <View style={globalStyles.d_flex}>

                    <TouchableOpacity style={globalStyles.buttonToLema} onPress={() => navigation.navigate('Lemma')}>

                        <Text style={globalStyles.textInitButtons}>Lema</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={globalStyles.buttonToComand} onPress={() => navigation.navigate('CommandVoice')}>
                        <Text style={globalStyles.textInitButtons}>Voz de Comando</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={globalStyles.buttonToContent} onPress={() => navigation.navigate('ContentIndex')}>
                    <Text style={globalStyles.textInitButtons}>Conteúdos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.buttonToGame} onPress={() => navigation.navigate('IndexGame')}>
                    <Text style={globalStyles.textGameButtons}>Praticar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Home