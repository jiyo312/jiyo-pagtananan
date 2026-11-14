import { readFileSync, writeFileSync } from 'node:fs'
import { PNG } from 'pngjs'

const SRC = 'src/assets/jiyo.original.png'
const OUT = 'src/assets/jiyo.png'

// Pixels whose perceived luminance is at/below LOW get darkened fully by
// FACTOR. Between LOW and HIGH the darkening ramps off smoothly so there is
// no visible seam. Brighter pixels (skin, highlights) are left untouched.
const LOW = 70 // full darkening at/below this luminance (0-255)
const HIGH = 120 // no darkening at/above this luminance
const FACTOR = 0.55 // multiply dark pixels' RGB by this (lower = darker)

const png = PNG.sync.read(readFileSync(SRC))
const { data } = png

const lerp = (a, b, t) => a + (b - a) * t

for (let i = 0; i < data.length; i += 4) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const a = data[i + 3]
  if (a === 0) continue // skip fully transparent pixels

  // Rec. 601 luma
  const lum = 0.299 * r + 0.587 * g + 0.114 * b

  let strength
  if (lum <= LOW) strength = 1
  else if (lum >= HIGH) strength = 0
  else strength = 1 - (lum - LOW) / (HIGH - LOW)

  if (strength <= 0) continue

  const mul = lerp(1, FACTOR, strength)
  data[i] = Math.round(r * mul)
  data[i + 1] = Math.round(g * mul)
  data[i + 2] = Math.round(b * mul)
}

writeFileSync(OUT, PNG.sync.write(png))
console.log('Darkened portrait written to', OUT)
