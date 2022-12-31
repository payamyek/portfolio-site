const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const getMonthYear = (date) => {
  if (date === undefined || date === null)
    return "Present"
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

const dateDifferenceInMonths = (startDate, endDate) => {
  if (startDate === null || startDate === undefined)
    return 0

  // provide end date as now
  if (endDate === null || endDate === undefined){
    endDate = new Date();
  }

  return 1 + endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear());
}

export const getDateRange = (startDate, endDate) => {
  return `(${dateDifferenceInMonths(startDate, endDate)} Mos) ${getMonthYear(startDate)} - ${getMonthYear(endDate)}`
}

const padDate = (num) => {
  if (num < 10)
    return `0${num}`
  return num
}

export const getGHReadableDate = (ghDate) => {
  const date = new Date(ghDate);

  console.log(date);

  let day = padDate(date.getDate());
  let month = padDate(date.getMonth() + 1);
  let hours = padDate(date.getHours());
  let minutes = padDate(date.getMinutes());

  return `${hours}:${minutes} ${day}/${month}/${date.getFullYear()}`
}
