import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { services, shop, categories } from '../data/shop'

const KEY = 'beaumore-bookings-v1'
const slots = [
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
]

function days(n = 12) {
  const out: string[] = []
  const d = new Date()
  for (let i = 0; i < n; i++) {
    const x = new Date(d)
    x.setDate(d.getDate() + i)
    out.push(x.toISOString().slice(0, 10))
  }
  return out
}

export function Book() {
  const [params] = useSearchParams()
  const dayList = useMemo(() => days(), [])
  const initial = params.get('service') || 'shellac-mani'
  const [cat, setCat] = useState<string>('All')
  const [serviceId, setServiceId] = useState(
    services.some((s) => s.id === initial) ? initial : services[0].id,
  )
  const [date, setDate] = useState(dayList[0])
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [done, setDone] = useState(false)

  const filtered =
    cat === 'All' ? services : services.filter((s) => s.category === cat)
  const service = services.find((s) => s.id === serviceId) || services[0]

  const confirm = () => {
    if (!time || !name || !phone) return
    const all = JSON.parse(localStorage.getItem(KEY) || '[]')
    all.unshift({
      service: service.name,
      price: service.price,
      date,
      time,
      name,
      phone,
      notes,
      at: new Date().toISOString(),
    })
    localStorage.setItem(KEY, JSON.stringify(all))
    setDone(true)
  }

  if (done) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 560 }}>
          <p className="eyebrow">Booked (demo)</p>
          <h1 className="display h1">You&apos;re glowing already</h1>
          <p className="lede" style={{ margin: '1rem auto' }}>
            {name} · {service.name} (${service.price}) · {date} {time}
          </p>
          <p className="muted">Production syncs Setmore + SMS to {shop.phone}.</p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <button className="btn" type="button" onClick={() => setDone(false)}>
              Book another
            </button>
            <a className="btn btn-ghost" href={shop.setmore} target="_blank" rel="noreferrer">
              Real Setmore
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Book</p>
        <h1 className="display h1">
          Pick. Confirm. <em>Glow.</em>
        </h1>
        <p className="muted" style={{ marginTop: '0.5rem' }}>
          Full menu · demo saves in this browser
        </p>

        <div className="book-layout" style={{ marginTop: '2rem' }}>
          <div>
            <div className="tabs">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`tab ${cat === c ? 'on' : ''}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="book-grid">
              {filtered.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={serviceId === s.id ? 'selected' : ''}
                  onClick={() => setServiceId(s.id)}
                >
                  <span>
                    <strong>{s.name}</strong>
                    <span className="muted">
                      {' '}
                      · {s.category} · {s.duration}m
                    </span>
                  </span>
                  <span className="price">${s.price}</span>
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: '1.75rem' }}>Day</h3>
            <div className="chip-row">
              {dayList.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`chip ${date === d ? 'selected' : ''}`}
                  onClick={() => setDate(d)}
                >
                  {new Date(`${d}T12:00:00`).toLocaleDateString(undefined, {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: '1.25rem' }}>Time</h3>
            <div className="chip-row">
              {slots.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`chip ${time === t ? 'selected' : ''}`}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <form
              className="form"
              style={{ marginTop: '1.5rem' }}
              onSubmit={(e) => {
                e.preventDefault()
                confirm()
              }}
            >
              <label>
                Name
                <input required value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Phone
                <input required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </label>
              <label>
                Notes
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Shape, colour, allergies…"
                />
              </label>
              <button className="btn" type="submit">
                Confirm ${service.price} · {service.name}
              </button>
            </form>
          </div>

          <aside className="summary">
            <h3 className="display" style={{ fontSize: '1.8rem', margin: 0 }}>
              Summary
            </h3>
            <dl>
              <div>
                <dt>Service</dt>
                <dd>{service.name}</dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>${service.price}</dd>
              </div>
              <div>
                <dt>When</dt>
                <dd>
                  {date}
                  {time ? ` · ${time}` : ''}
                </dd>
              </div>
              <div>
                <dt>Studio</dt>
                <dd>
                  {shop.address}
                  <br />
                  {shop.city}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
