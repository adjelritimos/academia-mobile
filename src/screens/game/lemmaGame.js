import { View, Text, FlatList, TouchableOpacity } from "react-native"
import gameLemmaStyles from "../../styles/gameLemma"
import Collapsible from "react-native-collapsible"
import { useState } from "react"
import getQuestionAndAnswer from "../../functions/lemma/game/getQuestionAndAnswer"

const LemmaGame = ( { navigation } ) => {

    const [lemmas, setLemmas] = useState(getQuestionAndAnswer(Math.floor(Math.random() * 15)))
    const [isAnswer, setIsAnswer] = useState(false)
    const [showNextButton, setShowNextButton] = useState(true)

    const verifyAnswer = (answer) => {
        if (answer === lemmas.answer && !isAnswer) {
            setShowNextButton(false)
            setIsAnswer(true)
        }
        else{
            navigation.navigate('GameOver', {from: 'GameLemma', imagePath: './../../../assets/lose.png'})
        }
    }


    const nextQuestion = () => {
        setShowNextButton(true)
        setIsAnswer(false)
        setLemmas(getQuestionAndAnswer(Math.floor(Math.random() * 15)))
    }

    return (
        <View style={gameLemmaStyles.container}>
            <View style={gameLemmaStyles.question}>
                <Text style={gameLemmaStyles.questionText}>{lemmas.question}</Text>
            </View>

            <View style={gameLemmaStyles.list}>
                <FlatList style={{ width: '100%' }}
                    data={lemmas.options}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => verifyAnswer(item)} style={gameLemmaStyles.item}>
                            <Text style={gameLemmaStyles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Collapsible collapsed={showNextButton}>
                <TouchableOpacity onPress={() => nextQuestion()} style={gameLemmaStyles.nextButton}>
                    <Text style={gameLemmaStyles.buttonText}>PRÓXIMA</Text>
                </TouchableOpacity>
            </Collapsible>

        </View>
    )
}

export default LemmaGame