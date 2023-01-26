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

const MILLISECONDS = {
  SECONDS: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
  MONTH: 1000 * 60 * 60 * 24 * 30,
  YEAR: 1000 * 60 * 60 * 24 * 30 * 12,
}

const getMonthYear = (date) => {
  if (date === undefined || date === null) return 'Present'
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

const dateDifferenceInMonths = (startDate, endDate) => {
  if (startDate === null || startDate === undefined) return 0

  // provide end date as now
  if (endDate === null || endDate === undefined) {
    endDate = new Date()
  }

  return (
    1 +
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  )
}

const getDateRange = (startDate, endDate) => {
  return `(${dateDifferenceInMonths(startDate, endDate)} Mos) ${getMonthYear(
    startDate
  )} - ${getMonthYear(endDate)}`
}

// show date in the form of "4 days ago", "2 minutes ago"
const getRelativeDate = (date) => {
  if (date === undefined || date === null) return ''

  // get difference in milliseconds
  const delta = Date.now() - date.getTime()
  let value, units

  if (delta < MILLISECONDS.SECONDS) return 'now'

  // determine unit and value of delta
  if (delta < MILLISECONDS.MINUTE) {
    value = delta / MILLISECONDS.SECONDS
    units = 'second'
  } else if (delta < MILLISECONDS.HOUR) {
    value = delta / MILLISECONDS.MINUTE
    units = 'minute'
  } else if (delta < MILLISECONDS.DAY) {
    value = delta / MILLISECONDS.HOUR
    units = 'hour'
  } else if (delta < MILLISECONDS.MONTH) {
    value = delta / MILLISECONDS.DAY
    units = 'day'
  } else if (delta < MILLISECONDS.YEAR) {
    value = delta / MILLISECONDS.MONTH
    units = 'month'
  } else {
    value = delta / MILLISECONDS.YEAR
    units = 'year'
  }

  // round down value
  value = Math.floor(value)

  // format result
  return `${value} ${units}${value === 1 ? '' : 's'} ago`
}

export { getDateRange, getRelativeDate, MILLISECONDS }
