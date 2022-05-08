import { format, formatISO } from 'date-fns'
import { de } from 'date-fns/locale'

type Props = {
  date: Date
}
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, 'd. LLLL yyyy', { locale: de })}</span>
      <style jsx>
        {`
          span {
            color: var(--color-cta);
          }
        `}
      </style>
    </time>
  )
}
