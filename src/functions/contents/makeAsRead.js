import AsyncStorage from "@react-native-async-storage/async-storage"

const makeAsRead = async (lessons, lesson, setLesson, setLessons, _modules, setModules, goToNextLesson, navigation) => {

    try {

        const updatedLessons = lessons.map(_lesson => _lesson.id === lesson.id ? { ..._lesson, wasRead: 1 } : _lesson)

        await AsyncStorage.setItem('lessons', JSON.stringify(updatedLessons))
        setLessons(updatedLessons)

        const lessonOfModule = updatedLessons.filter(le => le.moduleId === lesson.moduleId)

        let isAllRead = true

        for (const l of lessonOfModule) {
            if (l.wasRead === 0) {
                isAllRead = false
                break
            }
        }

        if (isAllRead && lessonOfModule[lessonOfModule.length - 1].id === lesson.id) {
            const updatedModules = _modules.map(_module => _module.id === lesson.moduleId ? { ..._module, isComplete: 1 } : _module)
            await AsyncStorage.setItem('modules', JSON.stringify(updatedModules))
            setModules(updatedModules)
            navigation.replace('ContentIndex', { moduleId: lesson.moduleId })
        }

        else if ((isAllRead && !(lessonOfModule[lessonOfModule.length - 1].id === lesson.id)) || !isAllRead) {
            for (let l = 0; l < lessonOfModule.length; l++) {
                if (lessonOfModule[l].id === lesson.id) {
                    setLesson(lessonOfModule[l + 1])
                    goToNextLesson()
                    break
                }
            }
        }


    } catch (error) {
        console.error('Erro em makeAsRead:', error)
    }
}

export default makeAsRead