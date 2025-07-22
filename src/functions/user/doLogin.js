import guest_api from "../../server/guest_api"


const doLogin = async (username, password, setErro, navigation, setUser, setLoading) => {

    setLoading(true)

    try {
        const login = await guest_api.post('/login', { username, password })
        if (login.status === 200) {
            navigation.replace('Home')
            setUser({ username, password })
            setErro('')
        }

        setLoading(false)

    } catch (error) {

        if (error.status === 401 || error.status === 404)
            setErro('Nome do utilizador ou senha incorreta')
        else
            setErro('Erro no login')

        setLoading(false)
    }
}

export default doLogin