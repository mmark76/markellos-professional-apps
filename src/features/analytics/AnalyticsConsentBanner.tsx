import { useEffect, useState } from 'react'
import type { Language } from '../../content'
import {
  readAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from './analyticsConsent'
import './analyticsConsent.css'

type Props = {
  language: Language
  open: boolean
  onClose: () => void
}

export function AnalyticsConsentBanner({ language, open, onClose }: Props) {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(() =>
    readAnalyticsConsent(),
  )

  useEffect(() => {
    if (open) setConsent(readAnalyticsConsent())
  }, [open])

  const copy =
    language === 'en'
      ? {
          title: 'Analytics choices',
          text:
            'Google Analytics helps measure visits and page use. Analytics storage is denied unless you choose to allow it. Advertising features remain disabled.',
          necessary: 'Necessary only',
          allow: 'Allow analytics',
          close: 'Close analytics choices',
        }
      : {
          title: 'Ρυθμίσεις analytics',
          text:
            'Το Google Analytics βοηθά στη μέτρηση επισκέψεων και χρήσης των σελίδων. Η αποθήκευση analytics παραμένει απενεργοποιημένη εκτός αν επιλέξετε να την επιτρέψετε. Οι διαφημιστικές λειτουργίες παραμένουν απενεργοποιημένες.',
          necessary: 'Μόνο απαραίτητα',
          allow: 'Επιτρέπω analytics',
          close: 'Κλείσιμο ρυθμίσεων analytics',
        }

  const visible = open || consent === null
  if (!visible) return null

  const choose = (nextConsent: AnalyticsConsent) => {
    setAnalyticsConsent(nextConsent)
    setConsent(nextConsent)
    onClose()
  }

  return (
    <aside
      className="analytics-consent"
      role="dialog"
      aria-labelledby="analytics-consent-title"
      aria-live="polite"
    >
      <div>
        <h2 id="analytics-consent-title">{copy.title}</h2>
        <p>{copy.text}</p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" onClick={() => choose('denied')}>
          {copy.necessary}
        </button>
        <button
          className="analytics-consent-allow"
          type="button"
          onClick={() => choose('granted')}
        >
          {copy.allow}
        </button>
        {consent !== null && (
          <button
            className="analytics-consent-close"
            type="button"
            aria-label={copy.close}
            title={copy.close}
            onClick={onClose}
          >
            ×
          </button>
        )}
      </div>
    </aside>
  )
}
