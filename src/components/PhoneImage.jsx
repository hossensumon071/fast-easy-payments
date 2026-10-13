import { useState } from 'react'

// Uses the transparent phone PNG (downloaded by `npm run assets`).
// If it isn't there yet, falls back to the version cropped from the design.
export default function PhoneImage({ className = '', alt = 'Fast Easy Payments app on a phone' }) {
  const [src, setSrc] = useState('/images/hero-phone.png')
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => src.endsWith('.png') && setSrc('/images/hero-phone-fallback.webp')}
    />
  )
}
