import { Alert } from "react-native"

const alertQuit = (navigation) => {
    Alert.alert(
        "Desistir da prática",
        "Tem certeza de que deseja interromper ou abandonar o seu quiz da prática?",
        [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => navigation.replace('IndexGame') },
        ]
    )

}

export default alertQuit