'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'poof-consent-v1'

// Inject the X (Twitter) ads pixel only after marketing consent is granted.
function loadXPixel() {
  if (typeof window === 'undefined') return
  const w = window as any
  if (w.twq) return
  /* eslint-disable */
  ;(function (e: any, t: any, n: any, s?: any, u?: any, a?: any) {
    e.twq ||
      ((s = e.twq =
        function () {
          s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
        }),
      (s.version = '1.1'),
      (s.queue = []),
      (u = t.createElement(n)),
      (u.async = !0),
      (u.src = 'https://static.ads-twitter.com/uwt.js'),
      (a = t.getElementsByTagName(n)[0]),
      a.parentNode.insertBefore(u, a))
  })(window, document, 'script')
  /* eslint-enable */
  if (typeof w.twq === 'function') w.twq('config', 'rc7s1')
}

function applyConsent(granted: boolean) {
  const w = window as any
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
    })
  }
  if (granted) loadXPixel()
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'granted') {
      applyConsent(true)
    } else if (stored === 'denied') {
      applyConsent(false)
    } else {
      setVisible(true)
    }
  }, [])

  const choose = (granted: boolean) => {
    localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
    applyConsent(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[70] px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl p-5 sm:flex sm:items-center sm:gap-6">
        <p className="text-sm text-slate-600 leading-relaxed">
          We use cookies for analytics and to measure ad performance. You can accept or decline
          non-essential tracking. See our{' '}
          <Link href="/privacy" className="text-gold-600 underline hover:text-gold-700">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-3 sm:mt-0 sm:flex-shrink-0">
          <button
            type="button"
            onClick={() => choose(false)}
            className="flex-1 sm:flex-none px-5 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-gold-600 text-white font-semibold text-sm hover:bg-gold-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
