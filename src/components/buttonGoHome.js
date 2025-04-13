import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"


const ButtonGoHome = ({ navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 15, marginEnd: 15 }}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
    )

}
export default ButtonGoHome