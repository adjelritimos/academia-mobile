import { Alert } from "react-native"

const alertQuitContent = async (navigation, points, setPoints) => {


    Alert.alert(
        "Desistir da prática",
        "Tem certeza de que deseja interromper ou abandonar o seu quiz da prática?",
        [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => navigation.replace('GameContentIndex') },
        ]
    )

}

export default alertQuitContent