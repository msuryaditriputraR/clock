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
    dateDay = document.getElementById("date-day"),
    dateMonth = document.getElementById("date-month"),
    dateYear = document.getElementById("date-year"),
    textHour = document.getElementById("text-hour"),
    textMinutes = document.getElementById("text-minute"),
    textAmPm = document.getElementById("text-ampm");

const clockText = () => {
    // We get the Date object
    const date = new Date();

    // We get the time and date
    const dayWeek = date.getDay(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    let amPm = "",
        hh = date.getHours(),
        mm = date.getMinutes();

    // We get the days of the week and the months. (First day of the week Sunday)
    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    // We add the corresponding dates
    dateDayWeek.innerText = week[dayWeek];
    dateDay.innerText = day;
    dateMonth.innerText = months[month];
    dateYear.innerText = year;

    // If hours is greater than 12 (afternoon), we subtract -12, so that it starts at 1 (afternoon)
    if (hh > 12) {
        hh -= 12;
        amPm = "PM";
    } else {
        amPm = "AM";
    }

    // When it is 0 hours (early morning), we tell it to change to 12 hours
    if (hh == 0) hh = 12;

    // If hours is less than 10, add a 0 (01,02,03...09)
    if (hh < 10) hh = `0${hh}`;

    // If minutes is less than 10, add a 0 (01,02,03...09)
    if (mm < 10) mm = `0${mm}`;

    textHour.innerText = hh;
    textMinutes.innerText = mm;
    textAmPm.innerText = amPm;
};
setInterval(clockText, 1000); // (Updates every 1s) 1000 = 1s
