export const shop = {
  name: 'Beau More Nails & Spa',
  short: 'Beau More',
  phone: '905-692-1888',
  phoneHref: 'tel:+19056921888',
  email: 'daldao326947728@gmail.com',
  emailHref: 'mailto:daldao326947728@gmail.com',
  instagram: 'https://www.instagram.com/beaumorenailsandspa/',
  ig: '@beaumorenailsandspa',
  setmore: 'https://beaumorenailsandspa.setmore.com/',
  address: '2176 Rymal Rd E',
  city: 'Hannon, ON L0R 1P0',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=2176+Rymal+Rd+E+Hannon+ON',
  hours: [
    { day: 'Mon', time: '9:00 AM – 6:30 PM' },
    { day: 'Tue–Fri', time: '9:00 AM – 7:00 PM' },
    { day: 'Sat', time: '9:00 AM – 5:00 PM' },
    { day: 'Sun', time: '9:00 AM – 3:00 PM' },
  ],
} as const

export type Service = {
  id: string
  name: string
  price: number
  duration: number
  category: string
  blurb: string
}

export const services: Service[] = [
  { id: 'biogel-full', name: 'Bio Gel (Full Set)', price: 70, duration: 45, category: 'Extensions', blurb: 'Strong gel extensions.' },
  { id: 'biogel-fill', name: 'Bio Gel (Fill)', price: 65, duration: 45, category: 'Extensions', blurb: 'Bio gel maintenance.' },
  { id: 'acry-full', name: 'Acrylic (Full Set)', price: 55, duration: 45, category: 'Extensions', blurb: 'Classic acrylic set.' },
  { id: 'dip', name: 'Dipping Powder', price: 50, duration: 50, category: 'Extensions', blurb: 'Dip powder colour + strength.' },
  { id: 'shellac-mani', name: 'Shellac Manicure', price: 40, duration: 30, category: 'Mani', blurb: 'Long-wear gel colour.' },
  { id: 'mani-sig', name: 'Signature Manicure', price: 35, duration: 30, category: 'Mani', blurb: 'Elevated classic care.' },
  { id: 'mani-classic', name: 'Classic Manicure', price: 25, duration: 20, category: 'Mani', blurb: 'Shape, polish, tidy.' },
  { id: 'shellac-pedi', name: 'Shellac Pedicure', price: 55, duration: 50, category: 'Pedi', blurb: 'Pedicure + shellac.' },
  { id: 'pedi-sig', name: 'Signature Pedicure', price: 55, duration: 50, category: 'Pedi', blurb: 'Full foot ritual.' },
  { id: 'pedi-classic', name: 'Classic Pedicure', price: 40, duration: 30, category: 'Pedi', blurb: 'Soak, shape, polish.' },
  { id: 'combo-shellac', name: 'Shellac Mani + Pedi', price: 90, duration: 75, category: 'Combos', blurb: 'Full gel hands + feet.' },
  { id: 'combo-classic', name: 'Classic Mani + Pedi', price: 60, duration: 60, category: 'Combos', blurb: 'Hands + feet classic.' },
  { id: 'lash-classic', name: 'Classic Lash', price: 85, duration: 60, category: 'Lashes', blurb: 'Natural classic set.' },
  { id: 'lash-hybrid', name: 'Hybrid Lash', price: 95, duration: 60, category: 'Lashes', blurb: 'Soft hybrid volume.' },
  { id: 'lash-volume', name: 'Volume Lash', price: 105, duration: 60, category: 'Lashes', blurb: 'Full glam volume.' },
  { id: 'wax-brow', name: 'Eyebrow Wax', price: 14, duration: 10, category: 'Wax', blurb: 'Quick clean brows.' },
  { id: 'wax-brazilian', name: 'Brazilian Wax', price: 45, duration: 30, category: 'Wax', blurb: 'Brazilian.' },
  { id: 'wax-body', name: 'Whole Body Wax', price: 200, duration: 90, category: 'Wax', blurb: 'Full body session.' },
]

export const gallery = [
  { src: 'https://images.pexels.com/photos/34885844/pexels-photo-34885844.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Pink nail art' },
  { src: 'https://images.pexels.com/photos/34997574/pexels-photo-34997574.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'French manicure' },
  { src: 'https://images.pexels.com/photos/34871553/pexels-photo-34871553.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Red & white' },
  { src: 'https://images.pexels.com/photos/34885842/pexels-photo-34885842.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Floral nails' },
  { src: 'https://images.pexels.com/photos/34835304/pexels-photo-34835304.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Leopard print' },
  { src: 'https://images.pexels.com/photos/6135674/pexels-photo-6135674.jpeg?auto=compress&cs=tinysrgb&w=1400', alt: 'Pedicure chairs' },
]

/** Scroll before/after — natural nails → finished set */
export const beforeAfter = {
  before: 'https://images.pexels.com/photos/14267565/pexels-photo-14267565.jpeg?auto=compress&cs=tinysrgb&w=1400',
  after: 'https://images.pexels.com/photos/34885844/pexels-photo-34885844.jpeg?auto=compress&cs=tinysrgb&w=1400',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/book', label: 'Book' },
  { to: '/contact', label: 'Contact' },
] as const
