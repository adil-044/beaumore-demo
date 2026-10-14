import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data/shop'

gsap.registerPlugin(ScrollTrigger)

const featured = [
  'shellac-mani',
  'shellac-pedi',
  'biogel-full',
  'combo-shellac',
  'lash-hybrid',
  'acry-full',
  'pedi-sig',
  'dip',
]

export function HorizontalServices() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLSpanElement>(null)
  const cards = services.filter((s) => featured.includes(s.id))

  useGSAP(
    () => {
      const el = section.current
      const row = track.current
      if (!el || !row) return
      const getScroll = () => Math.max(0, row.scrollWidth - window.innerWidth)

      gsap.to(row, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.width = `${self.progress * 100}%`
          },
        },
      })
    },
    { scope: section },
  )

  return (
    <section ref={section} className="hserv" aria-label="Featured services">
      <div className="hserv-inner">
        <div className="container hserv-head">
          <p className="eyebrow">Services</p>
          <h2 className="display h2">
            Scroll sideways through <em>the menu</em>
          </h2>
        </div>
        <div ref={track} className="hserv-track">
          {cards.map((s, i) => (
            <article key={s.id} className="scard">
              <div className="scard-img">
                <img src={s.img} alt="" loading="lazy" />
                <span className="scard-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="scard-body">
                <h3>{s.name}</h3>
                <div className="price">${s.price}</div>
                <p>
                  {s.blurb} · {s.duration} min
                </p>
                <Link className="scard-link" to={`/book?service=${s.id}`}>
                  Book →
                </Link>
              </div>
            </article>
          ))}
          <article className="scard" style={{ background: 'var(--plum)', color: '#fff', borderColor: 'transparent' }}>
            <div className="scard-body" style={{ paddingTop: '2.5rem' }}>
              <h3 style={{ color: '#fff' }}>Full menu</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                30 services — extensions, combos, lashes, wax. Filter by category.
              </p>
              <Link className="scard-link" to="/services" style={{ color: '#fff' }}>
                Browse all →
              </Link>
            </div>
          </article>
        </div>
        <div className="hserv-progress" aria-hidden>
          <span ref={bar} />
        </div>
      </div>
    </section>
  )
}
