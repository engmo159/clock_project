// Dom query selector
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const timeInterval = document.querySelector('#timeInterval')
// variables
let time = new Date()
let clockHours = time.getHours()
let clockMinutes = time.getMinutes()
let clockSeconds = time.getSeconds()
// hours
const pageHour = () => {
  clockHours < 10
    ? (hours.innerHTML = `0${clockHours}`)
    : 10 <= clockHours <= 12
    ? (hours.innerHTML = clockHours)
    : (hours.innerHTML = clockHours - 12)
}

// minutes
const pageMinute = () => {
  clockMinutes < 10
    ? (minutes.innerHTML = `0${clockMinutes}`)
    : (minutes.innerHTML = clockMinutes)
}
//seconds
const pageSeconds = () => {
  clockSeconds < 10
    ? (seconds.innerHTML = `0${clockSeconds}`)
    : (seconds.innerHTML = clockSeconds)
}
//timeInterval
const PageInterval = () => {
  clockHours < 12
    ? (timeInterval.innerHTML = AM)
    : (timeInterval.innerHTML = PM)
}
setInterval(() => {
  pageSeconds()
}, 1000)
