'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import BookCallButton from '@/components/BookCallButton'

/**
 * The trades-page show: five acts that follow one after-hours call all the
 * way to the per-job P&L, plus the "running order" aside that ticks acts off.
 *
 * Converted from the standalone prototype (poof-the-phone-rings.html). Demo
 * shop, demo numbers. Renders no site chrome: it sits at the top of /trades,
 * with the pricing section (#pricing) below it.
 */

// ---------------------------------------------------------------------------
// Script
// ---------------------------------------------------------------------------

type Speaker = 'caller' | 'ai'
interface Line {
  who: Speaker
  label: string
  text: string
}

const CALL: Line[] = [
  { who: 'caller', label: 'Caller', text: 'Hi, uh, our AC just quit. It’s 97 in the house and we’ve got a baby here.' },
  { who: 'ai', label: 'Receptionist', text: 'I’m sorry, that’s a rough night. I can get someone out to you. What’s the address?' },
  { who: 'caller', label: 'Caller', text: '1420 Mesa Verde Drive.' },
  {
    who: 'ai',
    label: 'Receptionist',
    text: 'Got it. With no cooling in this heat, this is an emergency for us, so I’m not going to put you on tomorrow’s list. I have a technician, Marcus, who can be there between 10:15 and 11 tonight. Does that work?',
  },
  { who: 'caller', label: 'Caller', text: 'Yes. Please.' },
  {
    who: 'ai',
    label: 'Receptionist',
    text: 'You’re booked. Marcus will be there between 10:15 and 11. If anything changes, call this number back and you’ll reach me again.',
  },
]

const GAS: Line[] = [
  { who: 'caller', label: 'Caller', text: 'Hey, I think I smell gas near the furnace closet.' },
  {
    who: 'ai',
    label: 'Receptionist',
    text: 'Please leave the building right now and call 911 from outside. Don’t switch anything on or off on your way out. Once you’re out, someone from the shop is going to call you back on this number.',
  },
]

const PHOTOS = ['Before', 'After', 'Nameplate', 'Supply-house receipt'] as const
type PhotoName = (typeof PHOTOS)[number]
const RECEIPT: PhotoName = 'Supply-house receipt'

const LINE_DELAY_MS = 700

// ---------------------------------------------------------------------------
// Class strings (ledger-green tokens from tailwind.config.ts)
// ---------------------------------------------------------------------------

const btn =
  'inline-block rounded-lg px-[18px] py-[11px] text-[15px] font-semibold leading-normal disabled:cursor-not-allowed disabled:opacity-50'
const btnSm =
  'inline-block rounded-lg px-3 py-[7px] text-sm font-semibold leading-normal disabled:cursor-not-allowed disabled:opacity-50'
const press = 'bg-ledger-500 text-white'
const green = 'bg-ledger-600 text-white'
const quiet = 'bg-ledger-200 text-ledger-600'
const ghost = 'border-[1.5px] border-ink bg-transparent text-ink'

const actCls = 'border-t border-rule pb-6 pt-16 first:border-t-0 first:pt-9'
const eyebrow = 'mb-3 font-mono text-xs uppercase tracking-[0.08em] text-muted'
const display = 'font-display font-extrabold leading-none tracking-[-0.035em] text-balance'
const h2Cls = `${display} mb-3 text-[clamp(30px,4.2vw,44px)]`
const subCls = 'mb-6 max-w-[56ch] text-lg leading-[1.45] text-muted'
const strong = 'font-semibold text-ink'
const noteCls = 'mt-3.5 max-w-[60ch] text-sm text-muted'
const guardCls =
  'mt-[18px] max-w-[62ch] border border-dashed border-rule px-3.5 py-3 text-[13.5px] text-muted'
const labelCls = 'mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted'
const stampCls = 'text-[13.5px] text-ledger-600'
const panelCls = 'border-b border-rule px-4 py-3 last:border-b-0'
const jobTime = 'block font-mono text-[10.5px] text-muted'
const numCell = 'py-1.5 text-right font-mono tabular'
const toggleCls =
  "relative m-0 h-5 w-[34px] shrink-0 cursor-pointer appearance-none rounded-full bg-muted transition-colors before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-[left] before:content-[''] checked:bg-ledger-600 checked:before:left-4"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Plays a scripted transcript one line at a time; all at once under reduced motion. */
function usePlayback(lines: Line[], started: boolean, reduce: boolean) {
  const [shown, setShown] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!started || done) return
    if (reduce) {
      setShown(lines.length)
      setDone(true)
      return
    }
    const t = window.setTimeout(
      () => {
        if (shown < lines.length) setShown(shown + 1)
        else setDone(true)
      },
      shown === 0 ? 0 : LINE_DELAY_MS,
    )
    return () => window.clearTimeout(t)
  }, [started, done, shown, reduce, lines.length])

  return { shown, done }
}

