import { View, Text, FlatList, TouchableOpacity, BackHandler } from "react-native"
import questionStyles from "../../../styles/question"
import Collapsible from "react-native-collapsible"
import { useState, useEffect, useContext } from "react"
import { Ionicons } from "@expo/vector-icons"
import playSuccessSound from "../../../functions/sounds/playSuccessSound"
import playErrorSound from "../../../functions/sounds/playErrorSound"
import playTimeSound from "../../../functions/sounds/playTimeSound"
import TimeUp from "../../../components/timeUp"
import alertQuitContent from "../../../functions/others/alertquitcontent"
import { AuthContext } from "../../../contexts/app_context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import getQuestionAndAnswerContents from "../../../functions/contents/game/getQuestionAndAnswerContents"
const TOTAL_QUESTIONS = 1000


const QuestionContent = ({ navigation }) => {

    const initialTime = 25
    const { points, setPoints } = useContext(AuthContext)
    const [life, setLife] = useState(50)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [countdown, setCountdown] = useState(initialTime)
    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [questionNumber, setQuestionNumber] = useState(1)
    const [questions, setQuestions] = useState({})
    const [isAnswer, setIsAnswer] = useState(false)
    const [itemSelect, setItemSelect] = useState(-1)
    const [colorSelect, setColorSelect] = useState('#0dcaf0')
    const [showNextButton, setShowNextButton] = useState(true)
    const [gameOver, setGameOver] = useState(false)
    const [timeUp, setTimeUp] = useState(false)


    const question = async () => {
        setQuestions(await getNewQuestion())
    }

    useEffect(() => {
        question()
    }, [])


    const upDatePoint = async () => {

        if (correctAnswer > points.points) {
            const point = { points: correctAnswer }
            setPoints(point)
            await AsyncStorage.setItem('points', JSON.stringify(point))
        }
    }


    useEffect(() => {
        if (countdown > 0 && !isAnswer) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            if (countdown == 3) {
                playTimeSound()
            }
            return () => clearTimeout(timer)
        } else if (countdown === 0 && !isAnswer) {
            setLife(life - 10)
            setIsAnswer(true)
            setColorSelect('red')
            setTimeUp(true)
        }
        if (life <= 0) {
            setGameOver(true)
        }

        upDatePoint()

    }, [countdown, isAnswer, navigation])

    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            async () => {
                await alertQuitContent(navigation, correctAnswer, setPoints)
                return true
            }
        )

        return () => backHandler.remove()

    }, [navigation])

    async function getNewQuestion() {
        let newQuestion
        let maxAttempts = 20

        do {
            newQuestion = await getQuestionAndAnswerContents()
            maxAttempts--
        } while (questionsAnswered.includes(newQuestion.question) && maxAttempts > 0)

        return newQuestion
    }


    function doUpdateTimeUp() {
        setTimeUp(false)
        nextQuestion()
    }


    const verifyAnswer = async (answer) => {

        if (!gameOver && !isAnswer) {

            if (answer === questions.correct_answer) {
                setIsAnswer(true)
                setCorrectAnswer(correctAnswer + 1)
                playSuccessSound()
                setLife(life + 3)
                setItemSelect(answer)
                setColorSelect('green')
                if (questionNumber === TOTAL_QUESTIONS) {
                    navigation.replace('GameWin')
                }
            } else {
                setItemSelect(answer)
                setLife(life - 10)
                setIsAnswer(true)
                playErrorSound()
                setColorSelect('red')
            }

        }
        setTimeout(() => {
            setShowNextButton(false)
        }, 1000)
    }

    const nextQuestion = async () => {
        setShowNextButton(true)
        setIsAnswer(false)
        setItemSelect(-1)
        setCountdown(initialTime)

        if (gameOver) {
            navigation.replace('GameContentIndex')
        }

        else if (questionNumber < TOTAL_QUESTIONS) {
            const newQuestion = await getNewQuestion()
            setQuestions(newQuestion)
            setQuestionsAnswered([...questionsAnswered, 'kkkk'])
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
        <View style={questionStyles.container}>
            <View style={questionStyles.question}>

                <View style={questionStyles.dflex}>

                    <Text style={questionStyles.title}>
                       <Ionicons name="heart" solid size={20} color="#0dcaf0" /> {life}
                    </Text>

                    <Text style={questionStyles.title}>
                        <Ionicons name="checkmark" solid size={20} color="#0dcaf0" /> {correctAnswer}
                    </Text>

                    <Text style={[questionStyles.title, { color: getTimeColor() }]}>
                        <Ionicons name="time" solid size={20} color="#0dcaf0" /> {countdown}
                    </Text>
                </View>

                <View style={questionStyles.questions}>
                    <Text style={questionStyles.questionText}> {questions.question} </Text>
                </View>
            </View>

            {
                timeUp ?
                    (
                        <TimeUp setTimeUp={doUpdateTimeUp} gameOver={gameOver} />
                    )

                    :
                    (

                        <View style={questionStyles.list}>
                            <FlatList style={{ width: '100%' }} data={questions.options} keyExtractor={(index) => String(index)} renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => verifyAnswer(item)} style={[questionStyles.item, { backgroundColor: itemSelect === item ? colorSelect : 'white', }]}>
                                    <Text style={questionStyles.itemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            />
                        </View>
                    )
            }

            <Collapsible style={{ width: '100%' }} collapsed={showNextButton}>
                <TouchableOpacity onPress={nextQuestion} style={[questionStyles.nextButton, { backgroundColor: gameOver ? 'red' : '#0dcaf0' }]}>
                    <Text style={questionStyles.buttonText}>{gameOver ? 'FIM DO JOGO' : 'PRÓXIMA'}</Text>
                </TouchableOpacity>
            </Collapsible>
        </View>
    )
}

export default QuestionContent
