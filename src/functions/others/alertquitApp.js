import { BackHandler, Alert } from 'react-native'

const alertQuitApp = () => {
    Alert.alert(
        "Sair",
        "Tem certeza de que deseja sair?",
        [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => BackHandler.exitApp() },
        ]
    )

}

export default alertQuitApp