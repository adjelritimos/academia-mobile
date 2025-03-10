import { Text, View, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import timeUpStyles from "./../styles/timeUp"

const TimeUp = (props) => {

    return (
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

            <View style={timeUpStyles.view}>
                <Text style={timeUpStyles.title}>Tempo Esgotado</Text>
                <Ionicons name="stopwatch" size={200} color="#0dcaf0" />
            </View>  

            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => props.setTimeUp()} style={{ width: '90%', backgroundColor: props.gameOver ? 'red' : '#0dcaf0', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, height: 100 }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>{props.gameOver ? 'FIM DO JOGO' : 'PROXIMA'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default TimeUp