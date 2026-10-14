import { Link } from 'react-router-dom'
import { BeforeAfter } from '../components/BeforeAfter'
import { shop, services } from '../data/shop'

const highlights = services.filter((s) =>
  ['shellac-mani', 'shellac-pedi', 'combo-shellac', 'lash-hybrid', 'biogel-full'].includes(s.id),
)

export function Home() {
  return (
    <>
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div>
            <p className="eyebrow">Hannon · Rymal Rd E</p>
            <h1 className="display h1">Pretty nails. Soft spa energy. Easy booking.</h1>
            <p className="lede" style={{ marginTop: '1rem' }}>
              Beau More Nails & Spa — bio gel, acrylic, shellac, pedis, lashes, wax. Found you on
              Instagram {shop.ig}. This demo shows how charming the brand can feel online.
            </p>
            <div className="btn-row">
              <Link to="/book" className="btn">
                Book a seat
              </Link>
              <Link to="/gallery" className="btn btn-ghost">
                See the glow-up
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow">Scroll controlled</p>
            <h2 className="display h2">Before → after as you scroll</h2>
            <p className="muted" style={{ margin: '0.5rem 0 1rem' }}>
              Drag the handle too — same move as our Glorious Nails winner.
            </p>
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff', borderBlock: '1px solid var(--line)' }}>
        <div className="container">
          <p className="eyebrow">Most booked</p>
          <h2 className="display h2">Menu highlights</h2>
          <div style={{ marginTop: '1.5rem' }}>
            {highlights.map((s) => (
              <div key={s.id} className="service-row">
                <div>
                  <strong>{s.name}</strong>
                  <p className="muted" style={{ margin: '0.2rem 0 0' }}>
                    {s.blurb} · {s.duration} min
                  </p>
                </div>
                <span className="price">${s.price}</span>
              </div>
            ))}
          </div>
          <div className="btn-row">
            <Link to="/services" className="btn btn-ghost">
              Full menu
            </Link>
            <a className="btn" href={shop.setmore} target="_blank" rel="noreferrer">
              Open Setmore
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Ready</p>
          <h2 className="display h2">Stop losing bookings to DMs alone.</h2>
          <p className="lede" style={{ margin: '0.75rem auto' }}>
            Pretty site + clear book button. Clients stop guessing.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/book" className="btn">
              Try booking demo
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Visit info
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
