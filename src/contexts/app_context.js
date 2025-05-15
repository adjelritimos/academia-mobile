import React, { createContext, useState, useEffect } from 'react'
import openDatabase from '../functions/others/database/openDataBase'
import fetchLessons from '../functions/others/load_data/getLessons'
import fetchLemmas from '../functions/others/load_data/getlemmas'
import fetchModules from '../functions/others/load_data/getModules'
import fetchPoints from '../functions/others/load_data/getPoints'

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
            console.error('Erro ao carregar os dados:', error)
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
