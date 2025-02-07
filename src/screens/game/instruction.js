import { View, Text, TouchableOpacity } from "react-native"
import instrutionStyles from "../../styles/instrution"

const Instrucion = ({ route, navigation }) => {

    const whereToGo = route.params.where

    return (
        <View style={instrutionStyles.main}>
            <View style={instrutionStyles.container}>
                <Text style={instrutionStyles.title}>Instruções do Jogo</Text>

                <View style={instrutionStyles.containerText}>
                    <Text style={instrutionStyles.text}>Este é um jogo de perguntas e respostas. Você terá 15 segundos para responder cada questão. Se acertar, avança para a próxima. Se errar, perde!</Text>
                </View>
                <Text style={instrutionStyles.text}>Regras:</Text>
                <View style={instrutionStyles.rules}>
                    <Text style={instrutionStyles.rule}>Responda dentro do tempo.</Text>
                    <Text style={instrutionStyles.rule}>Cada resposta certa leva à próxima pergunta.</Text>
                    <Text style={instrutionStyles.ruleError}>Resposta errada = Fim de jogo!</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=> navigation.replace(''+whereToGo)} style={instrutionStyles.button}>
                <Text style={instrutionStyles.buttonText}>Vamos praticar!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Instrucion