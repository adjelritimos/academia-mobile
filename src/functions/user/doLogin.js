import guest_api from "../../server/guest_api"
import setUser from "./setUser"


const validateInput = (name, password) => {

    if (!name || name.trim() === '') {

        return { valid: false, message: "O nome inválido" }
        
    }

    if (!password || password.trim() === '') {

        return { valid: false, message: "A senha invalida" }

    }

    return { valid: true, message: "" }
}


const doLogin = async (username, password, setErro, navigation, setUsers, setLoading) => {

    setLoading(true)

    try {

        const { valid, message } = validateInput(username, password)

        if (!valid) {

            setErro(message)

            setLoading(false)

            return
        }

        const login = await guest_api.post('/login', { username, password })

        if (login.status === 200) {

            navigation.replace('Home')

            const { user, token } = login.data

            const _user = {
                user,
                token
            }

            setUser(_user, setUsers)
            
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