import './SalesPitch.css'

const SITE = 'https://uptisement.com'
const BOOK = 'https://calendly.com/uptisement/30min'

export function SalesPitch() {
  return (
    <aside className="sales-pitch" aria-label="Book a meeting with Uptisement">
      <div className="sales-pitch__glow" aria-hidden />
      <div className="container sales-pitch__inner">
        <div className="sales-pitch__copy">
          <p className="sales-pitch__kicker">Built by Uptisement</p>
          <h2 className="sales-pitch__title">
            Like this demo?
            <span> Let’s put it on your domain.</span>
          </h2>
          <p className="sales-pitch__lede">
            Booking-first sites for salons that are tired of chasing DMs. Ten minutes —
            we walk the build and next steps.
          </p>
        </div>
        <div className="sales-pitch__actions">
          <a className="sales-pitch__btn sales-pitch__btn--primary" href={BOOK} target="_blank" rel="noreferrer">
            Book a meeting
            <span aria-hidden>→</span>
          </a>
          <a className="sales-pitch__btn sales-pitch__btn--ghost" href={SITE} target="_blank" rel="noreferrer">
            uptisement.com
          </a>
        </div>
      </div>
    </aside>
  )
}
