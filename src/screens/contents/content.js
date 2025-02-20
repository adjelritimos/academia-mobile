import { View, Text } from 'react-native'

const Content = ({ route }) => {
    const { id } = route.params
    return (
        <View>
            <Text>Conteúdo {id}</Text>
        </View>
    )
}

export default Content

