const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6b3721f31355172a71e1fada57802e76&query=' + latitude + ',' + longitude + '&units=f' 
    
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
                callback('Unable to find location', undefined)
        } else {
              callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. But it feels like ' + body.current.feelslike + ' degress out.' + ' Current humidity is ' + body.current.humidity + '%')
        } 
    })
}

module.exports = forecast