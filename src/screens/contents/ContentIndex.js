import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import getContents from '../../functions/contents/getContents'
import contentIndexStyles from '../../styles/contentIndex'

const ContentIndex = ({ navigation }) => {
    const contents = getContents()
    return (
        <View style={contentIndexStyles.container}>
            <Text style={contentIndexStyles.title}>Conteúdos</Text>
            <View style={contentIndexStyles.line} />
            <FlatList
                style={contentIndexStyles.list}
                data={contents}
                renderItem={({ item }) => (
                    <TouchableOpacity style={contentIndexStyles.content} onPress={() => navigation.navigate('Content', { id: item.id })}>
                        <Text style={contentIndexStyles.contentTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ContentIndex
