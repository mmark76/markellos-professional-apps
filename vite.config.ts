import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const buildDate = new Date()
const cyprusDateParts = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Nicosia',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
}).formatToParts(buildDate).reduce<Record<string, string>>((parts, item) => {
  if (item.type !== 'literal') {
    parts[item.type] = item.value
  }
  return parts
}, {})

const buildStamp = `${cyprusDateParts.year}${cyprusDateParts.month}${cyprusDateParts.day}_${cyprusDateParts.hour}${cyprusDateParts.minute}`

const shortCommit = (
  process.env.CF_PAGES_COMMIT_SHA
  ?? process.env.GITHUB_SHA
  ?? 'local'
).slice(0, 7)

const buildVersion = `v.0.1.0_${buildStamp}_${shortCommit}`

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-build-version',
      transformIndexHtml(html) {
        return html.replace(
          '</body>',
          `<span class="build-version" aria-label="Build version">${buildVersion}</span></body>`,
        )
      },
    },
  ],
})
