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
