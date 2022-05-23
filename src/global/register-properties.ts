import { App } from "vue"
import { formatUtcString, formatTime } from "@/utils/date-format"

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatUtcString(value: string, format?: string) {
      return formatUtcString(value, format)
    },
    formatTime(value: number, format?: string) {
      return formatTime(value, format)
    }
  }
}
