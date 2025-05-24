import api_qr from "../../server/api_qr"

const checkQrCode = async (qrData) => {

    if (qrData) {

        try {
            const response_word = await api_qr.get('/check/word')

            if (response_word.status === 200) {
                const expirationDate = new Date(qrData.date)
                if (expirationDate > new Date() && qrData.word === response_word.data) {
                    return true
                } else {
                    return false
                }
            }
            else {
                return false
            }
        } catch (error) {
            console.log("Erro ao analisar os dados do QR Code:", error)
            return false
        }

    } else {

        return false
    }
}

export default checkQrCode