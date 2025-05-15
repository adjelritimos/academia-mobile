import AsyncStorage from "@react-native-async-storage/async-storage"



const getQuestions = async (setQuestions) => {
    try {
        

        const storedQuestions = await AsyncStorage.getItem('questions')

        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions))
        } else {

        }
        
    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default getQuestions