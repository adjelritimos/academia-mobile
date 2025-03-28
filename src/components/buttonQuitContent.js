import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import alertQuitContent from "../functions/others/alertquitcontent"

const ButtonQuitContent = ({ navigation }) => {

    return (
        <TouchableOpacity onPress={() => alertQuitContent(navigation)} style={{ marginLeft: 15, marginEnd: 15 }}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
    )
    
}
export default ButtonQuitContent