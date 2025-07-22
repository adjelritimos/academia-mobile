import React, { createContext, useState, useEffect } from 'react'
import getModules from '../functions/others/load_data/getModules'
import getLemmas from '../functions/others/load_data/getlemmas'
import getLessons from '../functions/others/load_data/getLessons'
import getCommands from '../functions/others/load_data/getCommands'
import getQuestions from '../functions/others/load_data/getQuestions'
import getAnswers from '../functions/others/load_data/getAnswer'
import getPoints from '../functions/others/load_data/getPoints'
import getUser from '../functions/user/getUser'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [modules, setModules] = useState(null)
    const [lemmas, setLemmas] = useState(null)
    const [lessons, setLessons] = useState(null)
    const [commands, setCommands] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [answers, setAnswers] = useState(null)
    const [points, setPoints] = useState()
    const [user, setUser] = useState(null)


    const loadDatas = async () => {

        try {

            await getModules(setModules)
            await getLemmas(setLemmas)
            await getLessons(setLessons)
            await getCommands(setCommands)
            await getQuestions(setQuestions)
            await getAnswers(setAnswers)
            await getPoints(setPoints)
            await getUser(setUser)

        } catch (error) {
            console.error('Erro ao carregar os dados:', error)
        }
    }


    useEffect(() => {
        loadDatas()
    }, [])


    return (
        <AuthContext.Provider value={{ modules, setModules, lemmas, setLemmas, commands, setCommands, lessons, setLessons, questions, setQuestions, answers, setAnswers, points, setPoints, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
