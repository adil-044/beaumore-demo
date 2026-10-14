export function Marquee() {
  const items = [
    'Bio Gel',
    'Shellac',
    'Acrylic',
    'Pedicure',
    'Lashes',
    'Wax',
    'Rymal Rd E',
    'Hannon',
    'Book online',
  ]
  const row = [...items, ...items]
  return (
    <div className="marquee-wrap" aria-hidden>
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <span> · </span>
          </span>
        ))}
      </div>
    </div>
  )
}
