import { Alert } from "react-native"

const alertQrCode = (navigation, isValid) => {
    
    if (isValid) {
        // Alerta padrão para QR válido
        Alert.alert(
            "Desistir da prática",
            "Tem certeza de que deseja interromper ou abandonar o seu quiz da prática?",
            [
                { text: "Não", style: "cancel" },
                { 
                    text: "Sim", 
                    onPress: () => navigation.replace('GameContentIndex') 
                },
            ]
        )
    } else {
        // Alerta de erro para QR inválido/expirado
        Alert.alert(
            "Erro",
            "O QR Code está expirado ou inválido. Por favor, gere um novo para continuar.",
            [
                { text: "OK", style: "default" }
            ]
        )
    }
}

export default alertQrCode