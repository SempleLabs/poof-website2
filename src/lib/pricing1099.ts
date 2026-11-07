/**
 * What Poof charges to file 1099s. The /1099s page and the 1099 checker both read these,
 * so the price on the product page and the cost the checker quotes can't drift apart.
 */
export const FILING_1099 = {
  /** Forms filed free each calendar year, per business. */
  freeFormsPerYear: 3,
  /** Each form filed after the free ones. */
  perForm: 2.49,
  /** Each contractor copy Poof mails; emailed copies are free. */
  mailedCopy: 1.79,
  /** A bookkeeper filing for clients pays perForm up to this many forms a year... */
  firmVolumeForms: 25,
  /** ...then this much a form, with each client's free forms still free. */
  firmVolumePerForm: 1.49,
} as const

/** The sign-up link carries the reason for coming: a new account lands on the guided 1099 page, not the books. */
export const FILE_1099S_URL = 'https://app.poofai.com/register?for=1099s'

export const dollars = (n: number) => `$${n.toFixed(2)}`

/** The firm's price as one phrase: "$2.49 a form up to 25 a year, then $1.49, with each client's first 3 free". */
export const FIRM_1099_PRICE = `${dollars(FILING_1099.perForm)} a form up to ${FILING_1099.firmVolumeForms} a year, then ${dollars(FILING_1099.firmVolumePerForm)}, with each client’s first ${FILING_1099.freeFormsPerYear} free`
