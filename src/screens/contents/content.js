import { View, Text } from 'react-native'
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
            </View>
        </ScrollView>
    )
}

export default Content

