import { Audio } from "expo-av"

const playSounds = async (sound, setSound, soundFile) => {
    try {
       
        if (sound) {
            await sound.stopAsync()
            await sound.unloadAsync()
        }

        const { sound: newSound } = await Audio.Sound.createAsync(soundFile)
        setSound(newSound)
        await newSound.playAsync()
        
    } catch (error) {
        console.error("Erro ao reproduzir som:", error)
    }
}

export default playSounds