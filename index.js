// Dom query selector
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const timeInterval = document.querySelector('#timeInterval')

// hours function
const pageHour = () => {
  let clockHours = new Date().getHours()
  clockHours < 10
    ? (hours.innerHTML = `0${clockHours}`)
    : 10 <= clockHours <= 12
    ? (hours.innerHTML = clockHours)
    : (hours.innerHTML = clockHours - 12)
}

// minutes function
const pageMinute = () => {
  let clockMinutes = new Date().getMinutes()
  clockMinutes < 10
    ? (minutes.innerHTML = `0${clockMinutes}`)
    : (minutes.innerHTML = clockMinutes)
}
//seconds function
const pageSeconds = () => {
  let clockSeconds = new Date().getSeconds()
  clockSeconds < 10
    ? (seconds.innerHTML = `0${clockSeconds}`)
    : (seconds.innerHTML = clockSeconds)
}
//timeInterval function
const PageInterval = () => {
  clockHours < 12
    ? (timeInterval.innerHTML = AM)
    : (timeInterval.innerHTML = PM)
}
// interval function
setInterval(() => {
  pageSeconds()
  pageMinute()
  pageHour()
  pageInterval()
}, 1000)
