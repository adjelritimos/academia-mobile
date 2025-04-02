import { Audio } from "expo-av"

const playLemmaSound = async () => {

    try {
        const { sound } = await Audio.Sound.createAsync(require("./../../sounds/time.mp3"))
        await sound.playAsync()
    } catch (error) {
        console.error("Erro ao tocar o som", error)
    }
    
}

export default playLemmaSound