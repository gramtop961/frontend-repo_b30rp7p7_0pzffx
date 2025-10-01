import { useState } from 'react';
import { Leaf } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#offerings', label: 'Offerings' },
    { href: '#events', label: 'Events' },
    { href: '#instagram', label: 'Instagram' },
    { href: '#join', label: 'Join' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-b from-green-600 to-green-700 text-white shadow">
              <Leaf size={18} />
            </span>
            <span className="font-semibold text-stone-800">GreenRoot Co-op</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-stone-700 hover:text-green-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className="inline-flex items-center rounded-md bg-amber-700 text-white px-4 py-2 text-sm font-medium shadow hover:bg-amber-800 transition-colors"
            >
              Join the Co-op
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-green-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-stone-700 hover:bg-stone-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md bg-amber-700 text-white text-center"
            >
              Join the Co-op
            </a>
          </div>
        )}
      </div>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-amber-50 to-white" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
                Growing food, soil, and community in the city
              </h1>
              <p className="mt-4 text-lg text-stone-700 max-w-prose">
                We are a member-led urban farming co-op offering hands-on workshops, seasonal produce
                boxes, and community compost drop-offs. Join us in building a resilient, hyperlocal food system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#offerings"
                  className="inline-flex items-center rounded-md bg-green-700 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
                >
                  Explore Offerings
                </a>
                <a
                  href="#events"
                  className="inline-flex items-center rounded-md bg-amber-700 text-white px-5 py-3 font-medium shadow hover:bg-amber-800"
                >
                  Upcoming Events
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-600 to-amber-700 opacity-10 absolute -inset-6" aria-hidden="true" />
              <img
                src="https://images.unsplash.com/photo-1561043433-aaf687c4cf4e?q=80&w=1200&auto=format&fit=crop"
                alt="Hands holding fresh greens harvested from an urban garden"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
