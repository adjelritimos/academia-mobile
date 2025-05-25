import AsyncStorage from "@react-native-async-storage/async-storage"



const getLessons = async (setLessons) => {
    try {

        const storedLessons = await AsyncStorage.getItem('lessons')

        if (storedLessons) {
            setLessons(JSON.parse(storedLessons))
        }else {
            const storedLessons = []
            setLessons(storedLessons)
            await AsyncStorage.setItem('lessons', JSON.stringify(storedLessons))
        }
    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default getLessons