import { Audio } from 'expo-av'
import * as FileSystem from 'expo-file-system'

const playSounds = async (sound, setSound, soundFile) => {
    try {
        // Validação inicial
        if (!soundFile || typeof soundFile !== 'string') {
            console.warn('⚠️ Caminho do áudio inválido:', soundFile)
            return
        }

        // Limpa e normaliza o caminho (remove barras duplas)
        let audioPath = soundFile.trim()

        // Se for um link HTTP(S), toca diretamente
        if (audioPath.startsWith('http://') || audioPath.startsWith('https://')) {
            console.log('⬇️ Tocando áudio remoto:', audioPath)
            const { sound: newSound } = await Audio.Sound.createAsync({ uri: audioPath })
            setSound(newSound)
            await newSound.playAsync()
            return
        }

        // Se for caminho local relativo ou incompleto, monta o caminho completo
        if (!audioPath.startsWith('file://')) {
            audioPath = `${FileSystem.documentDirectory}media/${audioPath}`
        }

        // Remove múltiplas barras (ex: /media//uploads)
        audioPath = audioPath.replace(/\/+/g, '/')

        // Verifica se o arquivo existe
        const fileInfo = await FileSystem.getInfoAsync(audioPath)

        if (!fileInfo.exists) {
            console.error('❌ Arquivo não encontrado:', audioPath)
            return
        }

        // Para o som anterior, se houver
        if (sound) {
            await sound.stopAsync()
            await sound.unloadAsync()
        }

        // Carrega e toca o novo som
        const { sound: newSound } = await Audio.Sound.createAsync({ uri: audioPath })
        setSound(newSound)
        await newSound.playAsync()

    } catch (error) {
        console.error('❌ Erro ao reproduzir som:', error)
    }
}

export default playSounds