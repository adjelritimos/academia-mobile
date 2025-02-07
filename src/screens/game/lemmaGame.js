import { View, Text, FlatList, TouchableOpacity } from "react-native"
import gameLemmaStyles from "../../styles/gameLemma"
import Collapsible from "react-native-collapsible"
import { useState } from "react"
import getQuestionAndAnswer from "../../functions/lemma/game/getQuestionAndAnswer"

const LemmaGame = ({ navigation }) => {


    let second = 15
    const [countdown, setCountdown] = useState(second)
    const [lemmas, setLemmas] = useState(getQuestionAndAnswer(Math.floor(Math.random() * 15)))
    const [isAnswer, setIsAnswer] = useState(false)
    const [itemSelect, setItemSelect] = useState(-1)
    const [colorSelect, setColorSelect] = useState('#0dcaf0')
    const [showNextButton, setShowNextButton] = useState(true)

    const verifyAnswer = (answer) => {
        if (answer === lemmas.answer && !isAnswer) {
            setShowNextButton(false)
            setIsAnswer(true)
            setItemSelect(lemmas.options.indexOf(answer))
            setColorSelect('green')
        }
        else {
            setItemSelect(lemmas.options.indexOf(answer))
            setIsAnswer(true)
            setColorSelect('red')
            navigation.replace('GameOver', { from: 'GameLemma', imagePath: './../../../assets/lose.png' })
        }
    }


    const nextQuestion = () => {
        setShowNextButton(true)
        setIsAnswer(false)
        setItemSelect(-1)
        setLemmas(getQuestionAndAnswer(Math.floor(Math.random() * 16)))
    }

    const intervalId = setInterval(() => {
        second--
        console.log(`Tempo restante: ${second}s`)
    
        if (second <= 0) {
            clearInterval(intervalId)
            console.log("Tempo acabou!")
        }
    }, 1000)


    return (
        <View style={gameLemmaStyles.container}>
            <View style={gameLemmaStyles.question}>
                <Text style={gameLemmaStyles.title}>{countdown}</Text>
                <View style={gameLemmaStyles.question_1}>
                    <Text style={gameLemmaStyles.questionText}>{lemmas.question}</Text>
                </View>
            </View>

            <View style={gameLemmaStyles.list}>
                <FlatList style={{ width: '100%' }}
                    data={lemmas.options}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => verifyAnswer(item)} style={{ minHeight: 60, width: '100%', borderRadius: 10, borderColor: '#0dcaf0', borderWidth: 1, backgroundColor: itemSelect === lemmas.options.indexOf(item) ? colorSelect : '#f8f9fa', marginBottom: 2, padding: 10, alignItems: 'center' }}>
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