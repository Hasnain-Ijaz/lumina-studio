import { useState } from 'react'

const services = [
  { n: '01', t: 'Brand Identity', d: 'Logos, color systems and guidelines that make your brand instantly recognizable.' },
  { n: '02', t: 'Web Design', d: 'Modern, conversion-focused websites designed around your customers.' },
  { n: '03', t: 'Development', d: 'Fast, responsive React and Next.js builds with clean, scalable code.' },
  { n: '04', t: 'Product Strategy', d: 'Research and workshops that turn ideas into a clear product roadmap.' },
]

const projects = [
  { name: 'Verde Café', tag: 'Branding', bg: 'from-emerald-700 to-emerald-900', shape: 'rounded-full' },
  { name: 'Orbit Finance', tag: 'Web App', bg: 'from-indigo-600 to-violet-800', shape: 'rounded-3xl rotate-12' },
  { name: 'Sola Skincare', tag: 'E-commerce', bg: 'from-amber-500 to-orange-700', shape: 'rounded-t-full' },
  { name: 'Northwind Travel', tag: 'Website', bg: 'from-sky-600 to-cyan-800', shape: 'rounded-none rotate-45' },
]

const filters = ['All', 'Branding', 'Website', 'Web App', 'E-commerce']

const steps = [
  ['Discover', 'We learn about your goals, audience and competitors.'],
  ['Design', 'We create wireframes and polished visual designs.'],
  ['Build', 'We develop and test a fast, responsive website.'],
  ['Launch', 'We go live and support you as you grow.'],
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', budget: '$1k – $5k', message: '' })
  const [sent, setSent] = useState(false)
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center">
        <p className="text-5xl">✉️</p>
        <h3 className="mt-4 font-serif text-3xl">Thank you, {form.name.split(' ')[0]}!</h3>
        <p className="mt-2 text-stone-600">We will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="grid gap-4 rounded-3xl bg-white p-7 sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required value={form.name} onChange={update('name')} placeholder="Your name" className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-clay" />
        <input required type="email" value={form.email} onChange={update('email')} placeholder="Email address" className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-clay" />
      </div>
      <select value={form.budget} onChange={update('budget')} className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-clay">
        {['Under $1k', '$1k – $5k', '$5k – $15k', '$15k+'].map((b) => <option key={b}>{b}</option>)}
      </select>
      <textarea required rows="4" value={form.message} onChange={update('message')} placeholder="Tell us about your project" className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-clay" />
      <button className="rounded-full bg-ink py-4 font-semibold text-cream transition hover:bg-clay">Send message →</button>
    </form>
  )
}

export default function App() {
  const [menu, setMenu] = useState(false)
  const [filter, setFilter] = useState('All')
  const shown = projects.filter((p) => filter === 'All' || p.tag === filter)

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <a href="#" className="flex items-center gap-2 font-serif text-2xl">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-clay text-sm text-white">L</span>Lumina
        </a>
        <nav className="hidden gap-9 text-sm font-medium md:flex">
          {['Services', 'Work', 'Process', 'Contact'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-clay">{l}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-ink px-5 py-2.5 text-sm font-semibold transition hover:bg-ink hover:text-cream md:block">Start a project</a>
        <button aria-label="Menu" onClick={() => setMenu(!menu)} className="md:hidden">
          <span className="block h-0.5 w-6 bg-ink" /><span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </header>
      {menu && (
        <div className="px-5 pb-4 md:hidden">
          {['Services', 'Work', 'Process', 'Contact'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenu(false)} className="block border-b border-stone-300 py-3 font-medium">{l}</a>)}
        </div>
      )}

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">Creative design studio</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-7xl">We design brands people <em className="text-clay">remember.</em></h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">Lumina is a small, independent studio helping startups and growing businesses look great and work beautifully online.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="rounded-full bg-ink px-7 py-4 font-semibold text-cream transition hover:bg-clay">See our work</a>
            <a href="#contact" className="font-semibold underline decoration-clay decoration-2 underline-offset-4">Book a free call</a>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-clay" />
          <div className="absolute -bottom-4 left-0 h-40 w-40 sm:-left-4 rounded-3xl bg-ink" />
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-amber-300" />
          <svg viewBox="0 0 200 200" className="spin-slow absolute inset-6 text-cream">
            <defs><path id="c" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" /></defs>
            <text className="fill-current text-[15px] font-semibold uppercase tracking-[0.3em]"><textPath href="#c">Brand • Web • Product • Design •</textPath></text>
          </svg>
          <p className="absolute inset-0 grid place-items-center font-serif text-6xl text-cream">✦</p>
        </div>
      </section>

      <div className="border-y border-stone-300 bg-white/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 text-center md:grid-cols-4">
          {[['120+', 'Projects delivered'], ['9 yrs', 'In business'], ['98%', 'Happy clients'], ['14', 'Awards won']].map(([a, b]) => (
            <div key={b}><p className="font-serif text-4xl">{a}</p><p className="mt-1 text-sm text-stone-500">{b}</p></div>
          ))}
        </div>
      </div>

      <section id="services" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="max-w-xl font-serif text-4xl sm:text-5xl">Everything your brand needs, under one roof.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-stone-300 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.n} className="group bg-cream p-8 transition hover:bg-ink hover:text-cream">
              <p className="text-sm font-semibold text-clay">{s.n}</p>
              <h3 className="mt-3 font-serif text-2xl">{s.t}</h3>
              <p className="mt-2 leading-relaxed text-stone-600 group-hover:text-stone-300">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="bg-ink py-24 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl sm:text-5xl">Selected work</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm font-semibold ${filter === f ? 'bg-cream text-ink' : 'border border-stone-600 text-stone-300'}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {shown.map((p) => (
              <a key={p.name} href="#" className="group">
                <div className={`grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br ${p.bg}`}>
                  <div className={`h-28 w-28 bg-cream/90 transition duration-500 group-hover:scale-125 ${p.shape}`} />
                </div>
                <div className="mt-4 flex justify-between"><p className="font-serif text-2xl">{p.name}</p><p className="text-stone-400">{p.tag}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-serif text-4xl sm:text-5xl">How we work</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="border-t-2 border-ink pt-5">
              <p className="font-serif text-5xl text-clay">{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-stone-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl">Let's make something <em className="text-clay">great.</em></h2>
          <p className="mt-5 max-w-md text-lg text-stone-600">Tell us a little about your project and we will reply within one business day.</p>
          <p className="mt-8 font-semibold">hello@luminastudio.example</p>
          <p className="text-stone-500">Mon – Fri, 9am – 6pm</p>
        </div>
        <ContactForm />
      </section>

      <footer className="border-t border-stone-300">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-8 text-sm text-stone-500 sm:flex-row">
          <span>© 2026 Lumina Studio</span><span>Instagram · Dribbble · LinkedIn</span>
        </div>
      </footer>
    </div>
  )
}
