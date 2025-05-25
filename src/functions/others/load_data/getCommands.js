import AsyncStorage from "@react-native-async-storage/async-storage"

const getCommands = async (setCommands) => {
    try {
        

        const storedCommands = await AsyncStorage.getItem('commands')

        if (storedCommands) {
            setCommands(JSON.parse(storedCommands))
        } else {
            const storedCommands = []
            setCommands(storedCommands)
            await AsyncStorage.setItem('commands', JSON.stringify(storedCommands))
        }
    } catch (error) {
        console.error('Erro ao buscar licoes:', error)
    }
}

export default getCommands