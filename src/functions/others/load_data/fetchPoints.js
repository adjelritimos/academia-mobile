import AsyncStorage from "@react-native-async-storage/async-storage"




const fetchPoints = async (setPoints) => {
    try {

        //await AsyncStorage.removeItem('points')

        let storedpoint = await AsyncStorage.getItem('points')

        if (storedpoint) {
            setPoints(JSON.parse(storedpoint))
        } else {
            storedpoint = { points: 0 }
            setPoints(storedpoint)
            await AsyncStorage.setItem('points', JSON.stringify(storedpoint))
        }
    } catch (error) {
        console.error('Erro ao carregar sua pontuação:', error)
    }
}

export default fetchPoints