function Transcript({ lines, shown }: { lines: Line[]; shown: number }) {
  return (
    <div className="relative mt-3 grid gap-2">
      {lines.slice(0, shown).map((l, i) => (
        <div
          key={i}
          className={`max-w-[88%] rounded-xl px-[13px] py-[9px] text-[15px] leading-[1.4] ${
            l.who === 'caller'
              ? 'justify-self-start rounded-bl-[3px] border border-rule bg-white'
              : 'justify-self-end rounded-br-[3px] bg-ledger-200 text-ledger-600'
          }`}
        >
          <span
            className={`mb-0.5 block font-mono text-[10.5px] uppercase tracking-[0.06em] ${
              l.who === 'caller' ? 'text-muted' : 'text-ledger-600 opacity-75'
            }`}
          >
            {l.label}
          </span>
          {l.text}
        </div>
      ))}
    </div>
  )
}

function JobCard({
  time,
  name,
  emergency = false,
  fresh = false,
  children,
}: {
  time: string
  name: string
  emergency?: boolean
  fresh?: boolean
  children?: React.ReactNode
}) {
  const edge = fresh
    ? 'border-l-ledger-500 outline outline-2 outline-ledger-200'
    : emergency
      ? 'border-l-audit'
      : 'border-l-muted'
  return (
    <div
      className={`mb-1.5 border border-rule border-l-[3px] bg-white px-[9px] py-[7px] text-[12.5px] leading-[1.35] ${edge}`}
    >
      <span className={jobTime}>{time}</span>
      {emergency && (
        <>
          <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-audit">Emergency</span>
          <br />
        </>
      )}
      {name}
      {children}
    </div>
  )
}

