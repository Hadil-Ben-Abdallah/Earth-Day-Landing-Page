import { Zap, ShoppingBag, Trash2, TreePine, Car, Droplets, Recycle, Sun } from 'lucide-react';

const tips = [
  {
    icon: Sun,
    category: 'Energy',
    title: 'Switch to renewables',
    text: "The Sun has been running for 4.6 billion years and never sent me a bill. Take notes, fossil fuels.",
    level: 'Big impact',
    levelColor: '#D30202',
  },
  {
    icon: ShoppingBag,
    category: 'Shopping',
    title: 'Buy less, choose well',
    text: "Every time you say no to fast fashion, I hear it. And I do a little happy shimmy with my tectonic plates.",
    level: 'Medium impact',
    levelColor: '#0BD7D2',
  },
  {
    icon: Trash2,
    category: 'Waste',
    title: 'Reduce single-use plastic',
    text: "My oceans are not a landfill. They're a 5-star resort for fish. Please stop throwing things in the pool.",
    level: 'Big impact',
    levelColor: '#D30202',
  },
  {
    icon: TreePine,
    category: 'Nature',
    title: 'Plant a tree',
    text: "Trees are my lungs. Every one you plant is basically a deep breath I didn't know I needed. Thank you.",
    level: 'Big impact',
    levelColor: '#D30202',
  },
  {
    icon: Car,
    category: 'Transport',
    title: 'Walk, bike, or carpool',
    text: "Your legs are incredible machines that require zero fossil fuels. I designed them myself. Use them.",
    level: 'Medium impact',
    levelColor: '#0BD7D2',
  },
  {
    icon: Droplets,
    category: 'Water',
    title: 'Save water daily',
    text: "Only 3% of my water is fresh. I made it a limited edition. Please don't waste the limited edition.",
    level: 'Easy start',
    levelColor: '#1DF659',
  },
  {
    icon: Recycle,
    category: 'Waste',
    title: 'Compost & recycle',
    text: "Composting is basically me recycling. You're just helping me do my job. We're a team on this one.",
    level: 'Easy start',
    levelColor: '#1DF659',
  },
  {
    icon: Zap,
    category: 'Energy',
    title: 'Unplug & power down',
    text: "That little red standby light uses more energy than you think. I see it. It haunts me at night.",
    level: 'Easy start',
    levelColor: '#1DF659',
  },
];

export default function ProtectEarth() {
  return (
    <section id="protect-me" className="py-24 bg-[#00181C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sm font-medium text-[#1DF659] tracking-widest uppercase mb-4">
            Earth's personal wishlist
          </span>
          <h2 className="font-secular text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            How to protect me
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm not high-maintenance. I just have a few requests. Totally reasonable ones.
            Listed below, in order of "please do this immediately" to "this would also be nice."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="group bg-[#001E23] border border-[#1DF659]/15 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#1DF659]/40 hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#1DF659]/12 flex items-center justify-center group-hover:bg-[#1DF659]/20 transition-colors">
                    <Icon size={20} className="text-[#1DF659]" />
                  </div>
                  <span
                    className="font-inter text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      color: tip.levelColor,
                      backgroundColor: `${tip.levelColor}18`,
                    }}
                  >
                    {tip.level}
                  </span>
                </div>
                <div>
                  <span className="font-inter text-xs text-[#1DF659]/60 font-medium uppercase tracking-wider">
                    {tip.category}
                  </span>
                  <h3 className="font-secular text-lg text-white mt-1 mb-2">{tip.title}</h3>
                  <p className="font-inter text-white/55 text-sm leading-relaxed">{tip.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1DF659]/15 via-[#1DF659]/10 to-[#1DF659]/5 border border-[#1DF659]/25 rounded-2xl p-8 text-center">
          <p className="font-secular text-2xl sm:text-3xl text-white mb-3">
            "Every small action adds up to something enormous."
          </p>
          <p className="font-inter text-white/55 text-base">
            Signed, the planet that survived five mass extinctions and still believes in you
          </p>
        </div>
      </div>
    </section>
  );
}
