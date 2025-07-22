import AsyncStorage from "@react-native-async-storage/async-storage"

const getUser = async(setUser)=> {

    try {
        const user = await AsyncStorage.getItem('user')

        if(user) {

            const _user = JSON.parse(user)

            setUser(_user)

        }else {

            setUser(null)

        }

    } catch (error) {

        setUser(null)
        
    }
}

export default getUser