import { Audio } from "expo-av"

const playErrorSound = async () => {

    try {
        const { sound } = await Audio.Sound.createAsync(require("./../../sounds/error.mp3"))
        await sound.playAsync()
    } catch (error) {
        console.error("Erro ao tocar o som", error)
    }
    
}

export default playErrorSound