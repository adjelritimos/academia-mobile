import { TextInput, Text, View, FlatList, TouchableOpacity } from "react-native"
import { useContext, useEffect, useState } from "react"
import lemmaStyles from "../../styles/lemma"
import { AuthContext } from "../../contexts/AuthContext"
import filter from "../../functions/others/database/filterContents"

const Lessons = ({navigation, route}) => {

    const moduleId = route.params.moduleId
    const {lessons} = useContext(AuthContext)
    const [lessonss, setLessonss] = useState([])
    const [lessonsCopy, setLessonsCopy] = useState([])

    const getLessons = async(id) => {
        const allLessons = lessons.filter(lesson => lesson.moduleId === moduleId)
        setLessonss(allLessons)
        setLessonsCopy(allLessons)
    }

    useEffect(()=> {
        getLessons(moduleId)
    }, [])


    return (
        <View style={lemmaStyles.container}>
            <TextInput onChange={(newText)=> filter(newText.nativeEvent.text, lessonss,  setLessonsCopy) }  style={lemmaStyles.input} placeholder="busque lições pelo titulo" />
            <View style={lemmaStyles.list}>
                <FlatList style={{ width: '100%' }}
                    data={lessonsCopy}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('Content', {lesson: item})} style={lemmaStyles.item}>
                            <Text style={lemmaStyles.itemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default Lessons