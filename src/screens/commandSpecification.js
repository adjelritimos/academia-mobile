import { View , Text } from "react-native"
import commandSpecificationStyles from "../styles/commandSpecification"

const CommandSpecification= ({route})=>{

    const { command } = route.params

    return(
        <View style={commandSpecificationStyles.container}>
            <Text style={commandSpecificationStyles.title}>{command.commad}</Text>
        </View>
    )
}
export default CommandSpecification