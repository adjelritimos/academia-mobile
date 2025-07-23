import AsyncStorage from "@react-native-async-storage/async-storage"

const setUser = async (user, setUsers)=> {

    await AsyncStorage.setItem('user', JSON.stringify(user))

    setUsers(user)
    
}

export default setUser