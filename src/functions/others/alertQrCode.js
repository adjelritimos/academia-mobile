import { Alert } from "react-native"

const alertQrCode = (navigation, setScannedData, setScanned, isValid) => {

    if (isValid) {
        Alert.alert(
            "Sucesso na leitura",
            "O QR Code ainda está válido. Clique em 'Continuar' para prosseguir com a sincronização de dados.",
            [
                { 
                    text: "Cancelar e voltar a ler",
                    style: "cancel",
                    onPress: () => {
                        setScannedData(null)
                        setScanned(false)
                    },
                },
               
                { 
                    text: "Continuar", 
                    onPress: () => navigation.replace('SyncData') 
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