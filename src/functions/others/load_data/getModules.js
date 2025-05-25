import AsyncStorage from "@react-native-async-storage/async-storage"




const getModules = async (setModules) => {
    try {

        const storedModules = await AsyncStorage.getItem('modules')

        if (storedModules) {
            setModules(JSON.parse(storedModules))
        }else {
            const storedModules = []
            setModules(storedModules)
            await AsyncStorage.setItem('modules', JSON.stringify(storedModules))
        }
    } catch (error) {
        console.error('Erro ao buscar módulos:', error)
    }
}

export default getModules