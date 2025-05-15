import { View, Text, FlatList, TouchableOpacity, BackHandler } from "react-native"
import gameCommandStyles from "../../styles/gameLemma"
import Collapsible from "react-native-collapsible"
import { useState, useEffect } from "react"
import getQuestionAndAnswerCommands from "../../functions/command/game/getQuestionAndAnswerCommands"
import playSuccessSound from "../../functions/sounds/playSuccessSound"
import playErrorSound from "../../functions/sounds/playErrorSound"
import playTimeSound from "../../functions/sounds/playTimeSound"
import alertQuit from "../../functions/others/alertquit"

const TOTAL_QUESTIONS = 10

const CommandGame = ({ navigation }) => {
    const initialTime = 15
    const [countdown, setCountdown] = useState(initialTime)
    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [questionNumber, setQuestionNumber] = useState(1)
    const [command, setCommand] = useState(getNewQuestion())
    const [isAnswer, setIsAnswer] = useState(false)
    const [showNextButton, setShowNextButton] = useState(true)
    const [itemSelect, setItemSelect] = useState(-1)
    const [colorSelect, setColorSelect] = useState('#0dcaf0')

    useEffect(() => {
        if (countdown > 0 && !isAnswer) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            if(countdown == 3){
                playTimeSound()
            }
            return () => clearTimeout(timer)
        } else if (countdown === 0 && !isAnswer) {
            navigation.replace('TimeUp', { from: 'GameCommand', command: command })
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
            newQuestion = getQuestionAndAnswerCommands(Math.floor(Math.random() * 15))
            maxAttempts--
        } while (questionsAnswered.includes(newQuestion.question) && maxAttempts > 0)

        return newQuestion
    }

    const verifyAnswer = (answer) => {
        if (answer === command.answer && !isAnswer) {
            setShowNextButton(false)
            setIsAnswer(true)
            setItemSelect(command.options.indexOf(answer))
            setColorSelect('green')
            playSuccessSound()

            if (questionNumber === TOTAL_QUESTIONS) {
                navigation.replace('GameWin')
            }
        } else {
            setItemSelect(command.options.indexOf(answer))
            setIsAnswer(true)
            setColorSelect('red')
            playErrorSound()
            setTimeout(() => {
                navigation.replace('GameOver', { from: 'GameCommand', imagePath: './../../../assets/lose.png' })
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
            setCommand(newQuestion)
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
        <View style={gameCommandStyles.container}>
            <View style={gameCommandStyles.question}>
                <View style={gameCommandStyles.dflex}>

                    <Text style={gameCommandStyles.subtitle}>
                        Pergunta {questionNumber}/{TOTAL_QUESTIONS}
                    </Text>

                    <Text style={[gameCommandStyles.title, { color: getTimeColor() }]}>
                        {countdown}s
                    </Text>
                </View>
                <View style={gameCommandStyles.questions}>
                    <Text style={gameCommandStyles.questionText}>{command.question}</Text>
                </View>
            </View>

            <View style={gameCommandStyles.list}>
                <FlatList
                    style={{ width: '100%' }}
                    data={command.options}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => verifyAnswer(item)}
                            style={{
                                minHeight: 60,
                                width: '100%',
                                borderRadius: 10,
                                borderColor: '#0dcaf0',
                                borderWidth: 1,
                                backgroundColor: itemSelect === command.options.indexOf(item) ? colorSelect : '#f8f9fa',
                                marginBottom: 2,
                                padding: 10,
                                alignItems: 'center'
                            }}>
                            <Text style={gameCommandStyles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Collapsible collapsed={showNextButton}>
                <TouchableOpacity onPress={nextQuestion} style={gameCommandStyles.nextButton}>
                    <Text style={gameCommandStyles.buttonText}>PRÓXIMA</Text>
                </TouchableOpacity>
            </Collapsible>
        </View>
    )
}

export default CommandGame
