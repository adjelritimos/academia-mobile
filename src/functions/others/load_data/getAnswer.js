import AsyncStorage from "@react-native-async-storage/async-storage"



const getAnswers = async (setAnswers) => {
    try {
        

        const storedAnswers = await AsyncStorage.getItem('answers')

        if (storedAnswers) {
            setAnswers(JSON.parse(storedAnswers))
        } else {

        }
    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default getAnswers