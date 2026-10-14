import { Link } from 'react-router-dom'
import { BeforeAfter } from '../components/BeforeAfter'
import { gallery, shop } from '../data/shop'

export function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Gallery</p>
        <h1 className="display h1">
          Glow-ups in <em>frames</em>
        </h1>
        <p className="lede" style={{ margin: '0.75rem 0 1.5rem' }}>
          Scroll-scrub before/after first — then a full wall of look inspiration. Swap for{' '}
          {shop.ig} shots when you go live.
        </p>

        <BeforeAfter />

        <div className="gallery-grid" style={{ marginTop: '2rem' }}>
          {gallery.map((g) => (
            <figure key={g.src} className={g.tall ? 'tall' : undefined}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="cta-band" style={{ marginTop: '2.5rem' }}>
          <h2 className="display h2">Like what you see?</h2>
          <p className="lede">Lock a chair — shellac, bio gel, lashes, wax.</p>
          <div className="btn-row">
            <Link to="/book" className="btn">
              Book this look
            </Link>
            <a className="btn btn-ghost" href={shop.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
