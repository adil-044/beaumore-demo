import { useEffect, useState } from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { navLinks, shop } from '../data/shop'
import { useLenis } from '../hooks/useLenis'
import { SalesPitch } from './SalesPitch'

export function Layout() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useLenis()

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpen(false)
  }, [loc.pathname])

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand">
            Beau <span>More</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link to="/book" className="btn" style={{ minHeight: '2.5rem', padding: '0.5rem 1rem' }}>
              Book
            </Link>
            <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`} hidden={!open}>
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
      <div className="demo-banner">
        <strong>Demo for Beau More</strong> — scroll the before/after · real Setmore menu ·{' '}
        {shop.ig}
      </div>
      <main className="main">
        <Outlet />
      </main>
      <SalesPitch />
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="brand">
              Beau <span>More</span>
            </p>
            <p className="muted">Nails · lashes · wax · Hannon / Hamilton</p>
          </div>
          <div>
            <p className="eyebrow">Visit</p>
            <p>
              {shop.address}
              <br />
              {shop.city}
            </p>
            <p>
              <a href={shop.phoneHref}>{shop.phone}</a>
            </p>
          </div>
          <div>
            <p className="eyebrow">Social</p>
            <a href={shop.instagram} target="_blank" rel="noreferrer">
              {shop.ig}
            </a>
            <br />
            <a href={shop.emailHref}>{shop.email}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Beau More Nails & Spa</span>
          <span>Demo by Uptisement</span>
        </div>
      </footer>
    </div>
  )
}
