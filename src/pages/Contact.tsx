import { Link } from 'react-router-dom'
import { shop } from '../data/shop'

export function Contact() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1 className="display h1">
          Come glow on <em>Rymal</em>
        </h1>

        <div className="contact-grid" style={{ marginTop: '2rem' }}>
          <div className="contact-panel" style={{ display: 'grid', gap: '1.25rem' }}>
            <div>
              <p className="eyebrow">Phone</p>
              <a href={shop.phoneHref} style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>
                {shop.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <a href={shop.emailHref}>{shop.email}</a>
            </div>
            <div>
              <p className="eyebrow">Social</p>
              <a href={shop.instagram} target="_blank" rel="noreferrer">
                {shop.ig}
              </a>
              <br />
              <a href={shop.tiktok} target="_blank" rel="noreferrer">
                TikTok @beaumore.nails
              </a>
            </div>
            <div>
              <p className="eyebrow">Hours</p>
              {shop.hours.map((h) => (
                <p key={h.day} className="muted" style={{ margin: '0.2rem 0' }}>
                  <strong style={{ color: 'var(--ink)' }}>{h.day}</strong> — {h.time}
                </p>
              ))}
            </div>
            <div>
              <p className="eyebrow">Booking</p>
              <a href={shop.setmore} target="_blank" rel="noreferrer">
                Setmore live calendar →
              </a>
            </div>
            <div className="btn-row">
              <Link to="/book" className="btn">
                Book on this site
              </Link>
              <a className="btn btn-ghost" href={shop.mapsUrl} target="_blank" rel="noreferrer">
                Directions
              </a>
            </div>
          </div>

          <div className="map-panel">
            <div>
              <p className="display h2">{shop.address}</p>
              <p className="muted">{shop.city}</p>
              <p className="muted" style={{ marginTop: '0.75rem' }}>
                Hannon · Hamilton area · easy parking
              </p>
              <a className="btn" style={{ marginTop: '1.25rem' }} href={shop.mapsUrl} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
