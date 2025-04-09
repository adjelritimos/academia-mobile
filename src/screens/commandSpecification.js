import { View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import commandSpecificationStyles from "../styles/commandSpecification"

const CommandSpecification = ({ route }) => {

    const { command } = route.params

    return (
        <View style={commandSpecificationStyles.container}>
            <View style={commandSpecificationStyles.d_flex}>
                <Text style={commandSpecificationStyles.title}>{command.commad}</Text>
                <TouchableOpacity style={commandSpecificationStyles.btn}>
                    <Icon name="volume-up" size={30} color="#0dcaf0" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CommandSpecification