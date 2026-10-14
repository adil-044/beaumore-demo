import { useMemo, useState } from 'react'
import { services, shop } from '../data/shop'

const KEY = 'beaumore-bookings-v1'
const slots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']

function days(n = 10) {
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
  const dayList = useMemo(() => days(), [])
  const [serviceId, setServiceId] = useState(services[4].id)
  const [date, setDate] = useState(dayList[0])
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [done, setDone] = useState(false)
  const service = services.find((s) => s.id === serviceId)!

  const confirm = () => {
    if (!time || !name || !phone) return
    const all = JSON.parse(localStorage.getItem(KEY) || '[]')
    all.unshift({ service: service.name, date, time, name, phone, at: new Date().toISOString() })
    localStorage.setItem(KEY, JSON.stringify(all))
    setDone(true)
  }

  if (done) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 560 }}>
          <p className="eyebrow">Booked (demo)</p>
          <h1 className="display h1">You&apos;re on the list</h1>
          <p className="lede" style={{ margin: '1rem auto' }}>
            {name} · {service.name} · {date} {time}. Production wires Setmore + SMS to{' '}
            {shop.phone}.
          </p>
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
      <div className="container" style={{ maxWidth: 720 }}>
        <p className="eyebrow">Book</p>
        <h1 className="display h1">Pick. Confirm. Glow.</h1>
        <p className="muted" style={{ marginTop: '0.5rem' }}>Demo saves in this browser.</p>

        <h3 style={{ marginTop: '2rem' }}>Service</h3>
        <div className="book-grid">
          {services.slice(0, 12).map((s) => (
            <button
              key={s.id}
              type="button"
              className={serviceId === s.id ? 'selected' : ''}
              onClick={() => setServiceId(s.id)}
            >
              <span>
                <strong>{s.name}</strong>
                <span className="muted"> · {s.duration}m</span>
              </span>
              <span className="price">${s.price}</span>
            </button>
          ))}
        </div>

        <h3 style={{ marginTop: '1.75rem' }}>Day</h3>
        <div className="chip-row">
          {dayList.map((d) => (
            <button key={d} type="button" className={`chip ${date === d ? 'selected' : ''}`} onClick={() => setDate(d)}>
              {new Date(d + 'T12:00:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
            </button>
          ))}
        </div>

        <h3 style={{ marginTop: '1.75rem' }}>Time</h3>
        <div className="chip-row">
          {slots.map((t) => (
            <button key={t} type="button" className={`chip ${time === t ? 'selected' : ''}`} onClick={() => setTime(t)}>
              {t}
            </button>
          ))}
        </div>

        <form
          className="form"
          style={{ marginTop: '1.75rem' }}
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
          <button className="btn" type="submit">
            Confirm ${service.price} · {service.name}
          </button>
        </form>
      </div>
    </section>
  )
}
