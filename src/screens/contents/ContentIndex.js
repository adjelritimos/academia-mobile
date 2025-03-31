import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import contentIndexStyles from '../../styles/contentIndex'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const ContentIndex = ({ navigation }) => {

    const { modules } = useContext(AuthContext)
    const contents = modules
    return (
        <View style={contentIndexStyles.container}>
            <Text style={contentIndexStyles.title}>Conteúdos</Text>
            <View style={contentIndexStyles.line} />
            <FlatList
                style={contentIndexStyles.list}
                data={contents}
                renderItem={({ item }) => (
                    <TouchableOpacity style={contentIndexStyles.content} onPress={() => navigation.navigate('Lessons', { moduleId: item.id })}>
                        <Text style={contentIndexStyles.contentTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ContentIndex
