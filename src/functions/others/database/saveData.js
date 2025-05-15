import AsyncStorage from '@react-native-async-storage/async-storage'

const saveDataToStorage = async (data, setModules, setLemmas, setCommands, setLessons, setQuestions, setAnswers) => {

    try {

        const { modules, lessons, lemmas, commands, questions, answers } = data

        await AsyncStorage.setItem('modules', JSON.stringify(modules))
        await AsyncStorage.setItem('lessons', JSON.stringify(lessons))
        await AsyncStorage.setItem('lemmas', JSON.stringify(lemmas))
        await AsyncStorage.setItem('commands', JSON.stringify(commands))
        await AsyncStorage.setItem('questions', JSON.stringify(questions))
        await AsyncStorage.setItem('answers', JSON.stringify(answers))

        setModules(modules)
        setLessons(lessons)
        setLemmas(lemmas)
        setCommands(commands)
        setQuestions(questions)
        setAnswers(answers)
        


        console.log('✅ Todos os dados foram salvos com sucesso!')
    } catch (error) {
        console.error('❌ Erro ao salvar os dados:', error)
    }
}

export default saveDataToStorage