function Column({
  tech,
  meta,
  needs = false,
  children,
}: {
  tech: string
  meta: React.ReactNode
  needs?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-[150px] border border-rule bg-paper-2 p-2 ${needs ? 'border-dashed' : ''}`}>
      <h3 className="mb-2 flex justify-between gap-1.5 text-[13.5px] font-semibold">
        {tech} <span className="font-mono text-[11px] font-normal text-muted">{meta}</span>
      </h3>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// The show
// ---------------------------------------------------------------------------

export default function TradesShow() {
  // Motion preference, read on the client.
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Act 1
  const [answered, setAnswered] = useState(false)
  const call = usePlayback(CALL, answered, reduce)
  const [gasStarted, setGasStarted] = useState(false)
  const gas = usePlayback(GAS, gasStarted, reduce)

  // Act 2
  const [pick, setPick] = useState(true)
  const [pickTouched, setPickTouched] = useState(false)
  const [textOn, setTextOn] = useState(true)
  const [textTouched, setTextTouched] = useState(false)
  const [resent, setResent] = useState(false)
  const [texts, setTexts] = useState(1)

  // Act 3
  const [techOpen, setTechOpen] = useState(false)
  const [omw, setOmw] = useState(false)
  const [arr, setArr] = useState(false)
  const [attached, setAttached] = useState(false)
  const [part, setPart] = useState(false)
  const [photos, setPhotos] = useState<Record<PhotoName, boolean>>({
    Before: true,
    After: true,
    Nameplate: true,
    'Supply-house receipt': false,
  })
  const [photoTouched, setPhotoTouched] = useState<Partial<Record<PhotoName, boolean>>>({})
  const [custName, setCustName] = useState('')
  const [complete, setComplete] = useState(false)
  const [signedBy, setSignedBy] = useState('')
  // The job is created at Complete; its part line is fixed at that moment.
  const [plPart, setPlPart] = useState(false)

  // Act 4
  const [sent, setSent] = useState(false)
  const [sentWithReceipt, setSentWithReceipt] = useState(false)

  // Derived
  const landed = call.done
  const boardDone = pickTouched || textTouched || techOpen
  const photosOn = PHOTOS.filter((n) => photos[n])
  const photosOff = PHOTOS.filter((n) => !photos[n])
  const photoList =
    (photosOn.length ? photosOn.join(', ') + '.' : 'None.') +
    (photosOff.length ? ' ' + photosOff.join(', ') + ' held back.' : '')
  const invoicePhotos = 'Photos: ' + (photosOn.length ? photosOn.join(', ') + '.' : 'none.')
  const canComplete = arr && custName.trim().length > 0 && !complete

  const photoDesc = (n: PhotoName): string => {
    if (!photoTouched[n]) return n === RECEIPT ? 'Off by default. Shows what the shop paid.' : 'On invoice'
    if (!photos[n]) return 'Held back'
    return n === RECEIPT ? 'On invoice. The customer will see what the shop paid.' : 'On invoice'
  }

  // Handlers
  const onAnswer = () => {
    if (answered) return
    setAnswered(true)
  }
  const onPick = (checked: boolean) => {
    setPick(checked)
    setPickTouched(true)
  }
  const onText = (checked: boolean) => {
    setTextOn(checked)
    setTextTouched(true)
  }
  const onResend = () => {
    if (resent) return
    setResent(true)
    setTexts((n) => n + 1)
  }
  const onPhoto = (n: PhotoName, checked: boolean) => {
    setPhotos((p) => ({ ...p, [n]: checked }))
    setPhotoTouched((t) => ({ ...t, [n]: true }))
  }
  const onComplete = () => {
    if (complete || !canComplete) return
    setComplete(true)
    setSignedBy(custName.trim())
    setPlPart(part)
  }
  const onSend = () => {
    if (sent || !complete) return
    setSent(true)
    setSentWithReceipt(photos[RECEIPT])
  }

  const nguyen = pick ? (
    <JobCard time="Tomorrow 8:00 AM" name="Maintenance visit · Nguyen" />
  ) : (
    <JobCard time="Tomorrow 8:00 AM · window promised" name="Maintenance visit · Nguyen">
      <div className="mt-2 text-[12.5px] text-audit">
        Starts in 10 h 17 m. If nobody is assigned 30 minutes before start, the shop is paged.
      </div>
    </JobCard>
  )

  const order: Array<[string, boolean]> = [
    ['The call', call.done],
    ['The board', boardDone],
    ['The truck', complete],
    ['The office', sent],
    ['The job', complete],
  ]

  const trail: Array<[string, React.ReactNode]> = [
    ['9:40 PM', 'Call answered. Emergency by rule. Customer record created.'],
    ['9:42 PM', 'Booked 10:15 to 11:00 against real availability.'],
    ['9:43 PM', 'Marcus texted his job link.'],
    [omw ? '9:51 PM' : '—', 'On my way, recorded at the tap.'],
    [arr ? '10:12 PM' : '—', 'Arrived, recorded at the tap.'],
    [complete ? '10:29 PM' : '—', "Complete. Draft invoice in the office, in Marcus's words."],
    [sent ? '10:31 PM' : '—', 'Invoice sent, by a person.'],
    [complete ? '10:29 PM' : '—', <>On the Per-Job P&amp;L. Typed in twice: never.</>],
  ]

  return (
    <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-0 px-6 pb-24 min-[1000px]:grid-cols-[minmax(0,1fr)_220px] min-[1000px]:gap-12">
      {/* The only animation on the page: the ring on the incoming call. */}
      <style>{`
        @keyframes trades-show-ring { 0%, 100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.5); opacity: .5 } }
        .trades-show-ring { animation: trades-show-ring 1.1s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) { .trades-show-ring { animation: none } }
      `}</style>

      <div className="min-w-0 max-w-[780px]">
        {/* ------------------------------------------------------------ ACT 1 */}
        <section className={actCls} id="act1">
          <p className={eyebrow}>Step 1 · The call</p>
          <h1 className={`${display} mb-4 text-[clamp(42px,6.6vw,80px)]`}>The phone rings at 9:40pm.</h1>
          <p className={subCls}>
            Answer it, then follow the job to the P&amp;L. Count how many times somebody types it in.{' '}
            <b className={strong}>Zero.</b>
          </p>

          <div className="mb-[26px] flex flex-wrap items-center gap-x-[22px] gap-y-3.5 border border-rule bg-white px-[18px] py-3.5">
            <div className="font-display text-3xl font-extrabold tracking-[-0.04em]">
              (512) 555-<span className="text-ledger-600">0142</span>
            </div>
            <div className="max-w-[44ch] text-[13.5px] text-muted">
              Live, this is the demo shop&apos;s real line: call it and watch the job land on the board below. Here,
              the call is scripted.
            </div>
          </div>

          <div className="relative max-w-[520px]">
            <div className="relative flex items-center justify-between gap-3.5 rounded-xl bg-ink px-5 py-[18px] text-paper">
              <div className="text-[15px]">
                <b className="block text-[19px] font-semibold">
                  <span
                    aria-hidden="true"
                    className={`mr-2 inline-block h-3 w-3 rounded-full bg-ledger-400 ${answered ? '' : 'trades-show-ring'}`}
                  />
                  Incoming call
                </b>
                <span className="font-mono text-xs text-ledger-400">(512) 555-0187 · 9:40:12 PM · after hours</span>
              </div>
              <button type="button" className={`${btn} ${green}`} onClick={onAnswer} disabled={answered}>
                {answered ? 'Answered' : 'Answer'}
              </button>
            </div>

            <Transcript lines={CALL} shown={call.shown} />

            {call.done && (
              <>
                <div className="mt-3 border-l-[3px] border-audit bg-audit-100 px-3.5 py-2.5 text-sm">
                  <b className="font-semibold text-audit">
                    Rule fired: no cooling, outdoor temperature 97°F, above 95°F.
                  </b>{' '}
                  Emergency. This is a rule in code, not an instruction to a language model. The AI narrates the
                  call; it never decides whether something is an emergency.
                </div>
                <div className="mt-3 border-l-[3px] border-ledger-600 bg-ledger-200 px-3.5 py-2.5 text-sm">
                  <b className="font-semibold text-ledger-600">Booked: tonight 10:15 to 11:00, Marcus.</b> Real
                  availability: techs, their windows, time off, drive-time buffer. Marcus is tagged HVAC and had the
                  fewest jobs today. Tags are a preference, not a gate. The database refuses overlapping bookings, so
                  two calls at once cannot double-book him.
                </div>
                <div className="mt-3 border border-rule bg-white px-3.5 py-2.5 text-sm">
                  <b className="font-semibold">Customer record created on the first call:</b> D. Okafor, 1420 Mesa
                  Verde Dr, matched on the last ten digits of the number. One household, one customer.
                </div>
              </>
            )}
          </div>

          <div className="mt-[22px]">
            <button
              type="button"
              className={`${btnSm} ${ghost}`}
              onClick={() => setGasStarted(true)}
              disabled={gasStarted}
            >
              Play the other call: &quot;I smell gas&quot;
            </button>
            {gasStarted && (
              <div className="relative mt-3 max-w-[520px]">
                <Transcript lines={GAS} shown={gas.shown} />
                {gas.done && (
                  <div className="mt-3 border-l-[3px] border-audit bg-audit-100 px-3.5 py-2.5 text-sm">
                    <b className="font-semibold text-audit">Rule fired: gas smell.</b> Scripted response, immediate
                    escalation, a person paged now. Gas, CO, smoke, sparking, or an alarm never get a Tuesday
                    appointment.
                  </div>
                )}
              </div>
            )}
          </div>

          <div className={guardCls}>
            <b className={strong}>What it does not do.</b> No payment on the call, no cloned voice, no outbound
            sales calls. Installed by Poof as part of the service, not a switch the owner flips.
          </div>
        </section>

        {/* ------------------------------------------------------------ ACT 2 */}
        <section className={actCls} id="act2">
          <p className={eyebrow}>Step 2 · The board</p>
          <h2 className={h2Cls}>The job lands. You decide who goes, or you let it.</h2>
          <p className={subCls}>
            Two switches: whether the AI picks <b className={strong}>who</b> goes, and whether it{' '}
            <b className={strong}>texts</b> them. Ties go to the tech with the fewest jobs that day. No one quietly
            absorbs every call.
          </p>

          <div className="border border-rule bg-white px-4 pb-4 pt-3.5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <b className="font-semibold">Dispatch board · Tonight and tomorrow</b>
              <span className="font-mono text-xs text-muted tabular">{landed ? '9:43 PM' : '9:40 PM'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 min-[1000px]:grid-cols-4">
              <Column tech="Marcus" meta="2 today · HVAC">
                <JobCard time="2:00 PM · done" name="Tune-up · Patel" />
                <JobCard time="4:30 PM · done" name="No-cool · Brooks" />
                {landed && <JobCard time="10:15 to 11:00 PM · tonight" name="No-cool · Okafor" emergency fresh />}
              </Column>
              <Column tech="Dana" meta="4 today · HVAC, plumbing">
                <JobCard time="8:00 AM · done" name="Water heater · Kim" />
                <JobCard time="11:00 AM · done" name="Tune-up · Ortiz" />
                <JobCard time="1:30 PM · done" name="Leak · Chen" />
                <JobCard time="3:45 PM · done" name="No-cool · Alvarez" />
              </Column>
              <Column tech="Luis" meta="3 today · HVAC">
                <JobCard time="9:00 AM · done" name="Install · Rivera" />
                <JobCard time="2:30 PM · done" name="Tune-up · Shah" />
                {pick && nguyen}
              </Column>
              <Column tech="Needs a tech" meta={pick ? '0' : '1'} needs>
                {!pick && nguyen}
              </Column>
            </div>
          </div>

          <div className="mt-3.5 grid grid-cols-2 gap-3">
            <div className="border border-rule bg-white px-3.5 py-3 text-sm">
              <label className="flex cursor-pointer items-center gap-2.5 font-semibold">
                <input
                  type="checkbox"
                  className={toggleCls}
                  checked={pick}
                  onChange={(e) => onPick(e.target.checked)}
                />{' '}
                AI picks who goes
              </label>
              <div className="mt-2 text-[13.5px] text-muted">
                {!pickTouched ? (
                  'On. The 10:15 emergency went to Marcus: fewest jobs today, then fewest this week.'
                ) : pick ? (
                  'On. The 10:15 emergency went to Marcus: fewest jobs today, then fewest this week. Nguyen’s visit is back on Luis, who is free at 8.'
                ) : (
                  <>
                    Off. The 10:15 emergency stayed with Marcus.{' '}
                    <b className="font-semibold">Emergencies are always assigned, whatever the switches say.</b> The
                    switch applies to tomorrow’s 8:00 AM maintenance visit, which now sits under Needs a tech, with
                    its promised window kept.
                  </>
                )}
              </div>
            </div>
            <div className="border border-rule bg-white px-3.5 py-3 text-sm">
              <label className="flex cursor-pointer items-center gap-2.5 font-semibold">
                <input
                  type="checkbox"
                  className={toggleCls}
                  checked={textOn}
                  onChange={(e) => onText(e.target.checked)}
                />{' '}
                System texts the tech
              </label>
              <div className="mt-2 text-[13.5px] text-muted">
                {!textTouched
                  ? 'On. Marcus is texted his job with a link the moment it is assigned. A reschedule sends a fresh one.'
                  : textOn
                    ? 'On. The tech is texted the moment a job is assigned. A reschedule sends a fresh link and kills the old one.'
                    : 'Off. No text goes out on its own. A dispatcher hands the job off, or re-sends the link by hand from the board at any time.'}
              </div>
              {!textOn && (
                <div className="mt-2">
                  <button type="button" className={`${btnSm} ${quiet}`} onClick={onResend} disabled={resent}>
                    {resent ? 'Re-sent to Marcus, by hand' : 'Re-send by hand from the board'}
                  </button>
                </div>
              )}
            </div>
          </div>

          <p className={noteCls}>
            {landed
              ? 'The job landed under Marcus: fewest jobs today. Marcus was texted at 9:43 PM. Flip the switches and watch what moves and what does not.'
              : 'Answer the call in Step 1 and the job lands here.'}
          </p>
          <div className={guardCls}>
            <b className={strong}>What it does not do.</b> No route optimization.{' '}
            <b className={strong}>No customer-facing texts:</b> no confirmation, no reminder, no &quot;on the
            way.&quot; Only the technician gets texted.
          </div>
        </section>

        {/* ------------------------------------------------------------ ACT 3 */}
        <section className={actCls} id="act3">
          <p className={eyebrow}>Step 3 · The truck</p>
          <h2 className={h2Cls}>Your tech closes the job from a text.</h2>
          <p className={subCls}>
            No account, no password, no app. The link opens one job and dies on reschedule.{' '}
            <b className={strong}>That is the answer to &quot;my guys won&apos;t use another app.&quot;</b> You are
            Marcus now.
          </p>

          <div className="grid grid-cols-1 items-end gap-[18px] sm:grid-cols-[280px_minmax(0,1fr)]">
            <figure className="m-0 max-w-[260px] sm:max-w-none">
              <Image
                src="/images/tech-phone.jpg"
                alt="A technician's gloved hand holding a phone with a blank screen in a mechanical closet, headlamp lighting the furnace nameplate"
                width={825}
                height={1024}
                sizes="(max-width: 640px) 260px, 280px"
                className="block h-auto w-full border border-rule"
              />
              <figcaption className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                Screen composited from the real job page before launch.
              </figcaption>
            </figure>
            <div className="max-w-[420px] rounded-xl bg-ink px-4 py-3.5 text-[14.5px] text-paper">
              <span className="mb-1.5 block font-mono text-[11px] text-ledger-400">SMS · 9:43 PM · from the shop</span>
              Job: No-cool, emergency. D. Okafor, 1420 Mesa Verde Dr. Window 10:15 to 11:00 tonight. Open it:{' '}
              <a
                href="#act3"
                className={`text-ledger-400 ${techOpen ? 'no-underline' : 'underline'}`}
                onClick={(e) => {
                  e.preventDefault()
                  setTechOpen(true)
                }}
              >
                poof.link/j/8f2k
              </a>
            </div>
          </div>

          {techOpen && (
            <div className="mt-4 max-w-[520px] border border-rule bg-white">
              <div className={panelCls}>
                <span className="bg-ledger-200 px-2.5 py-1.5 font-mono text-[11.5px] text-ledger-600">
                  Opened with no login · one job · link expires on reschedule
                </span>
              </div>

              <div className={panelCls}>
                <h3 className={labelCls}>Arrival · recorded when it happens, not estimated after</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className={`${btnSm} ${quiet}`}
                    onClick={() => setOmw(true)}
                    disabled={omw}
                  >
                    {omw ? 'On my way · 9:51 PM' : 'On my way'}
                  </button>
                  <button
                    type="button"
                    className={`${btnSm} ${quiet}`}
                    onClick={() => setArr(true)}
                    disabled={!omw || arr}
                  >
                    {arr ? 'Arrived · 10:12 PM' : 'Arrived'}
                  </button>
                  {arr && (
                    <span className={stampCls}>
                      Both recorded at the tap. This is the number that gets argued about six weeks later.
                    </span>
                  )}
                </div>
              </div>

              <div className={panelCls}>
                <h3 className={labelCls}>Equipment on file at this address · tap to attach</h3>
                <div
                  className={`flex items-center justify-between gap-2.5 border px-2.5 py-2 text-sm ${
                    attached ? 'border-ledger-600 bg-ledger-200' : 'border-rule'
                  }`}
                >
                  <span>Carrier 24ACC636 · 3-ton condenser · 2016 · serial 2416E…</span>
                  <button
                    type="button"
                    className={`${btnSm} ${quiet}`}
                    onClick={() => setAttached(true)}
                    disabled={attached}
                  >
                    {attached ? 'Attached' : 'Attach'}
                  </button>
                </div>
                <div className="mt-2 max-w-[60ch] text-sm text-muted">
                  An unlisted unit is typed once and stays on file. Make, model and serial follow the unit, not the
                  visit.
                </div>
              </div>

              <div className={panelCls}>
                <h3 className={labelCls}>Field report · written on the phone at the jobsite</h3>
                <div className="text-sm">
                  <p className="mb-1.5">
                    <b className="font-semibold">What was wrong:</b> Run capacitor failed, reading 31/3 on a 45/5 µF.
                    Compressor not starting.
                  </p>
                  <p className="mb-1.5">
                    <b className="font-semibold">What was done:</b> Replaced capacitor, checked contactor, verified
                    58°F supply air after 15 minutes.
                  </p>
                  <p className="mb-1.5">
                    <b className="font-semibold">What still needs doing:</b> Condenser coil is heavily fouled.
                    Recommend cleaning in spring, before the season.
                  </p>
                </div>
              </div>

              <div className={panelCls}>
                <h3 className={labelCls}>Parts and labor · tagged by the person who knows</h3>
                <table className="w-full border-collapse text-[13.5px]">
                  <tbody>
                    <tr>
                      <td className="border-b border-rule py-1.5">
                        After-hours diagnostic <span className="text-[12.5px] text-muted">· fee</span>
                      </td>
                      <td className={`${numCell} whitespace-nowrap border-b border-rule`}>$189.00</td>
                    </tr>
                    <tr>
                      <td className="border-b border-rule py-1.5">
                        Repair labor, 1.25 h <span className="text-[12.5px] text-muted">· labor</span>
                      </td>
                      <td className={`${numCell} whitespace-nowrap border-b border-rule`}>$181.25</td>
                    </tr>
                    {part && (
                      <tr>
                        <td className="border-b border-rule py-1.5">
                          Run capacitor 45/5 µF{' '}
                          <span className="text-[12.5px] text-muted">
                            · part · from the price list, lands on the right sales account
                          </span>
                        </td>
                        <td className={`${numCell} whitespace-nowrap border-b border-rule`}>$38.00</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className={`${btnSm} ${quiet}`}
                    onClick={() => setPart(true)}
                    disabled={part}
                  >
                    {part ? 'Added' : "Add from the shop's price list: run capacitor 45/5 µF"}
                  </button>
                  {part && (
                    <span className={stampCls}>
                      Sell price from the list. Cost, $11.20, rides in from the catalogue. Marcus never looked it up
                      on a roof.
                    </span>
                  )}
                </div>
              </div>

              <div className={panelCls}>
                <h3 className={labelCls}>Jobsite photos · each one opted in or out of the customer&apos;s invoice</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {PHOTOS.map((n) => (
                    <div key={n} className="border border-rule p-2 text-[12.5px]">
                      <div
                        aria-hidden="true"
                        className={`mb-1.5 h-11 rounded-[3px] ${
                          n === RECEIPT ? 'border border-dashed border-rule bg-paper-2' : 'bg-rule'
                        }`}
                      />
                      <label className="flex cursor-pointer items-center gap-1.5">
                        <input
                          type="checkbox"
                          className="m-0 accent-ledger-600"
                          checked={photos[n]}
                          onChange={(e) => onPhoto(n, e.target.checked)}
                        />{' '}
                        {n}
                      </label>
                      <span className="mt-[3px] block text-[11.5px] text-muted">{photoDesc(n)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={panelCls}>
                <h3 className={labelCls}>Customer sign-off · a typed name and the time, not a drawn signature</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    type="text"
                    aria-label="Customer name"
                    placeholder="Customer types their name"
                    className="min-w-[200px] rounded-lg border border-rule bg-paper-2 px-2.5 py-[7px] text-[15px] disabled:opacity-50"
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    disabled={complete}
                  />
                  <button
                    type="button"
                    className={`${btnSm} ${green}`}
                    onClick={onComplete}
                    disabled={!canComplete}
                    title={!arr ? 'Arrive first' : undefined}
                  >
                    {complete ? 'Completed · 10:29 PM' : 'Complete'}
                  </button>
                </div>
                {complete && (
                  <div className="mt-2.5 text-sm text-ledger-600">
                    Signed off by {signedBy}, 10:29 PM, typed. A draft invoice now exists in the office, in Marcus’s
                    words. Nobody retyped a paper ticket.
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={guardCls}>
            <b className={strong}>What it does not do.</b> No GPS, no payment on site, no drawn signature, no offline
            mode. It does not schedule or re-route.
          </div>
        </section>

        {/* ------------------------------------------------------------ ACT 4 */}
        <section className={actCls} id="act4">
          <p className={eyebrow}>Step 4 · The office</p>
          <h2 className={h2Cls}>Nothing reaches the customer until a person sends it.</h2>
          <p className={subCls}>
            The dispatcher opens the field report: the tech&apos;s words, the photos, the parts, the sign-off, and
            the draft invoice. <b className={strong}>The invoice wrote itself. Sending it is yours.</b>
          </p>

          <div className="max-w-[640px] border border-rule bg-white">
            <div className={`${panelCls} text-sm`}>
              <h3 className={labelCls}>Field report · Marcus · job #2026-091</h3>
              Run capacitor failed, reading 31/3 on a 45/5 µF. Replaced capacitor, checked contactor, verified 58°F
              supply air. Condenser coil heavily fouled; recommend cleaning in spring.
            </div>
            <div className={`${panelCls} text-sm`}>
              <h3 className={labelCls}>Internal note</h3>
              <div className="border-l-[3px] border-audit pl-2.5 text-muted">
                <b className="font-mono text-[10.5px] font-medium uppercase tracking-[0.06em] text-audit">
                  Never reaches the customer
                </b>
                <br />
                Customer was worried about cost. Quoted the capacitor before replacing. Mentioned the coil cleaning
                as a spring job, not tonight.
              </div>
            </div>
            <div className={`${panelCls} text-sm`}>
              <h3 className={labelCls}>Photos on the invoice</h3>
              <span>{photoList}</span>
            </div>
            <div className={`${panelCls} text-sm`}>
              <h3 className={labelCls}>Draft invoice · trade format</h3>
              <div className="border border-ink px-4 py-3.5">
                <h4 className="mb-1.5 font-display text-xl font-extrabold tracking-[-0.03em]">
                  Invoice · D. Okafor · 1420 Mesa Verde Dr
                </h4>
                {(
                  [
                    ['Diagnosis', 'Run capacitor failed (31/3 on a 45/5 µF). Compressor not starting.'],
                    ['Work performed', 'Replaced run capacitor. Checked contactor. Verified 58°F supply air.'],
                    ['Recommended follow-up', 'Condenser coil cleaning, spring 2027.'],
                    ['Equipment', 'Carrier 24ACC636, 3-ton, 2016.'],
                    ['Warranty', 'Part, 1 year. Labor, 90 days.'],
                  ] as Array<[string, string]>
                ).map(([k, v]) => (
                  <div key={k} className="mt-2">
                    <b className="block font-mono text-[10.5px] font-medium uppercase tracking-[0.06em] text-muted">
                      {k}
                    </b>
                    {v}
                  </div>
                ))}
                <table className="mt-2 w-full border-collapse text-[13.5px]">
                  <tbody>
                    <tr>
                      <td className="border-b border-rule py-[5px]">After-hours diagnostic</td>
                      <td className="border-b border-rule py-[5px] text-right font-mono tabular">$189.00</td>
                    </tr>
                    <tr>
                      <td className="border-b border-rule py-[5px]">Repair labor, 1.25 h</td>
                      <td className="border-b border-rule py-[5px] text-right font-mono tabular">$181.25</td>
                    </tr>
                    {part && (
                      <tr>
                        <td className="border-b border-rule py-[5px]">Run capacitor 45/5 µF</td>
                        <td className="border-b border-rule py-[5px] text-right font-mono tabular">$38.00</td>
                      </tr>
                    )}
                    <tr>
                      <td className="pb-[5px] pt-2 font-semibold">Total</td>
                      <td className="pb-[5px] pt-2 text-right font-mono font-semibold tabular">
                        {part ? '$408.25' : '$370.25'}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-1.5 text-[12.5px] text-muted">{invoicePhotos}</div>
              </div>
            </div>
            <div className={`${panelCls} text-sm`}>
              <button type="button" className={`${btn} ${press}`} onClick={onSend} disabled={!complete || sent}>
                {sent ? 'Sent' : complete ? 'Send the invoice to the customer' : 'Waiting on the field report'}
              </button>
              {sent && (
                <div className="mt-3 text-sm text-ledger-600">
                  Sent 10:31 PM, by you. The first thing that reached the customer tonight.{' '}
                  {sentWithReceipt
                    ? 'You chose to include the supply-house receipt; it shows the shop’s cost.'
                    : 'The supply-house receipt stayed inside the shop.'}
                </div>
              )}
            </div>
          </div>

          <div className={guardCls}>
            <b className={strong}>Rules can never do this.</b> No rule can send anything to a customer. Invoices are
            always a person&apos;s decision.
          </div>
        </section>

        {/* ------------------------------------------------------- CONTROLLER */}
        <section className={actCls} id="controller">
          <p className={eyebrow}>Who signs the close</p>
          <h2 className={h2Cls}>A former controller reviews every month before you see it.</h2>
          <div className="mt-7 grid grid-cols-1 items-center gap-[22px] border border-rule bg-white px-6 py-[22px] sm:grid-cols-[180px_1fr]">
            {/* Photo slot: the real photograph does not exist yet. */}
            <div className="flex aspect-square w-full max-w-[220px] flex-col justify-end gap-1.5 border border-rule bg-paper-2 p-3.5 sm:max-w-none">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ledger-600">
                Real photograph · Austin Semple
              </span>
              <span className="text-sm text-muted">At a shop, not a desk.</span>
            </div>
            <div>
              <h3 className="mb-1.5 text-lg font-semibold">Austin Semple, former controller</h3>
              <p className="m-0 max-w-[52ch] text-[15px] text-muted">
                Three years as an auditor, then seven as a controller for small businesses. He reviews every managed close
                himself. Books closed by the 15th business day, every completed job costed within 5, a controller
                who answers within 1.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ ACT 5 */}
        <section className={actCls} id="act5">
          <p className={eyebrow}>Step 5 · The job</p>
          <h2 className={h2Cls}>A service call became a job on its own.</h2>
          <p className={subCls}>
            Completing the visit created the job, linked the customer, and tagged the invoice. Part cost from the
            catalogue, labor from the hours logged. <b className={strong}>Nobody tagged anything.</b>
          </p>

          <div className="max-w-[560px] border border-rule border-l-4 border-l-audit bg-white [border-left-style:double]">
            <div className="flex justify-between gap-2.5 border-b border-rule px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-muted">
              <span>Per-job P&amp;L · job #2026-091 · Okafor no-cool</span>
              <span>{complete ? 'Created at Complete · linked to Okafor · invoice tagged' : 'Not a job yet'}</span>
            </div>
            {!complete ? (
              <div className="px-4 py-[18px] text-[14.5px] text-muted">
                Complete the visit in Step 3. The job does not exist until the tech taps Complete. That is the point.
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 gap-3 px-4 py-3.5 sm:grid-cols-3">
                  {(
                    [
                      ['Revenue', plPart ? '$408.25' : '$370.25', false],
                      ['Cost', plPart ? '$82.10' : '$70.90', false],
                      ['Margin', plPart ? '$326.15 · 79.9%' : '$299.35 · 80.9%', true],
                    ] as Array<[string, string, boolean]>
                  ).map(([k, v, g]) => (
                    <div key={k}>
                      <b className="mb-[3px] block font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
                        {k}
                      </b>
                      <span
                        className={`font-display text-2xl font-extrabold tracking-[-0.03em] tabular ${
                          g ? 'text-ledger-600' : ''
                        }`}
                      >
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
                <table className="w-full border-collapse text-[13.5px]">
                  <tbody>
                    <tr>
                      {plPart ? (
                        <>
                          <td className="border-t border-rule px-4 py-1.5">
                            Run capacitor 45/5 µF · cost from the catalogue, not the tech&apos;s form
                          </td>
                          <td className="border-t border-rule px-4 py-1.5 text-right font-mono tabular">$11.20</td>
                        </>
                      ) : (
                        <>
                          <td className="border-t border-rule px-4 py-1.5">
                            No part logged. If one was used, its cost is missing from this margin.
                          </td>
                          <td className="border-t border-rule px-4 py-1.5 text-right font-mono tabular">—</td>
                        </>
                      )}
                    </tr>
                    <tr>
                      <td className="border-t border-rule px-4 py-1.5">Labor · 1.25 h at Marcus&apos;s loaded rate</td>
                      <td className="border-t border-rule px-4 py-1.5 text-right font-mono tabular">$52.50</td>
                    </tr>
                    <tr>
                      <td className="border-t border-rule px-4 py-1.5">Truck 3 and fuel · allocated by hours on the job</td>
                      <td className="border-t border-rule px-4 py-1.5 text-right font-mono tabular">$18.40</td>
                    </tr>
                  </tbody>
                </table>
                <div className="border-t border-rule bg-ledger-200 px-4 py-2.5 text-[13.5px] text-ledger-600">
                  Runs 6 points above your other after-hours repairs this quarter. The fouled coil is a $340 spring
                  job already on the follow-up list.
                </div>
              </div>
            )}
          </div>

          <ul className="m-0 mt-[22px] max-w-[560px] list-none border-t border-ink p-0">
            {trail.map(([t, what], i) => (
              <li key={i} className="grid grid-cols-[78px_1fr] gap-3 border-b border-rule py-[7px] text-sm">
                <span className="pt-0.5 font-mono text-[12.5px] text-muted tabular">{t}</span>
                <span>{what}</span>
              </li>
            ))}
          </ul>

          <figure className="m-0 mt-[26px] max-w-[640px]">
            <Image
              src="/images/van-dusk.jpg"
              alt="A plain white service van parked in a suburban driveway at dusk, porch light and dome light on"
              width={1024}
              height={559}
              sizes="(max-width: 700px) 100vw, 640px"
              className="block h-auto w-full border border-rule"
            />
            <figcaption className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
              End of the day, and the day is already in the books.
            </figcaption>
          </figure>

          <div className="mt-[26px] flex flex-wrap items-center gap-2.5">
            <span className="w-full text-[13.5px] text-muted">
              This is the other show&apos;s headline: know which jobs make money. The two meet here.
            </span>
            <BookCallButton className={`${btn} ${press}`}>Book a 20-minute call</BookCallButton>
            <a href="#pricing" className={`${btn} ${ghost}`}>
              Start the $750 Job Margin &amp; Recovery Audit
            </a>
          </div>
          <p className={noteCls}>
            Books closed by the 15th business day. Every completed job costed within 5. An unbilled-work report
            every Friday. A controller answers within 1.
          </p>
        </section>
      </div>

      {/* ------------------------------------------------------ RUNNING ORDER */}
      <aside
        aria-label="Running order"
        className="order-first pt-2 min-[1000px]:order-none min-[1000px]:sticky min-[1000px]:top-6 min-[1000px]:self-start min-[1000px]:pt-9"
      >
        <h2 className="mb-2.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-muted">
          Running order · this visit
        </h2>
        <ol className="m-0 grid list-none grid-cols-2 gap-x-3.5 border-t border-ink p-0 min-[1000px]:block">
          {order.map(([name, d]) => (
            <li
              key={name}
              className={`grid grid-cols-[22px_1fr] gap-2.5 border-b border-rule py-[7px] text-[13.5px] min-[1000px]:py-2.5 min-[1000px]:text-[14.5px] ${
                d ? 'text-ink' : 'text-muted'
              }`}
            >
              <span
                aria-hidden="true"
                className={`relative mt-[3px] h-4 w-4 rounded-[3px] border-[1.5px] ${
                  d ? 'border-ledger-600 bg-ledger-600' : 'border-muted'
                }`}
              >
                {d && (
                  <svg viewBox="0 0 13 13" className="absolute inset-0 h-full w-full" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M3 6.5l2.5 2.5 5-5" />
                  </svg>
                )}
              </span>
              <span>
                {name}
                {d && <span className="sr-only"> (done)</span>}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-3 text-[13.5px] leading-relaxed text-muted">
          Rekeyed by hand: <b className={strong}>0</b>
          <br />
          Reached the customer: <b className={strong}>{sent ? '1 invoice, sent by a person' : 'nothing yet'}</b>
          <br />
          Texts to the tech: <b className={`${strong} tabular`}>{texts}</b>
        </div>
      </aside>
    </div>
  )
}
