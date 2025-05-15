import { View, Text, TouchableOpacity } from 'react-native'
import contentLessonStyles from '../../styles/contentLesson'
import { ScrollView } from 'react-native'
import Collapsible from "react-native-collapsible"
import gameLemmaStyles from '../../styles/gameLemma'
import { useContext, useRef, useState } from 'react'
import makeAsRead from '../../functions/contents/makeAsRead'
import { AuthContext } from '../../contexts/app_context'

const Content = ({ route, navigation }) => {

    const { lessons, setLessons, modules, setModules } = useContext(AuthContext)
    const [lesson, setLesson] = useState(route.params.lesson)
    const [question, setQuestion] = useState()
    const [showNextButton, setShowNextButton] = useState(true)
    const [itemSelect, setItemSelect] = useState(-1)
    const [isAnswer, setIsAnswer] = useState(false)
    const [colorSelect, setColorSelect] = useState('#0dcaf0')
    const scrollViewRef = useRef(null)

    const goToNextLesson = () => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }

    const verifyAnswer = (answer) => {

        if (!isAnswer) {

            if (answer === 'resposta 1') {
                setShowNextButton(false)
                setIsAnswer(true)
                setColorSelect('green')
            }

            else {
                setShowNextButton(false)
                setIsAnswer(true)
                setColorSelect('red')
            }

            setShowNextButton(false)
        }

    }

    const renderTexts = (texto) => {
        return texto.split('\n').map((word, index) => (
            <Text key={index} style={word === word.toUpperCase() ? contentLessonStyles.contentTitle : contentLessonStyles.normal}>
                {word}{' '}
            </Text>
        ))
    }

    const makeRead = async() => {
        await makeAsRead(lessons, lesson, setLesson, setLessons, modules, setModules, goToNextLesson, navigation)
    }

    return (

        <ScrollView ref={scrollViewRef}>

            <View style={contentLessonStyles.container}>

                <Text style={contentLessonStyles.title}>{lesson.content}</Text>

                <View style={contentLessonStyles.content}>{renderTexts(lesson.body)}</View>

                {
                    question ?
                        (
                            <>
                                <Text style={[contentLessonStyles.title, { marginTop: 20 }]}>Questão</Text>

                                <View style={contentLessonStyles.content}>
                                    <View style={[gameLemmaStyles.questions, { marginBottom: 20 }]}>
                                        <Text style={gameLemmaStyles.questionText}>{'O que vais responder?'}</Text>
                                    </View>
                                    <View style={gameLemmaStyles.list}>
                                        {['resposta 1', 'resposta 2', 'resposta 3', 'resposta 4'].map((item, index) => (
                                            <TouchableOpacity key={String(index)} onPress={() => { verifyAnswer(item); setItemSelect(index) }} style={itemSelect === index ? [contentLessonStyles.btnItem, { backgroundColor: colorSelect }] : contentLessonStyles.btnItem}>
                                                <Text style={gameLemmaStyles.itemText}>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>

                                    <Collapsible style={gameLemmaStyles.collaps} collapsed={showNextButton}>
                                        <TouchableOpacity onPress={() => setShowNextButton(!showNextButton)} style={colorSelect === 'green' ? gameLemmaStyles.nextButton : [gameLemmaStyles.nextButton, { backgroundColor: colorSelect }]}>
                                            <Text style={contentLessonStyles.btnTxt}>{colorSelect === 'green' ? 'PRÓXIMA' : 'TENTE NOVAMENTE'}</Text>
                                        </TouchableOpacity>
                                    </Collapsible>
                                </View>
                            </>
                        )
                        :
                        (
                            <TouchableOpacity onPress={()=> makeRead()} style={contentLessonStyles.btn}>
                                <Text style={contentLessonStyles.btnTxt}>marcar como lido</Text>
                            </TouchableOpacity>
                        )
                }

            </View>
        </ScrollView>

    )
}

export default Content