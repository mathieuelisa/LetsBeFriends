class User {

    constructor (obj = {}) {
        for (const propName in obj) {
            this[propName] = obj[propName]
        }
    }

   

}

module.exports = User;