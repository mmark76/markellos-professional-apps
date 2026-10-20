const scriptId = 'professional-cookieless-analytics'
const scriptUrl = 'https://analytics.markellosecosystem.com/v1/script.js'
const productionHostname = 'professional.markellosecosystem.com'

export function initializeCookieLessAnalytics() {
  if (
    window.location.protocol !== 'https:'
    || window.location.hostname.toLowerCase() !== productionHostname
    || document.getElementById(scriptId)
  ) return

  const script = document.createElement('script')
  script.async = true
  script.id = scriptId
  script.src = scriptUrl
  document.head.append(script)
}
