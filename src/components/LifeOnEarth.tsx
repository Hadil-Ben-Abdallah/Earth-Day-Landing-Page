import { Mountain, Waves, Bird, Flower2, Star, CloudRain } from 'lucide-react';

const wonders = [
  {
    icon: Mountain,
    title: 'My mountains',
    text: "I spent millions of years building those. Tectonic plates crashing together, rock folding on rock. And you just... hike up them with a backpack. Kind of adorable actually.",
    image: 'https://images.pexels.com/photos/8024626/pexels-photo-8024626.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Waves,
    title: 'My oceans',
    text: "97% of all my water. Home to more species than you've discovered yet. There are creatures down there that glow in the dark and have never seen the sun. Respect the mystery.",
    image: 'https://images.pexels.com/photos/13036176/pexels-photo-13036176.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flower2,
    title: 'My forests',
    text: "I've been growing forests for 385 million years. They talk to each other through underground networks. Turns out I invented the internet long before you did.",
    image: 'https://images.pexels.com/photos/14511722/pexels-photo-14511722.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Bird,
    title: 'My wildlife',
    text: "8.7 million species and counting. I never run out of ideas. Each one is a masterpiece. Even the ones that look a little strange, I was experimenting.",
    image: 'https://images.pexels.com/photos/12004885/pexels-photo-12004885.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Star,
    title: 'My skies',
    text: "From the Northern Lights to meteor showers to that perfect golden hour light, I'm basically running a free art gallery 24/7 and nobody even asks for a ticket.",
    image: 'https://images.pexels.com/photos/33891292/pexels-photo-33891292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: CloudRain,
    title: 'My seasons',
    text: "I change my outfit four times a year. Spring blooms, summer warmth, autumn colors, winter silence. I invented fashion. You're welcome.",
    image: 'https://images.pexels.com/photos/29038460/pexels-photo-29038460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function LifeOnEarth() {
  return (
    <section id="life-here" className="py-24 bg-[#001E23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sm font-medium text-[#1DF659] tracking-widest uppercase mb-4">
            Why living here is actually amazing
          </span>
          <h2 className="font-secular text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Life on Earth
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            I've put a lot of work into this place. 4.5 billion years of effort, to be precise.
            Here's what I'm most proud of.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wonders.map((wonder) => {
            const Icon = wonder.icon;
            return (
              <div
                key={wonder.title}
                className="group relative overflow-hidden rounded-2xl bg-[#00181C] border border-[#1DF659]/15 hover:border-[#1DF659]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={wonder.image}
                    alt={wonder.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00181C] via-[#00181C]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-9 h-9 rounded-xl bg-[#1DF659]/90 flex items-center justify-center">
                      <Icon size={17} className="text-[#00181C]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-secular text-xl text-white mb-3">{wonder.title}</h3>
                  <p className="font-inter text-white/60 text-sm leading-relaxed">{wonder.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-[#00181C] border border-[#1DF659]/20 rounded-2xl px-8 py-6">
            <p className="font-secular text-xl sm:text-2xl text-white mb-2">
              There are approximately{' '}
              <span className="text-[#1DF659]">8.7 million</span> species on me.
            </p>
            <p className="font-inter text-white/50 text-sm">
              You've discovered about 14% of them. The rest are still my little secret.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
