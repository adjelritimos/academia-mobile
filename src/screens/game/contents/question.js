import { View, Text, FlatList, TouchableOpacity } from "react-native"
import questionStyles from "../../../styles/question"
import Collapsible from "react-native-collapsible"
import { useState, useEffect } from "react"
import Icon from 'react-native-vector-icons/FontAwesome5'
const TOTAL_QUESTIONS = 1000


const QuestionContent = ({ navigation }) => {
    const initialTime = 25
    const [life, setLife] = useState(50)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [countdown, setCountdown] = useState(initialTime)
    const [questionsAnswered, setQuestionsAnswered] = useState([])
    const [questionNumber, setQuestionNumber] = useState(1)
    const [lemmas, setLemmas] = useState(getNewQuestion())
    const [isAnswer, setIsAnswer] = useState(false)
    const [itemSelect, setItemSelect] = useState(-1)
    const [colorSelect, setColorSelect] = useState('#0dcaf0')
    const [showNextButton, setShowNextButton] = useState(true)
    const [gameOver, setGameOver] = useState(false)


    useEffect(() => {
        if (countdown > 0 && !isAnswer) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            if(countdown == 3){
               // playTimeSound()
            }
            return () => clearTimeout(timer)
        } else if (countdown === 0 && !isAnswer) {
            //navigation.replace('TimeUp', { from: 'GameLemma', command: lemmas })
        }
        if(life <= 0){
            setGameOver(true)
        }

    }, [countdown, isAnswer, navigation])


    function getNewQuestion() {
       
    }

    const verifyAnswer = (answer) => {
        if (answer === 'Conteúdo 1') {
            setShowNextButton(false)
            setIsAnswer(true)
            setCorrectAnswer(correctAnswer + 1)
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
            setColorSelect('red')               
        }


        setShowNextButton(false)

    }

    const nextQuestion = () => {
        setShowNextButton(true)
        setIsAnswer(false)
        setItemSelect(-1)
        setCountdown(initialTime)

        if (questionNumber < TOTAL_QUESTIONS) {
            const newQuestion = getNewQuestion()
            setLemmas(newQuestion)
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
        <View style={ questionStyles.container}>
            <View style={questionStyles.question}>

                <View style={questionStyles.dflex}>

                    <Text style={questionStyles.title}>
                        <Icon name="heart" solid size={20} color="#0dcaf0" /> {life}
                    </Text>

                    <Text style={questionStyles.title}>
                        <Icon name="check" solid size={20} color="#0dcaf0" /> {correctAnswer}
                    </Text>

                    <Text style={[questionStyles.title, { color: getTimeColor() }]}>
                       <Icon name="clock" solid size={20} color="#0dcaf0" /> {countdown}
                    </Text>
                </View>

                <View style={questionStyles.questions}>
                    <Text style={questionStyles.questionText}>{'Qual é o conteúdo que você quer praticar?'}</Text>
                </View>
            </View>

            <View style={questionStyles.list}>
                <FlatList
                    style={{ width: '100%' }}
                    data={['Conteúdo 1', 'Conteúdo 2', 'Conteúdo 3', 'Conteúdo 4']}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => verifyAnswer(item)}
                            style={{
                                minHeight: 60,
                                width: '100%',
                                borderRadius: 10,
                                borderColor: '#0dcaf0',
                                backgroundColor: 'white',
                                borderWidth: 1,
                                marginBottom: 2,
                                padding: 10,
                                alignItems: 'center'
                            }}>
                            <Text style={questionStyles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Collapsible style={{ width: '100%' }} collapsed={showNextButton}>
                <TouchableOpacity onPress={nextQuestion} style={[questionStyles.nextButton,  { backgroundColor: gameOver ? 'red' : '#0dcaf0' }]}>
                    <Text style={questionStyles.buttonText}>{gameOver ? 'FIM DO JOGO' : 'PRÓXIMA'}</Text>
                </TouchableOpacity>
            </Collapsible>
        </View>
    )
}

export default QuestionContent
