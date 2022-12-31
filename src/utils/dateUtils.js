const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const getMonthYear = (date) => {
  if (date === undefined || date === null)
    return 'Present'
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

const dateDifferenceInMonths = (startDate, endDate) => {
  if (startDate === null || startDate === undefined)
    return 0

  // provide end date as now
  if (endDate === null || endDate === undefined) {
    endDate = new Date()
  }

  return 1 + endDate.getMonth() - startDate.getMonth() + 12 *
    (endDate.getFullYear() - startDate.getFullYear())
}

export const getDateRange = (startDate, endDate) => {
  return `(${dateDifferenceInMonths(startDate, endDate)} Mos) ${getMonthYear(
    startDate)} - ${getMonthYear(endDate)}`
}

// show date in the form of "4 days ago", "2 minutes ago"
export const getGHReadableDate = (ghDate) => {
  const date = new Date(ghDate)
  const now = new Date()
  let result

  if (date.getFullYear() === now.getFullYear() - 1) {
    result = '1 year ago'
  } else if (date.getFullYear() < now.getFullYear()) {
    result = `${now.getFullYear() - date.getFullYear()} years go`
  } else if (date.getMonth() === now.getMonth() - 1) {
    result = '1 month ago'
  } else if (date.getMonth() < now.getMonth()) {
    result = `${now.getMonth() - date.getMonth()} months ago`
  } else if (date.getDay() === now.getDay() - 1) {
    result = '1 day ago'
  } else if (date.getDay() < now.getDay()) {
    result = `${now.getDay() - date.getDay()} days ago`
  } else if (date.getHours() === now.getHours() - 1) {
    result = '1 hour ago'
  } else if (date.getHours() < now.getHours()) {
    result = `${now.getHours() - date.getHours()} hours ago`
  } else if (date.getMinutes() === now.getMinutes() - 1) {
    result = '1 minute ago'
  } else if (date.getMinutes() < now.getMinutes()) {
    result = `${now.getMinutes() - date.getMinutes()} minutes ago`
  } else if (date.getSeconds() === now.getSeconds() - 1) {
    result = 'now'
  } else if (date.getSeconds() < now.getSeconds()) {
    result = `${now.getSeconds() - date.getSeconds()} seconds ago`
  }

  return result
}
