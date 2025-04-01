import AsyncStorage from "@react-native-async-storage/async-storage"

const checkIsComplete = async (moduleId) => {

    const number = moduleId - 1
   
    if (number === 0)
        return true

    else {
        const modules = JSON.parse(await AsyncStorage.getItem('modules'))
        const modulo = modules.find(m => m.id === number)
        return modulo ? modulo.isComplete === 1 : false
    }
}

export default checkIsComplete