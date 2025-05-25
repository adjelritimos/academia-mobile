import { View, Text, TouchableOpacity } from 'react-native'
import contentLessonStyles from '../../styles/contentLesson'
import { ScrollView } from 'react-native'
import Collapsible from "react-native-collapsible"
import gameLemmaStyles from '../../styles/gameLemma'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import makeAsRead from '../../functions/contents/makeAsRead'
import { AuthContext } from '../../contexts/app_context'
import getQuestionAndAnswerContentsByLessonId from '../../functions/contents/game/getQuestionAndAnswerContentsByLessonId'

const Content = ({ route, navigation }) => {

    const { lessons, setLessons, modules, setModules } = useContext(AuthContext)
    const [lesson, setLesson] = useState(route.params.lesson)
    const [question, setQuestion] = useState({})
    const [showNextButton, setShowNextButton] = useState(true)
    const [itemSelect, setItemSelect] = useState(-1)
    const [isAnswer, setIsAnswer] = useState(false)
    const [colorSelect, setColorSelect] = useState('#0dcaf0')
    const scrollViewRef = useRef(null)

    const getQuestion = async (id) => {
        try {
            const question = await getQuestionAndAnswerContentsByLessonId(id)
            setQuestion(question)
        } catch (error) {
            console.log(error)
        }

    }

    useFocusEffect(
        useCallback(() => {
            getQuestion(lesson.id)
        }, [lesson])
    )

    const goToNextLesson = () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true })
    }

    async function getNewQuestion(id) {
        const question = await getQuestionAndAnswerContentsByLessonId(id)
        return question
    }

    const verifyAnswer = (answer) => {

        if (answer === question.correct_answer && !isAnswer) {
            setShowNextButton(false)
            setItemSelect(question.options.indexOf(answer))
            setColorSelect('green')
        } else if (!isAnswer) {
            setItemSelect(question.options.indexOf(answer))
            setColorSelect('red')
            setShowNextButton(false)
        }

        setIsAnswer(true)

    }

    const nextQuestion = async () => {
        setShowNextButton(true)
        setIsAnswer(false)
        setItemSelect(-1)
        const newQuestion = await getNewQuestion(lesson.id)
        setQuestion(newQuestion)
    }

    const renderTexts = (texto) => {
        return texto.split('\n').map((word, index) => (
            <Text key={index} style={word === word.toUpperCase() ? contentLessonStyles.contentTitle : contentLessonStyles.normal}>
                {word}{' '}
            </Text>
        ))
    }

    const makeRead = async () => {
        await makeAsRead(lesson.moduleId, lessons, lesson, setLesson, setLessons, modules, setModules, goToNextLesson, getQuestion, navigation)
        setItemSelect(-1)
        setColorSelect('')
        setIsAnswer(false)
    }

    return (

        <ScrollView ref={scrollViewRef}>

            <View style={[contentLessonStyles.container, { marginBottom: 20 }]}>

                <Text style={contentLessonStyles.title}>{lesson.content}</Text>

                <View style={contentLessonStyles.content}>{renderTexts(lesson.body)}</View>

                {
                    question?.options ?
                        (
                            <>
                                <Text style={[contentLessonStyles.title, { marginTop: 20 }]}>Questão</Text>

                                <View style={[contentLessonStyles.content, { marginBottom: 20 }]}>
                                    <View style={[gameLemmaStyles.questions, { marginBottom: 20 }]}>
                                        <Text style={gameLemmaStyles.questionText}>{question.question}</Text>
                                    </View>
                                    <View style={gameLemmaStyles.list}>
                                        {question.options.map((item, index) => (
                                            <TouchableOpacity key={String(index)} onPress={() => { verifyAnswer(item); setItemSelect(index) }} style={itemSelect === index ? [contentLessonStyles.btnItem, { backgroundColor: colorSelect }] : contentLessonStyles.btnItem}>
                                                <Text style={gameLemmaStyles.itemText}>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>

                                    <Collapsible style={gameLemmaStyles.collaps} collapsed={showNextButton}>
                                        <TouchableOpacity onPress={async () => {
                                            setShowNextButton(!showNextButton)
                                            if (colorSelect === 'green') {
                                                makeRead()
                                            }
                                            else {
                                                await nextQuestion()
                                            }
                                        }
                                        } style={colorSelect === 'green' ? gameLemmaStyles.nextButton : [gameLemmaStyles.nextButton, { backgroundColor: colorSelect }]}>
                                            <Text style={contentLessonStyles.btnTxt}>{colorSelect === 'green' ? 'PRÓXIMA LIÇÃO' : 'TENTE NOVAMENTE'}</Text>
                                        </TouchableOpacity>
                                    </Collapsible>
                                </View>
                            </>
                        )
                        :
                        (
                            <TouchableOpacity onPress={() => {makeRead()}} style={contentLessonStyles.btn}>
                                <Text style={contentLessonStyles.btnTxt}>marcar como lido</Text>
                            </TouchableOpacity>
                        )
                }

            </View>
        </ScrollView>

    )
}

export default Content