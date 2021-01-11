import { formatRelative } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatToHuman = (date) => {
  if (!date) return ''
  return formatRelative(date, new Date(), { locale: es })
}
