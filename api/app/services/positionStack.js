const fetch = require('node-fetch')

const adressTranslate = async(adress)=>{

    let dataToReturn = {
        latitude : '',
        longitude : ''
    }
    const key = 'db2ddc86090e275a86436590ff5f65bb'
    const response  = await fetch(`http://api.positionstack.com/v1/forward?access_key=${key}&query=${adress}`)
    const data = await response.json()
    dataToReturn.longitude = data.data[0].longitude
    dataToReturn.latitude = data.data[0].latitude
    return dataToReturn
}




module.exports = adressTranslate

