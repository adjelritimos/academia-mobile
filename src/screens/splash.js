import { View, Image } from "react-native"
import splashStyle from "../styles/splash"
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/app_context"

const Splash = ({ navigation }) => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (user)
                navigation.navigate('Home')
            else
                navigation.navigate('Login')
        }, 3000);

        return () => clearTimeout(timer)
    }, [user, navigation])

    return (
        <View style={splashStyle.container}>
            <Image
                source={require('./../../assets/logo.png')}
                style={splashStyle.image}
            />
        </View>
    );
};

export default Splash;
