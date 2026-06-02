'use client'

import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

/**
 * Booking button that opens the Cal.com scheduler in an inline popup.
 *
 * The visitor picks a day/time without leaving the site; the event lands on
 * both calendars and Cal.com handles the before/after follow-up emails
 * (configured in the Cal.com dashboard, not here).
 *
 * Set your booking link via NEXT_PUBLIC_CALCOM_LINK in .env.local, e.g.
 *   NEXT_PUBLIC_CALCOM_LINK=austin-semple/20min
 */

const CAL_NAMESPACE = 'book-call'
const CAL_LINK = process.env.NEXT_PUBLIC_CALCOM_LINK || 'austin-semple-5wdhb1/20min'

interface BookCallButtonProps {
  className?: string
  children: React.ReactNode
}

export default function BookCallButton({ className, children }: BookCallButtonProps) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  )
}
