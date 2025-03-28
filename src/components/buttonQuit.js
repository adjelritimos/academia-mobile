import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import alertQuit from "../functions/others/alertquit"

const ButtonQuit = ({ navigation }) => {

    return (
        <TouchableOpacity onPress={() => alertQuit(navigation)} style={{ marginLeft: 15, marginEnd: 15 }}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
    )

}
export default ButtonQuit