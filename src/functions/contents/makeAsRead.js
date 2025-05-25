import AsyncStorage from "@react-native-async-storage/async-storage"

const makeAsRead = async (moduleId, lessons, lesson, setLesson, setLessons, _modules, setModules, goToNextLesson, getQuestion, navigation) => {

    try {
        const updatedLessons = lessons.map(_lesson => _lesson.id === lesson.id ? { ..._lesson, wasRead: 1 } : _lesson)

        await AsyncStorage.setItem('lessons', JSON.stringify(updatedLessons))

        const lessonOfModule = updatedLessons.filter(le => le.moduleId === moduleId)
        const lessonOfModuleSorted = [...lessonOfModule].sort((a, b) => a.order - b.order)
        const lastLessonId = lessonOfModuleSorted[lessonOfModuleSorted.length - 1]?.id
        const isAllRead = lessonOfModuleSorted.every(l => l.wasRead === 1)

        if (isAllRead && lastLessonId === lesson.id) {
            const updatedModules = _modules.map(_module =>
                _module.id === moduleId ? { ..._module, isComplete: 1 } : _module
            )
            await AsyncStorage.setItem('modules', JSON.stringify(updatedModules))
            setModules(updatedModules)
            navigation.goBack()

        } else {
            const currentIndex = lessonOfModuleSorted.findIndex(le => le.id === lesson.id)
            const nextLesson = lessonOfModuleSorted[currentIndex + 1]

            if (nextLesson) {
                setLesson(nextLesson)
                getQuestion(nextLesson.id)
                goToNextLesson()
            } else {
                navigation.goBack()
            }
        }

        const updatedLessonsSaved = await AsyncStorage.getItem('lessons')
        setLessons(JSON.parse(updatedLessonsSaved))
        
    } catch (error) {
        console.error('Erro em makeAsRead:', error)
    }
}

export default makeAsRead