export const shop = {
  name: 'Beau More Nails & Spa',
  short: 'Beau More',
  phone: '905-692-1888',
  phoneHref: 'tel:+19056921888',
  email: 'daldao326947728@gmail.com',
  emailHref: 'mailto:daldao326947728@gmail.com',
  instagram: 'https://www.instagram.com/beaumorenailsandspa/',
  ig: '@beaumorenailsandspa',
  tiktok: 'https://www.tiktok.com/@beaumore.nails',
  setmore: 'https://beaumorenailsandspa.setmore.com/',
  address: '2176 Rymal Rd E',
  city: 'Hannon, ON L0R 1P0',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=2176+Rymal+Rd+E+Hannon+ON',
  hours: [
    { day: 'Monday', time: '9:00 AM – 6:30 PM' },
    { day: 'Tuesday – Friday', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
    { day: 'Sunday', time: '9:00 AM – 3:00 PM' },
  ],
} as const

export type Service = {
  id: string
  name: string
  price: number
  duration: number
  category: 'Extensions' | 'Mani' | 'Pedi' | 'Combos' | 'Lashes' | 'Wax' | 'Other'
  blurb: string
  img: string
}

const img = {
  mani: 'https://images.pexels.com/photos/34885844/pexels-photo-34885844.jpeg?auto=compress&cs=tinysrgb&w=900',
  french: 'https://images.pexels.com/photos/34997574/pexels-photo-34997574.jpeg?auto=compress&cs=tinysrgb&w=900',
  red: 'https://images.pexels.com/photos/34871553/pexels-photo-34871553.jpeg?auto=compress&cs=tinysrgb&w=900',
  floral: 'https://images.pexels.com/photos/34885842/pexels-photo-34885842.jpeg?auto=compress&cs=tinysrgb&w=900',
  leo: 'https://images.pexels.com/photos/34835304/pexels-photo-34835304.jpeg?auto=compress&cs=tinysrgb&w=900',
  pedi: 'https://images.pexels.com/photos/5484947/pexels-photo-5484947.png?auto=compress&cs=tinysrgb&w=900',
  chairs: 'https://images.pexels.com/photos/6135674/pexels-photo-6135674.jpeg?auto=compress&cs=tinysrgb&w=1100',
  work: 'https://images.pexels.com/photos/14267565/pexels-photo-14267565.jpeg?auto=compress&cs=tinysrgb&w=900',
  jewelry: 'https://images.pexels.com/photos/34997575/pexels-photo-34997575.jpeg?auto=compress&cs=tinysrgb&w=900',
  fluff: 'https://images.pexels.com/photos/34871556/pexels-photo-34871556.jpeg?auto=compress&cs=tinysrgb&w=900',
}

/** Full Setmore menu */
export const services: Service[] = [
  { id: 'biogel-full', name: 'Bio Gel (Full Set)', price: 70, duration: 45, category: 'Extensions', blurb: 'Strong gel extensions. Full set.', img: img.mani },
  { id: 'biogel-fill', name: 'Bio Gel (Fill)', price: 65, duration: 45, category: 'Extensions', blurb: 'Maintenance fill for bio gel.', img: img.floral },
  { id: 'uv-full', name: 'UV Powder (Full Set)', price: 60, duration: 45, category: 'Extensions', blurb: 'UV powder extensions.', img: img.red },
  { id: 'uv-fill', name: 'UV Powder (Fill)', price: 55, duration: 45, category: 'Extensions', blurb: 'UV powder fill.', img: img.leo },
  { id: 'acry-full', name: 'Acrylic (Full Set)', price: 55, duration: 45, category: 'Extensions', blurb: 'Classic acrylic full set.', img: img.jewelry },
  { id: 'acry-fill', name: 'Acrylic (Fill)', price: 50, duration: 45, category: 'Extensions', blurb: 'Acrylic fill.', img: img.french },
  { id: 'dip', name: 'Dipping Powder', price: 50, duration: 50, category: 'Extensions', blurb: 'Dip powder strength + colour.', img: img.fluff },
  { id: 'remove', name: 'Extension Removal', price: 20, duration: 15, category: 'Other', blurb: 'Safe soak / remove.', img: img.work },
  { id: 'mani-classic', name: 'Classic Manicure', price: 25, duration: 20, category: 'Mani', blurb: 'Clean shape, polish, care.', img: img.french },
  { id: 'mani-sig', name: 'Signature Manicure', price: 35, duration: 30, category: 'Mani', blurb: 'Elevated classic with extra care.', img: img.mani },
  { id: 'shellac-mani', name: 'Shellac Manicure', price: 40, duration: 30, category: 'Mani', blurb: 'Chip-resistant gel colour.', img: img.red },
  { id: 'shellac-hand', name: 'Shellac On Hand', price: 30, duration: 20, category: 'Mani', blurb: 'Shellac colour only on hands.', img: img.floral },
  { id: 'pedi-classic', name: 'Classic Pedicure', price: 40, duration: 30, category: 'Pedi', blurb: 'Soak, shape, polish.', img: img.pedi },
  { id: 'pedi-deluxe', name: 'Deluxe Pedicure', price: 45, duration: 40, category: 'Pedi', blurb: 'Extra pamper time.', img: img.chairs },
  { id: 'pedi-sig', name: 'Signature Pedicure', price: 55, duration: 50, category: 'Pedi', blurb: 'Full signature foot ritual.', img: img.pedi },
  { id: 'shellac-feet', name: 'Shellac on Feet', price: 35, duration: 30, category: 'Pedi', blurb: 'Long-wear colour on toes.', img: img.fluff },
  { id: 'shellac-pedi', name: 'Shellac Pedicure', price: 55, duration: 50, category: 'Pedi', blurb: 'Pedicure + shellac finish.', img: img.chairs },
  { id: 'combo-classic', name: 'Classic Mani + Pedi', price: 60, duration: 60, category: 'Combos', blurb: 'Hands + feet classic.', img: img.jewelry },
  { id: 'combo-shellac', name: 'Shellac Pedi + Shellac Mani', price: 90, duration: 75, category: 'Combos', blurb: 'Full gel colour set.', img: img.mani },
  { id: 'combo-mix', name: 'Shellac Pedi + Classic Mani', price: 75, duration: 60, category: 'Combos', blurb: 'Best of both.', img: img.french },
  { id: 'lash-classic', name: 'Classic Lash', price: 85, duration: 60, category: 'Lashes', blurb: 'Natural classic set.', img: img.jewelry },
  { id: 'lash-hybrid', name: 'Hybrid Lash', price: 95, duration: 60, category: 'Lashes', blurb: 'Soft volume hybrid.', img: img.floral },
  { id: 'lash-volume', name: 'Volume Lash', price: 105, duration: 60, category: 'Lashes', blurb: 'Full glam volume.', img: img.leo },
  { id: 'wax-brow', name: 'Eyebrow Wax', price: 14, duration: 10, category: 'Wax', blurb: 'Quick clean brows.', img: img.work },
  { id: 'wax-bikini', name: 'Bikini Wax', price: 30, duration: 30, category: 'Wax', blurb: 'Bikini line.', img: img.work },
  { id: 'wax-face', name: 'Full Face Wax', price: 40, duration: 20, category: 'Wax', blurb: 'Full face finish.', img: img.work },
  { id: 'wax-brazilian', name: 'Brazilian Wax', price: 45, duration: 30, category: 'Wax', blurb: 'Brazilian.', img: img.work },
  { id: 'wax-back', name: 'Full Back Wax', price: 45, duration: 30, category: 'Wax', blurb: 'Full back.', img: img.work },
  { id: 'wax-leg', name: 'Full Leg Wax', price: 45, duration: 35, category: 'Wax', blurb: 'Full legs.', img: img.work },
  { id: 'wax-body', name: 'Whole Body Wax', price: 200, duration: 90, category: 'Wax', blurb: 'Full body session.', img: img.work },
]

export const categories = ['All', 'Extensions', 'Mani', 'Pedi', 'Combos', 'Lashes', 'Wax', 'Other'] as const

export const gallery = [
  { src: img.mani, alt: 'Pink nail art', tall: true },
  { src: img.french, alt: 'French manicure', tall: false },
  { src: img.red, alt: 'Red & white', tall: false },
  { src: img.floral, alt: 'Floral nails', tall: true },
  { src: img.leo, alt: 'Leopard print', tall: false },
  { src: img.jewelry, alt: 'French with jewelry', tall: false },
  { src: img.chairs, alt: 'Pedicure chairs', tall: false },
  { src: img.pedi, alt: 'Pedicure colour', tall: true },
  { src: img.fluff, alt: 'Red manicure', tall: false },
  { src: img.work, alt: 'In-chair work', tall: false },
]

export const beforeAfter = {
  before: img.work,
  after: img.mani,
}

export const reviews = [
  {
    name: 'IG guest',
    text: 'Bio gel lasted weeks — booking through DMs was the only hard part. A real site would help so much.',
  },
  {
    name: 'Hamilton regular',
    text: 'Shellac pedi + manicure combo is my treat. Always clean, always pretty.',
  },
  {
    name: 'First-timer',
    text: 'Hybrid lashes + brow wax same visit. Soft glam. Coming back.',
  },
]

export const promises = [
  {
    num: '01',
    title: 'Full menu, one chair',
    text: 'Extensions, shellac, pedis, lashes, wax — stop hopping salons.',
  },
  {
    num: '02',
    title: 'Hannon convenience',
    text: '2176 Rymal Rd E. Easy park. Open 7 days.',
  },
  {
    num: '03',
    title: 'Book without the DM chase',
    text: 'Pick a service, lock a time. Setmore-ready when you go live.',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/book', label: 'Book' },
  { to: '/contact', label: 'Contact' },
] as const
