import { View, Text, TouchableOpacity } from "react-native"
import instrutionStyles from "../../styles/instrution"
import { Ionicons } from "@expo/vector-icons"
import hasQuestions from "../../functions/others/hasQuestions"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/app_context"

const Instrucion = ({ route, navigation }) => {

    const whereToGo = route.params.where
    const { questions } = useContext(AuthContext)
    const [isDesabled, setIsDesabled] = useState(true)

    useEffect(() => {
        setIsDesabled(hasQuestions(whereToGo, questions))
    }, [])

    return (
        <View style={instrutionStyles.main}>

            {
                isDesabled ?
                    (
                        <>
                            <View style={instrutionStyles.containerNoQuestion}>
                                <Ionicons name="search-outline" size={200} color="#0dcaf0" />
                                <Text>Não há perguntas para praticares</Text>
                            </View>
                        </>
                    )
                    :
                    (
                        <View style={instrutionStyles.container}>
                            <Text style={instrutionStyles.title}>Instruções do Jogo</Text>

                            {
                                whereToGo !== 'GameContent' ?
                                    (
                                        <>
                                            <View style={instrutionStyles.containerText}>
                                                <Text style={instrutionStyles.text}>Este é um jogo de perguntas e respostas. Você terá 15 segundos para responder cada questão. Se acertar, avança para a próxima. Se errar, perde!</Text>
                                            </View>
                                            <Text style={instrutionStyles.text}>Regras:</Text>
                                            <View style={instrutionStyles.rules}>
                                                <Text style={instrutionStyles.rule}>Responda dentro do tempo.</Text>
                                                <Text style={instrutionStyles.rule}>Cada resposta certa leva à próxima pergunta.</Text>
                                                <Text style={instrutionStyles.ruleError}>Resposta errada = Fim de jogo!</Text>
                                            </View>
                                            <Text style={instrutionStyles.text_2}>Bom proveito!</Text>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <View style={instrutionStyles.containerText}>
                                                <Ionicons name="heart" solid size={20} color="#0dcaf0" />
                                                <Text style={instrutionStyles.text}>Você começará com 50 pontos de vida, a cada resposta errada você perderá 10 pontos de vida, e a cada resposta certa você ganhará 3. Se você perder todas as vidas, o jogo termina.</Text>
                                            </View>
                                            <View style={instrutionStyles.rule}>
                                                 <Ionicons name="checkmark" solid size={20} color="white" /> 
                                                <Text style={instrutionStyles.text_1}>A cada resposta certa você ganhará 1 ponto.</Text>
                                            </View>
                                            <View style={instrutionStyles.ruleError}>
                                                <Ionicons name="time" size={20} color="white" />
                                                <Text style={instrutionStyles.text_1}>Você terá 25 segundos para responder cada questão.</Text>
                                            </View>
                                            <Text style={instrutionStyles.text_2}>Bom proveito!</Text>
                                        </>
                                    )
                            }
                        </View>
                    )
            }

            <TouchableOpacity onPress={() =>{ isDesabled ? navigation.goBack() : navigation.replace(whereToGo)}} style={instrutionStyles.button}>
                <Text style={instrutionStyles.buttonText}>{ isDesabled ? "Voltar" : "Vamos praticar"}</Text>
            </TouchableOpacity>

        </View >
    )
}

export default Instrucion