import AsyncStorage from "@react-native-async-storage/async-storage"
import getModules from "../database/getModules"



const fetchModules = async (database, setModules) => {
    try {

        await AsyncStorage.removeItem('modules')
        const storedModules = await AsyncStorage.getItem('modules')

        if (storedModules) {
            setModules(JSON.parse(storedModules))
        } else {

            const moduless = await getModules(database)

            if (moduless) {
                setModules(moduless)
                await AsyncStorage.setItem('modules', JSON.stringify(moduless))
            }
        }
    } catch (error) {
        console.error('Erro ao buscar módulos:', error)
    }
}

export default fetchModules