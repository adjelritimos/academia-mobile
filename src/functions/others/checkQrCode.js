const checkQrCode = (qrData) => {

    if (qrData) {
        
        try {

            const { expiresAt } = JSON.parse(qrData)
            const expirationDate = new Date(expiresAt)

            if (expirationDate > new Date()) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error("Erro ao analisar os dados do QR Code:", error)
            return false
        }
    } else {

        return false
    }
}

export default checkQrCode