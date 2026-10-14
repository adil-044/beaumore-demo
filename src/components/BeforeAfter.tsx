import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { beforeAfter } from '../data/shop'

gsap.registerPlugin(ScrollTrigger)

export function BeforeAfter() {
  const root = useRef<HTMLDivElement>(null)
  const after = useRef<HTMLImageElement>(null)
  const handle = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = root.current
      const clipEl = after.current
      const handleEl = handle.current
      if (!el || !clipEl || !handleEl) return

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      let dragging = false
      let pos = 0.55

      const setPos = (p: number) => {
        pos = Math.min(0.92, Math.max(0.08, p))
        const pct = `${pos * 100}%`
        clipEl.style.clipPath = `inset(0 0 0 ${pct})`
        handleEl.style.left = pct
      }
      setPos(pos)

      const onPointer = (x: number) => {
        const rect = el.getBoundingClientRect()
        setPos((x - rect.left) / rect.width)
      }

      const down = (e: PointerEvent) => {
        dragging = true
        el.setPointerCapture(e.pointerId)
        onPointer(e.clientX)
      }
      const move = (e: PointerEvent) => {
        if (!dragging) return
        onPointer(e.clientX)
      }
      const up = () => {
        dragging = false
      }

      el.addEventListener('pointerdown', down)
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerup', up)

      let st: ScrollTrigger | undefined
      if (!reduce) {
        st = ScrollTrigger.create({
          trigger: el,
          start: 'top 75%',
          end: 'bottom 35%',
          scrub: 0.55,
          onUpdate: (self) => {
            if (dragging) return
            setPos(0.18 + self.progress * 0.64)
          },
        })
      }

      return () => {
        el.removeEventListener('pointerdown', down)
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerup', up)
        st?.kill()
      }
    },
    { scope: root },
  )

  return (
    <div
      ref={root}
      className="ba"
      role="img"
      aria-label="Scroll or drag to compare before and after nails"
    >
      <img src={beforeAfter.before} alt="Before" />
      <img ref={after} className="ba-after" src={beforeAfter.after} alt="After" />
      <div ref={handle} className="ba-handle">
        <div className="ba-knob">◀▶</div>
      </div>
      <span className="ba-tag before">Before</span>
      <span className="ba-tag after">After</span>
    </div>
  )
}
