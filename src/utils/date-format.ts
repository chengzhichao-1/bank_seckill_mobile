import dayjs from "dayjs"
import tz from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(tz)

const DATE_TIME_FORMAT = "YYYY-MM-DD"

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}

export function formatTime(
  timeStamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs(timeStamp).tz("PRC").format(format)
}
