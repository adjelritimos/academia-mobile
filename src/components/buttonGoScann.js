import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"


const ButtonGoScann = ({ navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ScannQrCode')} style={{ marginLeft: 15, marginEnd: 15 }}>
            <Ionicons name="qr-code" size={24} color="#0dcaf0" />
        </TouchableOpacity>
    )

}
export default ButtonGoScann