import AsyncStorage from '@react-native-async-storage/async-storage'
import * as FileSystem from 'expo-file-system'
import api_image from '../../../server/api_image'

const saveDataToStorage = async (data, setModules, setLemmas, setCommands, setLessons, setQuestions, setAnswers) => {

    try {

        const { modules, lessons, lemmas, commands, questions, answers } = data

        // Caminho da pasta onde queremos salvar os arquivos
        const directory = `${FileSystem.documentDirectory}media/`

        // Verifica se a pasta existe, se não, cria
        const dirInfo = await FileSystem.getInfoAsync(directory)
        if (!dirInfo.exists) {
            await FileSystem.makeDirectoryAsync(directory, { intermediates: true })
        }

        // Função para baixar um arquivo e retornar o caminho local
        const downloadFile = async (url) => {
            if (!url || typeof url !== 'string') return null

            const filename = url.split('/').pop()
            const path = `${directory}${filename}`

            // Opcional: verifica se já existe pra não baixar novamente
            const fileInfo = await FileSystem.getInfoAsync(path)
            if (fileInfo.exists) {
                return path // já existe, não precisa baixar
            }

            // Baixa e salva
            await FileSystem.downloadAsync(url, path)
            return path
        }

        // Processa os lemmas para baixar midias
        const updatedLemmas = await Promise.all(
            lemmas.map(async (lemma) => {

                const audioLocalPath = lemma.sound ? await downloadFile(api_image(lemma.sound)) : null

                return {
                    ...lemma,
                    sound: audioLocalPath,
                }
            })
        )

        // Processa os commands para baixar audios
        const updatedCommands = await Promise.all(
            commands.map(async (command) => {

                const demonstration = command.demonstration ? await downloadFile(api_image(command.demonstration)) : null
                const audioLocalPath = command.sound ? await downloadFile(api_image(command.sound)) : null

                return {
                    ...command,
                    sound: audioLocalPath,
                    demonstration: demonstration,
                }
            })
        )

        await AsyncStorage.setItem('modules', JSON.stringify(modules))
        await AsyncStorage.setItem('lessons', JSON.stringify(lessons))
        await AsyncStorage.setItem('lemmas', JSON.stringify(updatedLemmas))
        await AsyncStorage.setItem('commands', JSON.stringify(updatedCommands))
        await AsyncStorage.setItem('questions', JSON.stringify(questions))
        await AsyncStorage.setItem('answers', JSON.stringify(answers))

        setModules(modules)
        setLessons(lessons)
        setLemmas(updatedLemmas)
        setCommands(updatedCommands)
        setQuestions(questions)
        setAnswers(answers)

        console.log('✅ Todos os dados foram salvos com sucesso!')
    } catch (error) {
        console.error('❌ Erro ao salvar os dados:', error)
    }
}

export default saveDataToStorage