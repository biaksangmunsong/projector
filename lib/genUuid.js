module.exports = length => {
    
    const string = "1aAbB2cCd3DeEf4FgG5hHi6Ij7JkK8lL9mM0nNo1Op2PqQ3rR4sSt5TuUvV6wWx7XyYz8Z90"
    let uuid = ""

    for (let i = 0; i < length; i++){
        const randomNumber = Math.floor(Math.random() * (string.length-1))
        uuid += string[randomNumber]
    }

    return uuid

}