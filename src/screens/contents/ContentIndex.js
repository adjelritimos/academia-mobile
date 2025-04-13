import { View, Text, TouchableOpacity, FlatList, BackHandler } from 'react-native'
import contentIndexStyles from '../../styles/contentIndex'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/app_context'
import checkIsComplete from '../../functions/others/database/checkIsComplete'

const ContentIndex = ({ navigation }) => {
    
    const { modules } = useContext(AuthContext)
    const [completionStatus, setCompletionStatus] = useState({})


    const loadCompletionStatus = async () => {
        const status = {}
        for (const module of modules) {
            status[module.id] = await checkIsComplete(module.id)
        }

        setCompletionStatus(status)
    }

    useEffect(() => {
        loadCompletionStatus()
    }, [modules])

    return (
        <View style={contentIndexStyles.container}>

            <Text style={contentIndexStyles.title}>Conteúdos</Text>
            <View style={contentIndexStyles.line} />

            <FlatList
                style={contentIndexStyles.list}
                data={modules}
                renderItem={({ item }) => (
                    <TouchableOpacity disabled={!completionStatus[item.id]} style={[contentIndexStyles.content, !completionStatus[item.id] && contentIndexStyles.disabledContent]} onPress={() => navigation.navigate('Lessons', { moduleId: item.id })}>
                        <Text style={contentIndexStyles.contentTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ContentIndex