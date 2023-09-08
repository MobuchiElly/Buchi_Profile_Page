const daysArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const weekDay = document.getElementById('weekDay');
const utcTime = document.getElementById('utcTime');

const newDate = new Date();
const utcDate = newDate.toISOString();
const utcMilliseconds = Date.parse(utcDate);
let dayOfWeek = newDate.getDay();
dayOfWeek = daysArr[dayOfWeek];



window.addEventListener('DOMContentLoaded', () => {
    weekDay.textContent = `${dayOfWeek}`; 
    utcTime.textContent = `${utcMilliseconds}`;  
})

