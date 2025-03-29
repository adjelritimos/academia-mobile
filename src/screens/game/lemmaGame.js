import { View, Text, FlatList, TouchableOpacity, BackHandler } from "react-native"
import gameLemmaStyles from "../../styles/gameLemma"
import Collapsible from "react-native-collapsible"
import { useState, useEffect } from "react"
import getQuestionAndAnswer from "../../functions/lemma/game/getQuestionAndAnswer"
import playSuccessSound from "../../functions/sounds/playSuccessSound"
import playErrorSound from "../../functions/sounds/playErrorSound"
import playTimeSound from "../../functions/sounds/playTimeSound"
import alertQuit from "../../functions/others/alertquit"

const TOTAL_QUESTIONS = 10

const LemmaGame = ({ navigation }) => {
    const initialTime = 15
    const [countdown, setCountdown] = useState(initialTime)
    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [questionNumber, setQuestionNumber] = useState(1)
    const [lemmas, setLemmas] = useState(getNewQuestion())
    const [isAnswer, setIsAnswer] = useState(false)
    const [itemSelect, setItemSelect] = useState(-1)
    const [colorSelect, setColorSelect] = useState('#0dcaf0')
    const [showNextButton, setShowNextButton] = useState(true)


    useEffect(() => {
        if (countdown > 0 && !isAnswer) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            if (countdown == 3) {
                playTimeSound()
            }
            return () => clearTimeout(timer)
        } else if (countdown === 0 && !isAnswer) {
            navigation.replace('TimeUp', { from: 'GameLemma', command: lemmas })
        }
    }, [countdown, isAnswer, navigation])

    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                alertQuit(navigation)
                return true
            }
        )

        return () => backHandler.remove()

    }, [navigation])

    function getNewQuestion() {
        let newQuestion
        let maxAttempts = 20

        do {
            newQuestion = getQuestionAndAnswer(Math.floor(Math.random() * 15))
            maxAttempts--
        } while (questionsAnswered.includes(newQuestion.question) && maxAttempts > 0)

        return newQuestion
    }

    const verifyAnswer = (answer) => {
        if (answer === lemmas.answer && !isAnswer) {
            setShowNextButton(false)
            setIsAnswer(true)
            setItemSelect(lemmas.options.indexOf(answer))
            setColorSelect('green')
            playSuccessSound()
            if (questionNumber === TOTAL_QUESTIONS) {
                navigation.replace('GameWin')
            }
        } else {
            setItemSelect(lemmas.options.indexOf(answer))
            setIsAnswer(true)
            setColorSelect('red')
            playErrorSound()
            setTimeout(() => {
                navigation.replace('GameOver', { from: 'GameLemma', imagePath: './../../../assets/lose.png' })
            }, 2000)
        }
    }

    const nextQuestion = () => {
        setShowNextButton(true)
        setIsAnswer(false)
        setItemSelect(-1)
        setCountdown(initialTime)

        if (questionNumber < TOTAL_QUESTIONS) {
            const newQuestion = getNewQuestion()
            setLemmas(newQuestion)
            setQuestionsAnswered([...questionsAnswered, newQuestion.question])
            setQuestionNumber(questionNumber + 1)
        }
    }

    const getTimeColor = () => {
        const percent = countdown / initialTime
        const r = Math.floor(13 + (255 - 13) * (1 - percent))
        const g = Math.floor(202 * percent)
        const b = Math.floor(240 * percent)
        return `rgb(${r},${g},${b})`
    }

    return (
        <View style={gameLemmaStyles.container}>
            <View style={gameLemmaStyles.question}>

                <View style={gameLemmaStyles.dflex}>

                    <Text style={gameLemmaStyles.subtitle}>
                        Pergunta {questionNumber}/{TOTAL_QUESTIONS}
                    </Text>

                    <Text style={[gameLemmaStyles.title, { color: getTimeColor() }]}>
                        {countdown}s
                    </Text>
                </View>

                <View style={gameLemmaStyles.questions}>
                    <Text style={gameLemmaStyles.questionText}>{lemmas.question}</Text>
                </View>
            </View>

            <View style={gameLemmaStyles.list}>
                <FlatList
                    style={{ width: '100%' }}
                    data={lemmas.options}
                    keyExtractor={(index) => String(index)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => verifyAnswer(item)}
                            style={{
                                minHeight: 60,
                                width: '100%',
                                borderRadius: 10,
                                borderColor: '#0dcaf0',
                                borderWidth: 1,
                                backgroundColor: itemSelect === lemmas.options.indexOf(item) ? colorSelect : '#f8f9fa',
                                marginBottom: 2,
                                padding: 10,
                                alignItems: 'center'
                            }}>
                            <Text style={gameLemmaStyles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Collapsible style={gameLemmaStyles.collaps} collapsed={showNextButton}>
                <TouchableOpacity onPress={nextQuestion} style={gameLemmaStyles.nextButton}>
                    <Text style={gameLemmaStyles.buttonText}>PRÓXIMA</Text>
                </TouchableOpacity>
            </Collapsible>
        </View>
    )
}

export default LemmaGame
