import AsyncStorage from "@react-native-async-storage/async-storage"



const getQuestions = async (setQuestions) => {

    try {
        const storedQuestions = await AsyncStorage.getItem('questions')

        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions))
        } else {
            const storedQuestions = []
            setQuestions(storedQuestions)
            await AsyncStorage.setItem('questions', JSON.stringify(storedQuestions))
        }

    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default getQuestions