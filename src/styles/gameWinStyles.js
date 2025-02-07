import { StyleSheet } from "react-native"

const gameWinStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ECF2F5",
        padding: 20,
    },

    image: {
        width: 350,
        height: 350,
        resizeMode: "contain",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#0dcaf0",
        paddingVertical: 12,
        width: 350,
        height: 100,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
})

export default gameWinStyles
