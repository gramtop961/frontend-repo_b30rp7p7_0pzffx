import { Sprout, Box, Recycle } from 'lucide-react';

export default function Offerings() {
  const offerings = [
    {
      icon: Sprout,
      title: 'Workshops',
      desc:
        'Hands-on learning for all levels: soil health, balcony gardening, seed saving, and more. Led by co-op growers and guest educators.',
    },
    {
      icon: Box,
      title: 'Produce Boxes',
      desc:
        'Seasonal, ultra-fresh harvests from our urban plots. Sliding-scale CSA shares and pay-it-forward options to increase access.',
    },
    {
      icon: Recycle,
      title: 'Compost Drop-off',
      desc:
        'Turn your food scraps into living soil. Weekly neighborhood drop-offs with clean bucket swaps for members.',
    },
  ];

  return (
    <section id="offerings" className="py-16 sm:py-24 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">What we offer</h2>
          <p className="mt-3 text-stone-700">
            Programs that nourish people and planet. Designed for apartment dwellers, backyard growers,
            and curious neighbors alike.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-amber-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-700 text-white shadow">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">{title}</h3>
              <p className="mt-2 text-stone-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
