'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

/**
 * Inline Cal.com scheduler for the demo page.
 *
 * Renders the booking calendar directly in the page (not a popup) so visitors
 * pick a time and answer the demo questions in one step. The event lands on
 * both calendars with a Google Meet link; before/after follow-up emails are
 * configured in the Cal.com dashboard.
 *
 * Custom intake questions (company, phone, business type, current challenges)
 * are added as "booking questions" on the demo event type inside Cal.com.
 *
 * Override the link with NEXT_PUBLIC_CALCOM_DEMO_LINK in .env if needed.
 */

const CAL_NAMESPACE = 'book-demo'
const CAL_LINK = process.env.NEXT_PUBLIC_CALCOM_DEMO_LINK || 'austin-semple-5wdhb1/demo'

export default function DemoBookingEmbed() {
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
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  )
}
