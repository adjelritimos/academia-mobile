import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getModules from '../functions/others/database/getModules'
import getLessons from '../functions/others/database/getAllLessons'
import openDatabase from '../functions/others/database/openDataBase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [modules, setModules] = useState(null)
    const [lessons, setLessons] = useState(null)
    const [my_database, setMyDataBase] = useState(null)

    const openMyDataBase = async () => {
        const db = await openDatabase()
        setMyDataBase(db)
    }

    const fetchModules = async () => {
        try {

            await AsyncStorage.removeItem('modules')
            const storedModules = await AsyncStorage.getItem('modules')

            if (storedModules) {
                setModules(JSON.parse(storedModules))
            } else {

                const moduless = await getModules(my_database)

                if (moduless) {
                    setModules(moduless)
                    await AsyncStorage.setItem('modules', JSON.stringify(moduless))
                }
            }
        } catch (error) {
            console.error('Erro ao buscar módulos:', error)
        }
    }

    const fetchLessons = async () => {
        try {
            
            await AsyncStorage.removeItem('lessons')

            const storedLessons = await AsyncStorage.getItem('lessons')

            if (storedLessons) {
                setLessons(JSON.parse(storedLessons))
            } else {

                const lessonss = await getLessons(my_database)
        
                if (lessonss) {
                    setLessons(lessonss)
                    await AsyncStorage.setItem('lessonss', JSON.stringify(lessonss))
                }
            }
        } catch (error) {
            console.error('Erro ao buscar licoes:', error)
        }
    }

    useEffect(() => {
       openMyDataBase()
    }, [])

    useEffect(() => {
        fetchModules()
        fetchLessons()
    }, [my_database])


    return (
        <AuthContext.Provider value={{ modules, setModules, lessons, setLessons }}>
            {children}
        </AuthContext.Provider>
    )
}
