// Downloads the transparent phone image + testimonial avatars from the old
// Framer site into /public/images. Runs automatically before `npm run dev`
// and `npm run build`. Existing files are skipped; failures never stop the build
// (the site has built-in fallbacks).
import { mkdir, writeFile, access } from 'node:fs/promises'
import { dirname } from 'node:path'

const BASE = 'https://framerusercontent.com/images/'

const FILES = [
  ['48btEBvO1b5M6zx9WqmbFT2M1k.png', 'public/images/hero-phone.png'],
  ['qecwzS8HSAdDifIJYBF7ozvJEw.jpg', 'public/images/avatars/1.jpg'],
  ['LbTExLfAETmGD6yFKnZb9bKJrFU.jpg', 'public/images/avatars/2.jpg'],
  ['2HldSo2Q3ueIP2cT2Piow24GVU.jpg', 'public/images/avatars/3.jpg'],
  ['QT6h9g8oeIZVG8UA6TdP0VrfWxQ.jpg', 'public/images/avatars/4.jpg'],
  ['ag0PTxERQ2yMOg8gRidOHjC994.jpg', 'public/images/avatars/5.jpg'],
  ['4N5wISDOa21LP9Mw0vyu1mxvBM.jpg', 'public/images/avatars/6.jpg'],
]

const exists = (p) => access(p).then(() => true, () => false)

for (const [id, dest] of FILES) {
  if (await exists(dest)) continue
  try {
    const res = await fetch(BASE + id, { signal: AbortSignal.timeout(15000) })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    await mkdir(dirname(dest), { recursive: true })
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
    console.log('downloaded', dest)
  } catch (err) {
    console.warn(`[assets] could not download ${dest}: ${err.message} (fallback will be used)`)
  }
}
