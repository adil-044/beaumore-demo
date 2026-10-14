import { BeforeAfter } from '../components/BeforeAfter'
import { gallery } from '../data/shop'
import { Link } from 'react-router-dom'

export function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Gallery</p>
        <h1 className="display h1">Glow-ups you can scroll.</h1>
        <p className="lede" style={{ margin: '0.75rem 0 1.5rem' }}>
          Placeholder studio shots until we pull your IG. The before/after is the star.
        </p>
        <BeforeAfter />
        <div className="gallery-grid" style={{ marginTop: '2rem' }}>
          {gallery.map((g) => (
            <figure key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </figure>
          ))}
        </div>
        <div className="btn-row">
          <Link to="/book" className="btn">
            Book this look
          </Link>
        </div>
      </div>
    </section>
  )
}
