import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, services } from '../data/shop'

export function Services() {
  const [tab, setTab] = useState<(typeof categories)[number]>('All')
  const list = useMemo(
    () => (tab === 'All' ? services : services.filter((s) => s.category === tab)),
    [tab],
  )

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Full menu</p>
        <h1 className="display h1">
          Everything on <em>Setmore</em> — pictured.
        </h1>
        <p className="lede" style={{ marginTop: '0.75rem' }}>
          Filter by category. Tap Book on any card. No endless spreadsheet scroll.
        </p>

        <div className="tabs" role="tablist" aria-label="Service categories">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={tab === c}
              className={`tab ${tab === c ? 'on' : ''}`}
              onClick={() => setTab(c)}
            >
              {c}
              {c !== 'All' && (
                <span style={{ opacity: 0.7 }}>
                  {' '}
                  ({services.filter((s) => s.category === c).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <p className="muted" style={{ marginBottom: '1rem' }}>
          Showing {list.length} service{list.length === 1 ? '' : 's'}
          {tab !== 'All' ? ` in ${tab}` : ''}
        </p>

        <div className="card-grid">
          {list.map((s, i) => (
            <article key={s.id} className="scard">
              <div className="scard-img">
                <img src={s.img} alt="" loading="lazy" />
                <span className="scard-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="scard-body">
                <p className="eyebrow" style={{ marginBottom: 0 }}>
                  {s.category}
                </p>
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
        </div>

        <div className="btn-row">
          <Link to="/book" className="btn">
            Open booking
          </Link>
        </div>
      </div>
    </section>
  )
}
