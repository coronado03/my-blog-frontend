'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function NotFound() {
  const preRef = useRef<HTMLPreElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let A = 0, B = 0
    const asciiframe = () => {
      const b = []
      const z = []
      A += 0.07
      B += 0.03
      const cA = Math.cos(A), sA = Math.sin(A),
        cB = Math.cos(B), sB = Math.sin(B)
      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? "\n" : " "
        z[k] = 0
      }
      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j), st = Math.sin(j)
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i), cp = Math.cos(i),
            h = ct + 2,
            D = 1 / (sp * h * sA + st * cA + 5),
            t = sp * h * cA - st * sA
          const x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
            y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
            o = x + 80 * y,
            N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB))
          if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
            z[o] = D
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0]
          }
        }
      }
      if (preRef.current) {
        preRef.current.innerHTML = b.join("")
      }
    }
    const interval = setInterval(asciiframe, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-3">
      <p className="text-catppuccin-green">{"# I haven't implemented this feature yet!! Stay tuned :)"}</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        margin: '20px 0'
      }}>
        <pre
          ref={preRef}
          style={{
            fontSize: '10px',
            lineHeight: '1',
            color: '#0f0',
            fontFamily: 'monospace',
            margin: 0,
            minHeight: '22em'
          }}
        >
          {!mounted && '\n'.repeat(21)}
        </pre>
      </div>
      <Link href="/"><p className="text-catppuccin-blue border border-catppuccin-blue p-3 w-fit">Return to blog</p></Link>
    </div>
  )
}
