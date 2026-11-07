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
} as const

/** The sign-up link carries the reason for coming: a new account lands on the guided 1099 page, not the books. */
export const FILE_1099S_URL = 'https://app.poofai.com/register?for=1099s'

export const dollars = (n: number) => `$${n.toFixed(2)}`
