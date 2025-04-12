import React, { createContext, useState, useEffect } from 'react'
import openDatabase from '../functions/others/database/openDataBase'
import fetchLessons from '../functions/others/load_data/fetchLessons'
import fetchLemmas from '../functions/others/load_data/fetchLemma'
import fetchModules from '../functions/others/load_data/fetchModules'
import fetchPoints from '../functions/others/load_data/fetchPoints'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [modules, setModules] = useState(null)
    const [lemmas, setLemmas] = useState(null)
    const [lessons, setLessons] = useState(null)
    const [points, setPoints] = useState()
    const [my_database, setMyDataBase] = useState(null)

    const openMyDataBase = async () => {
        const db = await openDatabase()
        setMyDataBase(db)
    }

    const loadDatas = async () => {
        try {

            await fetchLessons(my_database, setLessons)
            await fetchLemmas(my_database, setLemmas)
            await fetchModules(my_database, setModules)
            await fetchPoints(setPoints)
           
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
        <AuthContext.Provider value={{ modules, setModules, lessons, setLessons, lemmas, setLemmas, points, setPoints}}>
            { children }
        </AuthContext.Provider>
    )
}
