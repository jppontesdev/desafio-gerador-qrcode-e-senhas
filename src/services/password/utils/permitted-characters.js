async function permittedCharacteres() {
    let permitted = []
    if (process.env.UPPPERCASELETTERS === "true") 
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    if (process.env.LOWERCASELETTERS === "true") 
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")
    
    if (process.env.NUMBERS === "true") 
        permitted.push(... "0123456789")
    
    if (process.env.SPECIAL_CHARACTERES === "true") 
        permitted.push(... "@~^&%$#*!")

    return permitted;
    
}

export default permittedCharacteres