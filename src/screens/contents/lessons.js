import { TextInput, Text, View, FlatList, TouchableOpacity } from "react-native"
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useContext, useEffect, useState } from "react"
import lemmaStyles from "../../styles/lemma"
import { Ionicons } from "@expo/vector-icons"
import { AuthContext } from "../../contexts/app_context"
import filter from "../../functions/others/database/filterContents"
import checkWasRead from "../../functions/others/database/checkIsRead"
import instrutionStyles from "../../styles/instrution"

const Lessons = ({ navigation, route }) => {

    const moduleId = route.params.moduleId
    const { lessons } = useContext(AuthContext)
    const [lessonss, setLessonss] = useState([])
    const [lessonsCopy, setLessonsCopy] = useState([])
    const [completionStatus, setCompletionStatus] = useState({})

    const getLessons = () => {
        const allLessons = lessons.filter(lesson => lesson.moduleId === moduleId)
        setLessonss(allLessons)
        setLessonsCopy(allLessons)
        loadCompletionStatus()
    }

    const loadCompletionStatus = () => {

        const status = {}

        for (const lesson of lessonsCopy) {
            status[lessonsCopy.indexOf(lesson)] = checkWasRead(lessonsCopy.indexOf(lesson), lessonsCopy)
        }

        setCompletionStatus(status)
    }

    useEffect(() => {
        loadCompletionStatus()
    }, [lessonss, lessonsCopy, lessons])


    useFocusEffect(
        useCallback(() => {
            getLessons()
            loadCompletionStatus()
        }, [lessons])
    )

    return (
        <View style={lemmaStyles.container}>
            <TextInput onChangeText={(value) => filter(value, lessonss, setLessonsCopy)} style={lemmaStyles.input} placeholder="busque lições pelo titulo" />
            {
               lessonsCopy.length ?
                    (
                        <View style={lemmaStyles.list}>
                            <FlatList style={{ width: '100%' }} data={lessonsCopy} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                                <TouchableOpacity disabled={!completionStatus[lessonsCopy.indexOf(item)]} onPress={() => navigation.navigate('Content', { lesson: item })} style={[lemmaStyles.item, !completionStatus[lessonsCopy.indexOf(item)] && lemmaStyles.disabledContent]}>
                                    <Text style={lemmaStyles.itemText}>{item.content}</Text>
                                </TouchableOpacity>
                            )}
                            />
                        </View>
                    )
                    :
                    (
                        <>
                            <View style={instrutionStyles.containerNoQuestion}>
                                <Ionicons name="file-tray-stacked-outline" size={200} color="#0dcaf0" />
                                <Text>O módulo ainda não tem lições</Text>
                            </View>
                        </>
                    )
            }
        </View>
    )
}

export default Lessons