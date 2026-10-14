import { Link } from 'react-router-dom'
import { BeforeAfter } from '../components/BeforeAfter'
import { HorizontalServices } from '../components/HorizontalServices'
import { Marquee } from '../components/Marquee'
import { shop, promises, reviews, gallery } from '../data/shop'

export function Home() {
  return (
    <>
      <section className="container hero">
        <div>
          <p className="eyebrow">Beau More · Hannon / Hamilton</p>
          <h1 className="display h1">
            Soft glam nails.
            <br />
            <em>Hard-to-forget</em> finish.
          </h1>
          <p className="lede" style={{ marginTop: '1.1rem' }}>
            Bio gel, acrylic, shellac, pedis, lashes, wax — full spa menu on Rymal Rd E.
            Pretty enough to book. Clear enough to stop guessing in DMs.
          </p>
          <div className="btn-row">
            <Link to="/book" className="btn">
              Book a seat
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Explore services
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>30+</strong>
              <span>Services</span>
            </div>
            <div>
              <strong>7</strong>
              <span>Days open</span>
            </div>
            <div>
              <strong>IG</strong>
              <span>{shop.ig}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-frame">
            <img
              src="https://images.pexels.com/photos/34885844/pexels-photo-34885844.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Beau More nail art"
            />
          </div>
          <div className="hero-float">
            <strong>Shellac from $40</strong>
            <span className="muted">Mani · pedi · combos · lashes</span>
          </div>
        </div>
      </section>

      <Marquee />

      <HorizontalServices />

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div style={{ maxWidth: '40rem' }}>
            <p className="eyebrow">Transformation</p>
            <h2 className="display h2">
              Scroll the <em>before → after</em>
            </h2>
            <p className="lede" style={{ marginTop: '0.65rem' }}>
              Handle follows your scroll — or drag it. Same energy as our Glorious Nails
              winner.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <BeforeAfter />
            <div className="gallery-grid">
              {gallery.slice(0, 4).map((g) => (
                <figure key={g.src} className={g.tall ? 'tall' : undefined}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                </figure>
              ))}
            </div>
            <Link to="/gallery" className="btn btn-ghost" style={{ width: 'fit-content' }}>
              Full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(255,255,255,0.55)', borderBlock: '1px solid var(--line)' }}>
        <div className="container">
          <p className="eyebrow">Why Beau More</p>
          <h2 className="display h2">More than polish.</h2>
          <div className="promise-grid" style={{ marginTop: '1.75rem' }}>
            {promises.map((p) => (
              <article key={p.num} className="promise">
                <div className="num">{p.num}</div>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Love notes</p>
          <h2 className="display h2">What guests say</h2>
          <div className="review-grid" style={{ marginTop: '1.5rem' }}>
            {reviews.map((r) => (
              <blockquote key={r.name} className="review">
                <div className="stars">★★★★★</div>
                <p>“{r.text}”</p>
                <cite className="muted" style={{ fontStyle: 'normal', fontWeight: 650 }}>
                  {r.name}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-band">
            <p className="eyebrow">Visit</p>
            <h2 className="display h2">
              {shop.address}
              <br />
              <em>{shop.city}</em>
            </h2>
            <p className="lede" style={{ marginTop: '0.75rem' }}>
              Call {shop.phone} · {shop.ig} · open 7 days
            </p>
            <div className="btn-row">
              <Link to="/book" className="btn">
                Book online
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Hours & map
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
