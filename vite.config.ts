import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pad = (value: number) => String(value).padStart(2, '0')
const buildDate = new Date()
const buildStamp = [
  buildDate.getUTCFullYear(),
  pad(buildDate.getUTCMonth() + 1),
  pad(buildDate.getUTCDate()),
].join('') + '_' + [
  pad(buildDate.getUTCHours()),
  pad(buildDate.getUTCMinutes()),
].join('')

const shortCommit = (
  process.env.CF_PAGES_COMMIT_SHA
  ?? process.env.GITHUB_SHA
  ?? 'local'
).slice(0, 7)

const buildVersion = `0.1.0_${buildStamp}_${shortCommit}`

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
