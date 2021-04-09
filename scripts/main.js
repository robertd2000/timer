const inputField = document.querySelector('#input'),
    btn = document.querySelector('#btn')


const getTime = (timeline) => {
    const currentTime = Date.parse(timeline) - Date.parse(new Date())

    if (currentTime <= 0 || isNaN(currentTime) ) return {
        total: currentTime,
        day: 'ДД',
        hour: 'ЧЧ',
        minute: 'ММ',
        second: 'СС',
        errorMessage: 'Введите корректную дату'
    }
    const day = Math.floor(currentTime / (1000 * 60 * 60 * 24)),
    hour = Math.floor(currentTime /( (1000 * 60 * 60)) % 24),
    minute = Math.floor(currentTime / ((1000 * 60)) % 60),
    second = Math.floor(currentTime / (1000) % 60)

    return {
        total: currentTime,
        day,
        hour,
        minute,
        second,
        errorMessage: null
    }
}

const getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

const setClock = (timeline) => {
    const days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        error = document.querySelector('#error')
        timeInterval = setInterval(updateClock, 1000);

    updateClock()
    function updateClock (){
        const time = getTime(timeline)
        days.innerHTML = getZero(time.day);
        hours.innerHTML = getZero(time.hour);
        minutes.innerHTML = getZero(time.minute);
        seconds.innerHTML = getZero(time.second);
        error.innerHTML = time.errorMessage

        if (time.total <= 0 || time.errorMessage != null) {
            clearInterval(timeInterval)
        }
    }
}


const getDeadLine = () => {
    const message = inputField.value
    return message
}

btn.addEventListener('click', () => {
    const time = getDeadLine()
    setClock(time)
})
