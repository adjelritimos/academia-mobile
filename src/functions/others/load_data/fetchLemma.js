import AsyncStorage from "@react-native-async-storage/async-storage"
import getLemmas from "../database/getLemmas"



const fetchLemmas = async (database, setLemmas) => {
    try {
        
        await AsyncStorage.removeItem('lemmas')

        const storedLessons = await AsyncStorage.getItem('lemmas')

        if (storedLessons) {
            setLemmas(JSON.parse(storedLessons))
        } else {

            const lessonss = await getLemmas(database)
    
            if (lessonss) {
                setLemmas(lessonss)
                await AsyncStorage.setItem('lemmas', JSON.stringify(lessonss))
            }
        }
    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default fetchLemmas