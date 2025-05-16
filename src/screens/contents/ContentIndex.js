import { View, Text, TouchableOpacity, FlatList, BackHandler } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import contentIndexStyles from '../../styles/contentIndex'
import { useContext, useState, useCallback } from 'react'
import { AuthContext } from '../../contexts/app_context'
import checkIsComplete from '../../functions/others/database/checkIsComplete'

const ContentIndex = ({ navigation }) => {

    const { modules } = useContext(AuthContext)
    const [completionStatus, setCompletionStatus] = useState({})


    const loadCompletionStatus = async () => {
        const status = {}
        for (const module of modules) {
            status[modules.indexOf(module)] = await checkIsComplete(modules.indexOf(module), modules)
        }

        setCompletionStatus(status)
    }

    useFocusEffect(
        useCallback(() => {
            if (modules) {
                loadCompletionStatus()
            }

            return () => {
                // Cleanup, se necessário
            }
        }, [modules])
    )



    return (
        <View style={contentIndexStyles.container}>

            <Text style={contentIndexStyles.title}>Conteúdos</Text>
            <View style={contentIndexStyles.line} />

            <FlatList style={contentIndexStyles.list} data={modules} renderItem={({ item }) => (
                <TouchableOpacity disabled={!completionStatus[modules.indexOf(item)]} style={[contentIndexStyles.content, !completionStatus[modules.indexOf(item)] && contentIndexStyles.disabledContent]} onPress={() => navigation.navigate('Lessons', { moduleId: item.id })}>
                    <Text style={contentIndexStyles.contentTitle}>{item.name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default ContentIndex