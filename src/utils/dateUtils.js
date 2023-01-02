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

export const MS_PER_SEC = 1000
export const MS_PER_MIN = MS_PER_SEC * 60
export const MS_PER_HOUR = MS_PER_MIN * 60
export const MS_PER_DAY = MS_PER_HOUR * 24
export const MS_PER_MONTH = MS_PER_DAY * 30
export const MS_PER_YEAR = MS_PER_MONTH * 12

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
export const getRelativeDate = (date) => {
  const delta = Date.now() - date.getTime()
  let value, units

  if (delta < MS_PER_SEC)
    return 'now'

  // determine unit and value of delta
  if (delta < MS_PER_MIN) {
    value = delta / MS_PER_SEC
    units = 'second'
  } else if (delta < MS_PER_HOUR) {
    value = delta / MS_PER_MIN
    units = 'minute'
  } else if (delta < MS_PER_DAY) {
    value = delta / MS_PER_HOUR
    units = 'hour'
  } else if (delta < MS_PER_MONTH) {
    value = delta / MS_PER_DAY
    units = 'day'
  } else if (delta < MS_PER_YEAR) {
    value = delta / MS_PER_MONTH
    units = 'month'
  } else {
    value = delta / MS_PER_YEAR
    units = 'year'
  }

  // round down value
  value = Math.floor(value)

  // format result
  return `${value} ${units}${value === 1 ? '' : 's'} ago`
}
