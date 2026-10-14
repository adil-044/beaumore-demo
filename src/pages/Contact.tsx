import { shop } from '../data/shop'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gap: '2rem' }}>
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="display h1">Come glow on Rymal.</h1>
          <p className="lede" style={{ marginTop: '0.75rem' }}>
            {shop.address}, {shop.city}
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1.25rem', maxWidth: 480 }}>
          <div>
            <p className="eyebrow">Phone</p>
            <a href={shop.phoneHref} style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>
              {shop.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <a href={shop.emailHref}>{shop.email}</a>
          </div>
          <div>
            <p className="eyebrow">Instagram</p>
            <a href={shop.instagram} target="_blank" rel="noreferrer">
              {shop.ig}
            </a>
          </div>
          <div>
            <p className="eyebrow">Hours</p>
            {shop.hours.map((h) => (
              <p key={h.day} className="muted" style={{ margin: '0.15rem 0' }}>
                <strong style={{ color: 'var(--ink)' }}>{h.day}</strong> — {h.time}
              </p>
            ))}
          </div>
          <div className="btn-row">
            <Link to="/book" className="btn">
              Book online
            </Link>
            <a className="btn btn-ghost" href={shop.mapsUrl} target="_blank" rel="noreferrer">
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
