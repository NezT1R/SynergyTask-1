// Кейс-задача № 2

//fixme ➔	Напишите программу, которая запрашивает у пользователя последовательно день его рождения, месяц и год;
let user = {
    birthDay: {
        day: null,
        month: null,
        year: null
    }
}

user.birthDay.day = +prompt("Напиши день, когда родится (1-31)")
user.birthDay.month = +prompt("Напиши месяц твоего рождения (1-12)")
user.birthDay.year = +prompt("Напиши год твоего рождения")

//fixme ➔	Напишите функцию, которая определяет какому дню недели соответствует эта дата?

// const getDayOfWeek = (day, month, year) => {
//     const date = new Date(year, month-1, day)
//
//     const days = [
//         'Воскресенье',
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота'
//     ]
//
//     const dayIndex = date.getDay();
//
//     return days[dayIndex]
// }

// console.log(getDayOfWeek(user.birthDay.day, user.birthDay.month, user.birthDay.year))

//fixme ➔	Напишите функцию, которая определяет - високосный это был год, или нет?

// const isLeapYear = (year) => {
//     if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
//         return "Год високосный"
//     }else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0){
//         return "Год невисокосный"
//     }else if (year % 4 === 0 && year % 100 !== 0){
//         return "Год високосный"
//     } else {
//         return "Год невисокосный"
//     }
// }

// ИЛИ

// const isLeapYear = (year) => {
//     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
// };

// console.log(isLeapYear(user.birthDay.year))
// console.log(isLeapYear(user.birthDay.year) ? "Год высокосный" : "Год невисокосный")

//fixme ➔	Напишите функцию, которая определяет сколько сейчас лет пользователю;

// const getUserAge = (year, month, day) => {
//     const today = new Date()
//     const currentYear = today.getFullYear()
//     const currentMonth = today.getMonth() + 1
//     const currentDay = today.getDate()
//
//     let age = currentYear - year
//
//     if (currentMonth < month || (currentMonth === month && currentDay < day)) {
//         age--
//     }
//
//     return age
// }
//
// console.log(getUserAge(user.birthDay.year, user.birthDay.month, user.birthDay.day))

//fixme ➔	Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг, где цифры прорисованы звёздочками (*), как на электронном табло.

// const digitPatterns = {
//     '0': [
//         ' ** ',
//         '*  *',
//         '*  *',
//         '*  *',
//         ' ** '
//     ],
//     '1': [
//         '  **',
//         ' * *',
//         '*  *',
//         '   *',
//         '   *'
//     ],
//     '2': [
//         '****',
//         '   *',
//         '****',
//         '*   ',
//         '****'
//     ],
//     '3': [
//         '****',
//         '   *',
//         '****',
//         '   *',
//         '****'
//     ],
//     '4': [
//         '*  *',
//         '*  *',
//         '****',
//         '   *',
//         '   *'
//     ],
//     '5': [
//         '****',
//         '*   ',
//         '****',
//         '   *',
//         '****'
//     ],
//     '6': [
//         '****',
//         '*   ',
//         '****',
//         '*  *',
//         '****'
//     ],
//     '7': [
//         '****',
//         '   *',
//         '   *',
//         '   *',
//         '   *'
//     ],
//     '8': [
//         '****',
//         '*  *',
//         '****',
//         '*  *',
//         '****'
//     ],
//     '9': [
//         '****',
//         '*  *',
//         '****',
//         '   *',
//         '****'
//     ]
// };
//
// function printDateAsStars(day, month, year) {
//     const dateStr = `${String(day).padStart(2, "0")} ${String(month).padStart(2, "0")} ${year}`
//     const outputLines = ['', '', '', '', ''];
//
//     for (const char of dateStr) {
//         if (char === ' ') {
//             for (let i = 0; i < 5; i++) {
//                 outputLines[i] += '    ';
//             }
//         } else if (digitPatterns[char]) {
//             for (let i = 0; i < 5; i++) {
//                 outputLines[i] += digitPatterns[char][i] + ' ';
//             }
//         }
//     }
//     for (const line of outputLines) {
//         console.log(line);
//     }
// }
// console.log(printDateAsStars(user.birthDay.day, user.birthDay.month, user.birthDay.year))