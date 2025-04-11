import React, { createContext, useState, useEffect } from 'react'
import getModules from '../functions/others/database/getModules'
import getLessons from '../functions/others/database/getAllLessons'
import openDatabase from '../functions/others/database/openDataBase'
import getLemmas from '../functions/others/database/getLemmas'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [modules, setModules] = useState(null)
    const [lemmas, setLemmas] = useState(null)
    const [lessons, setLessons] = useState(null)
    const [my_database, setMyDataBase] = useState(null)

    const openMyDataBase = async () => {
        const db = await openDatabase()
        setMyDataBase(db)
    }

    const loadDatas = async () => {
        try {

            await getLessons(my_database, setLessons)
            await getLemmas(my_database, setLemmas)
            await getModules(my_database, setModules)
           
        } catch (error) {
            console.error('Erro ao buscar módulos:', error)
        }
    }

    useEffect(() => {
       openMyDataBase()
    }, [])

    useEffect(() => {
        loadDatas()
    }, [my_database])


    return (
        <AuthContext.Provider value={{ modules, setModules, lessons, setLessons, lemmas, setLemmas}}>
            { children }
        </AuthContext.Provider>
    )
}
