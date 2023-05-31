/*=============== CLOCK ===============*/
const hour = document.getElementById("clock-hour"),
    minute = document.getElementById("clock-minute");

const clock = () => {
    // We get the Date object
    const date = new Date();

    // We get the hours and minutes
    // (current time) / 12(hours) * 360(deg circle)
    const hh = (date.getHours() / 12) * 360;
    // (Current minute) / 60(minutes) * 360(deg circle)
    const mm = (date.getMinutes() / 60) * 360;

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
};
setInterval(clock, 1000); // (Updates every 1s) 1000 = 1s

/*=============== TIME AND DATE TEXT ===============*/
const dateDayWeek = document.getElementById("date-day-week"),
    dateMonth = document.getElementById("date-month"),
    dateDay = document.getElementById("date-day"),
    dateYear = document.getElementById("date-year"),
    textHour = document.getElementById("text-hour"),
    textMinutes = document.getElementById("text-minutes"),
    textAmPm = document.getElementById("text-ampm");

const clockText = () => {};
setInterval(clockText, 1000); // (Updates every 1s) 1000 = 1s
