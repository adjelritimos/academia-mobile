import AsyncStorage from "@react-native-async-storage/async-storage"



const getLemmas = async (setLemmas) => {

    try {
        const storedLessons = await AsyncStorage.getItem('lemmas')

        if (storedLessons) {
            setLemmas(JSON.parse(storedLessons))
        } else {
            const storedLemmas = []
            setLemmas(storedLemmas)
            await AsyncStorage.setItem('lemmas', JSON.stringify(storedLemmas))
        }
    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default getLemmas