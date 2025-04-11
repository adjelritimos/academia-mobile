import AsyncStorage from "@react-native-async-storage/async-storage"
import getAllLessons from "../database/getAllLessons"



const fetchLessons = async (database, setLessons) => {
    try {
        
        await AsyncStorage.removeItem('lessons')

        const storedLessons = await AsyncStorage.getItem('lessons')

        if (storedLessons) {
            setLessons(JSON.parse(storedLessons))
        } else {

            const lessonss = await getAllLessons(database)
    
            if (lessonss) {
                setLessons(lessonss)
                await AsyncStorage.setItem('lessons', JSON.stringify(lessonss))
            }
        }
    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default fetchLessons