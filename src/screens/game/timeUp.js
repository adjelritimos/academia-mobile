import { Text, View, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import globalStyles from "../../styles/home"
import timeUpStyles from "../../styles/timeUp"

const TimeUp = ({ route, navigation }) => {



    return (
        <View style={globalStyles.container}>

            <View style={timeUpStyles.view}>
                <Text style={timeUpStyles.title}>Tempo Esgotado</Text>
                <Ionicons name="stopwatch" size={200} color="#0dcaf0" />
            </View>

            <View style={timeUpStyles.container}>
                <Text style={timeUpStyles.answer}>Resposta correcta:</Text>
                <Text style={timeUpStyles.corret}>{route.params.command.answer}</Text>
                <TouchableOpacity style={timeUpStyles.button} onPress={() => navigation.replace(route.params.from)}>
                    <Text style={timeUpStyles.buttonText}>Tentar Novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default TimeUp