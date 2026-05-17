import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: '#1A1A1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: '900',
          borderRadius: '50%',
          border: '2px solid #E5B25D',
          fontFamily: 'sans-serif',
        }}
      >
        HB
      </div>
    ),
    { ...size }
  )
}
