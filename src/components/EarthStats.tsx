import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 4500000000,
    display: '4.5B',
    unit: 'years old',
    label: 'My age',
    note: 'Older than the concept of old',
    color: '#1DF659',
  },
  {
    value: 8700000,
    display: '8.7M',
    unit: 'species',
    label: 'Living on me',
    note: 'And I love every single one',
    color: '#1DF659',
  },
  {
    value: 71,
    display: '71%',
    unit: 'ocean coverage',
    label: "I'm mostly water",
    note: 'Basically a very large fish tank',
    color: '#1DF659',
  },
  {
    value: 8000000000,
    display: '8B+',
    unit: 'humans',
    label: 'My human guests',
    note: 'The most interesting accident of evolution',
    color: '#1DF659',
  },
  {
    value: 3000000000000,
    display: '3T+',
    unit: 'trees',
    label: 'My lungs',
    note: 'Please stop cutting them down',
    color: '#1DF659',
  },
  {
    value: 195,
    display: '195',
    unit: 'countries',
    label: 'Human divisions on me',
    note: 'I still see one family',
    color: '#1DF659',
  },
];

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`bg-[#001E23] border border-[#1DF659]/15 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#1DF659]/40 hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      <div
        className="font-secular text-4xl sm:text-5xl mb-1 transition-all duration-500"
        style={{ color: stat.color }}
      >
        {stat.display}
      </div>
      <div className="font-inter text-white/40 text-xs uppercase tracking-wider mb-3">
        {stat.unit}
      </div>
      <div className="font-secular text-lg text-white mb-2">{stat.label}</div>
      <div className="font-inter text-white/45 text-xs leading-relaxed italic">{stat.note}</div>
    </div>
  );
}

export default function EarthStats() {
  return (
    <section id="earth-stats" className="py-24 bg-[#00181C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sm font-medium text-[#1DF659] tracking-widest uppercase mb-4">
            By the numbers
          </span>
          <h2 className="font-secular text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Earth in numbers
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-xl mx-auto">
            Some stats about me. I calculated them myself. Using plate tectonics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-[#D30202]/10 border border-[#D30202]/25 rounded-2xl p-7">
            <div className="font-secular text-[#D30202] text-3xl mb-2">150+</div>
            <div className="font-secular text-white text-lg mb-2">Species lost every day</div>
            <p className="font-inter text-white/55 text-sm leading-relaxed">
              Every single day, roughly 150 species go extinct. These are creatures I spent millions of
              years perfecting. Each loss is a story that will never be told again.
            </p>
          </div>
          <div className="bg-[#1DF659]/10 border border-[#1DF659]/25 rounded-2xl p-7">
            <div className="font-secular text-[#1DF659] text-3xl mb-2">100%</div>
            <div className="font-secular text-white text-lg mb-2">Reversible (if we start now)</div>
            <p className="font-inter text-white/55 text-sm leading-relaxed">
              I've recovered from ice ages, asteroid impacts, and volcanic winters. With your help,
              I can recover from this too. You just have to actually mean it this time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
