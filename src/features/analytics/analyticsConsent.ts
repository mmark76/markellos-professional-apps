export type AnalyticsConsent = 'granted' | 'denied'

export const professionalGa4MeasurementId = 'G-DK5WN8TH3Z'
export const analyticsConsentStorageKey = 'professional.analyticsConsent.v1'

const googleTagScriptId = 'professional-google-tag'

const deniedConsent = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
} as const

declare global {
  interface Window {
    dataLayer?: unknown[][]
    gtag?: (...args: unknown[]) => void
  }
}

let analyticsInitialized = false

function getGtag() {
  window.dataLayer = window.dataLayer || []

  if (typeof window.gtag !== 'function') {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }
  }

  return window.gtag
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const stored = window.localStorage.getItem(analyticsConsentStorageKey)
    return stored === 'granted' || stored === 'denied' ? stored : null
  } catch {
    return null
  }
}

function applyAnalyticsConsent(consent: AnalyticsConsent | null) {
  getGtag()('consent', 'update', {
    ...deniedConsent,
    analytics_storage: consent === 'granted' ? 'granted' : 'denied',
  })
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  try {
    window.localStorage.setItem(analyticsConsentStorageKey, consent)
  } catch {
    // Consent still applies for the current page even when storage is unavailable.
  }

  applyAnalyticsConsent(consent)
}

export function initializeAnalytics() {
  if (analyticsInitialized) return

  const gtag = getGtag()
  gtag('consent', 'default', deniedConsent)
  applyAnalyticsConsent(readAnalyticsConsent())

  if (!document.getElementById(googleTagScriptId)) {
    const script = document.createElement('script')
    script.id = googleTagScriptId
    script.async = true
    script.src =
      `https://www.googletagmanager.com/gtag/js?id=${professionalGa4MeasurementId}`
    document.head.append(script)
  }

  gtag('js', new Date())
  gtag('config', professionalGa4MeasurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })

  analyticsInitialized = true
}
