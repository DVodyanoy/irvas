const timer = (id, deadline) => {
  const addZero = num => {
    if (num <= 9) return '0' + num;

    return num;
  }

    const getTimeRemaining = endTime => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor(t/1000 % 60),
              minutes = Math.floor(t/1000/60 % 60),
              hours = Math.floor(t/1000/60/60 % 24),
              days = Math.floor(t/1000/60/60/24);

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds
        }
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
          const time = getTimeRemaining(endTime);

          days.textContent = addZero(time.days);
          hours.textContent = addZero(time.hours);
          minutes.textContent = addZero(time.minutes);
          seconds.textContent = addZero(time.seconds);

          if (time.total <= 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(timeInterval);
          }
        }
    };

    setClock(id, deadline);
};

export default timer;