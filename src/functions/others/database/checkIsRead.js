import AsyncStorage from "@react-native-async-storage/async-storage"

const checkWasRead = async (moduleId) => {
    console.log(moduleId)
    const number = moduleId - 1
    if (number === 0)
        return true
    else {
        const lessons = JSON.parse(await AsyncStorage.getItem('lessons'))
        const lesson = lessons.find(l => l.id === number)
        return lesson.wasRead === 1
    }
}

export default checkWasRead