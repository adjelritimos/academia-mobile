import { StyleSheet } from "react-native"

const gameWinStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#28a745",
        textAlign: "center",
        marginBottom: 10,
    },
    message: {
        fontSize: 18,
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#0dcaf0",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
})

export default gameWinStyles
