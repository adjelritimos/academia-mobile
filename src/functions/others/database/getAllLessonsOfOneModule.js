import AsyncStorage from "@react-native-async-storage/async-storage"


const getAllLessonsOfOneModule = async (moduleId) => {
    try {

        const storedLessons = await AsyncStorage.getItem('lessons')
        console.log(storedLessons)

        if (!storedLessons) {
            console.warn('Nenhuma lição encontrada no AsyncStorage')
            return []
        }

        const allLessons = JSON.parse(storedLessons)

        if (allLessons) {
            return allLessons.filter(lesson => lesson.moduleId === moduleId)
        }

        console.error('O formato das lições armazenadas é inválido')
        return []

    } catch (error) {
        console.error('Erro ao obter lições do módulo:', error)
        return []
    }
}

export default getAllLessonsOfOneModule