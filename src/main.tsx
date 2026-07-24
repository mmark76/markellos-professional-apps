import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './footer-overrides.css'
import './content-width-overrides.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Application root was not found')
}

const applyProfessionalToolsWording = () => {
  const replacements: Array<[string, string]> = [
    ['digital tools', 'digital and professional tools'],
    ['ψηφιακών εργαλείων', 'ψηφιακών και επαγγελματικών εργαλείων'],
  ]

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let current = walker.nextNode()

  while (current) {
    const original = current.nodeValue ?? ''
    const updated = replacements.reduce(
      (text, [search, replacement]) => text.split(search).join(replacement),
      original,
    )

    if (updated !== original) {
      current.nodeValue = updated
    }

    current = walker.nextNode()
  }
}

const wordingObserver = new MutationObserver(applyProfessionalToolsWording)
wordingObserver.observe(root, { childList: true, subtree: true, characterData: true })

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

queueMicrotask(applyProfessionalToolsWording)
