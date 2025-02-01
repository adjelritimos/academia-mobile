import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native"
import commandStyles from "../styles/command"
import getCommands from "../functions/command/getCommands"
import filterCommand from "../functions/command/filterCommand"
import { useState } from "react"

const CommandVoice = ( { navigation } ) => {

    const data = getCommands()
    const [commands, setCommands] = useState(getCommands())

    return (
        <View style={commandStyles.container}>
            <TextInput onChange={(newText)=> filterCommand(newText.nativeEvent.text, data, setCommands) } style={commandStyles.input} placeholder="busque o comando" />
            <View style={commandStyles.list}>
                <FlatList style={{width: '100%'}}
                    data={commands}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={ ()=> navigation.navigate('CommandSpecification', {command: item})} style={commandStyles.item}>
                            <Text style={commandStyles.itemText}>{item.commad}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default CommandVoice