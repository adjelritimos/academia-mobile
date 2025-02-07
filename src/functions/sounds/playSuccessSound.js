import { Audio } from "expo-av"

const playSuccessSound = async () => {

    try {
        const { sound } = await Audio.Sound.createAsync(require("./../../sounds/success.mp3"))
        await sound.playAsync()
    } catch (error) {
        console.error("Erro ao tocar o som", error)
    }
    
}

export default playSuccessSound