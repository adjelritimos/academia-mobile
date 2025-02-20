import { View, Text, TouchableOpacity } from "react-native"
import indexGameStyles from "../styles/indexGame"

const IndexGame = ({ navigation }) => {
    return (
        <View style={indexGameStyles.container}>
            <Text style={indexGameStyles.title}>O que você deseja praticar?</Text>
            <View style={indexGameStyles.dflex}>
                <TouchableOpacity onPress={() => navigation.replace('Instrution', { where: 'GameLemma' })} style={indexGameStyles.buttonLemma}>
                    <Text style={indexGameStyles.text}>LEMA</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace('Instrution', { where: 'GameCommand' })} style={indexGameStyles.buttonCommand} >
                    <Text style={indexGameStyles.text}>COMANDO DE VOZ</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.replace('ContentIndex')} style={indexGameStyles.buttonContent} >
                <Text style={indexGameStyles.text}>QUESTÕES SOBRE CONTEÚDOS</Text>
            </TouchableOpacity>
        </View>
    )
}

export default IndexGame