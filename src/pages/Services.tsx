import { Link } from 'react-router-dom'
import { services } from '../data/shop'

const cats = [...new Set(services.map((s) => s.category))]

export function Services() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1 className="display h1">Real prices from Setmore.</h1>
        <p className="lede" style={{ marginTop: '0.75rem' }}>
          Extensions, mani, pedi, combos, lashes, wax — same numbers clients already book.
        </p>
        {cats.map((cat) => (
          <div key={cat} style={{ marginTop: '2.5rem' }}>
            <h2 className="display h2">{cat}</h2>
            {services
              .filter((s) => s.category === cat)
              .map((s) => (
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
        ))}
        <div className="btn-row">
          <Link to="/book" className="btn">
            Book a service
          </Link>
        </div>
      </div>
    </section>
  )
}
