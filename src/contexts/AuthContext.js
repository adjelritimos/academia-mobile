import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getModules from '../functions/others/database/getModules'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [modules, setModules] = useState(null)

    const fetchModules = async () => {
        try {

            await AsyncStorage.removeItem('modules')
            await AsyncStorage.removeItem('globalStyles')
            const storedModules = await AsyncStorage.getItem('modules')
            
            if (storedModules) {
                setModules(JSON.parse(storedModules))
            } else {

                const moduless = await getModules()
                
                if (moduless) {
                    setModules(moduless)
                    await AsyncStorage.setItem('modules', JSON.stringify(moduless))
                }
            }
        } catch (error) {
            console.error('Erro ao buscar módulos:', error)
        }
    }

    useEffect(() => {
        fetchModules()
    }, [])


    return (
        <AuthContext.Provider value={{ modules, setModules }}>
            {children}
        </AuthContext.Provider>
    )
}
