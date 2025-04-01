import { TextInput, Text, View, FlatList, TouchableOpacity } from "react-native"
import { useContext, useEffect, useState } from "react"
import lemmaStyles from "../../styles/lemma"
import { AuthContext } from "../../contexts/AuthContext"
import filter from "../../functions/others/database/filterContents"
import checkWasRead from "../../functions/others/database/checkIsRead"

const Lessons = ({navigation, route}) => {

    const moduleId = route.params.moduleId
    const {lessons} = useContext(AuthContext)
    const [lessonss, setLessonss] = useState([])
    const [lessonsCopy, setLessonsCopy] = useState([])
    const [completionStatus, setCompletionStatus] = useState({})

    const getLessons = async(id) => {
        const allLessons = lessons.filter(lesson => lesson.moduleId === moduleId)
        setLessonss(allLessons)
        setLessonsCopy(allLessons)
    }

    useEffect(()=> {
        getLessons(moduleId)
    }, [])

    useEffect(() => {

        const loadCompletionStatus = async () => {
            const status = {}

            for (const lesson of lessonss) {
                status[lesson.id] = await checkWasRead(lesson.id)
            }

            setCompletionStatus(status)
        }

        loadCompletionStatus()

    }, [lessonss])

    return (
        <View style={lemmaStyles.container}>
            <TextInput onChange={(newText)=> filter(newText.nativeEvent.text, lessonss,  setLessonsCopy) }  style={lemmaStyles.input} placeholder="busque lições pelo titulo" />
            <View style={lemmaStyles.list}>
                <FlatList style={{ width: '100%' }}
                    data={lessonsCopy}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity disabled={!completionStatus[item.id]} onPress={()=> navigation.navigate('Content', {lesson: item})} style={[lemmaStyles.item, !completionStatus[item.id] && lemmaStyles.disabledContent]}>
                            <Text style={lemmaStyles.itemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default Lessons