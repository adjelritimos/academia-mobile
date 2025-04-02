import { View, Text, TouchableOpacity } from 'react-native'
import contentLessonStyles from '../../styles/contentLesson'
import { ScrollView } from 'react-native'

const Content = ({ route }) => {
    const lesson = route.params.lesson

    const renderTexts = (texto) => {
        return texto.split('\n').map((word, index) => (
            <Text key={index} style={word === word.toUpperCase() ? contentLessonStyles.contentTitle : contentLessonStyles.normal}>
                {word}{' '}
            </Text>
        ))
    }

    return (
        <ScrollView>
            <View style={contentLessonStyles.container}>
                <Text style={contentLessonStyles.title}>{lesson.title}</Text>
                <View style={contentLessonStyles.content}>
                    {
                        renderTexts(lesson.body)
                    }
                </View>

                <Text style={contentLessonStyles.title}>Questão</Text>
                <View style={contentLessonStyles.content}>
                    <TouchableOpacity style={contentLessonStyles.btn}>
                        <Text style={contentLessonStyles.btnTxt}>Responder</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default Content

