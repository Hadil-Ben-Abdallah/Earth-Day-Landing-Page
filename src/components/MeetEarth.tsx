import { Globe, Wind, Droplets, Flame } from 'lucide-react';

const facts = [
  {
    icon: Globe,
    title: 'My size',
    text: "I'm 12,742 km wide. Big enough to lose your car keys in, honestly.",
  },
  {
    icon: Droplets,
    title: 'My water',
    text: "71% of me is ocean. I basically invented 'going with the flow' before it was cool.",
  },
  {
    icon: Wind,
    title: 'My breath',
    text: "My atmosphere is 78% nitrogen & 21% oxygen. You're welcome for the breathing thing.",
  },
  {
    icon: Flame,
    title: 'My core',
    text: "My inner core is as hot as the Sun's surface. I'm literally that hot.",
  },
];

const timeline = [
  { year: '4.5B years ago', event: 'I was born. It was a rough start, lots of lava, no Wi-Fi.' },
  { year: '3.8B years ago', event: 'First life appeared. Tiny little bacteria. Humble beginnings.' },
  { year: '230M years ago', event: 'Dinosaurs showed up. Big personalities, small brains. Fun era.' },
  { year: '300K years ago', event: 'Humans arrived. The jury is still out on this one.' },
  { year: 'Today', event: "We're here together. Let's make it work, yeah?" },
];

export default function MeetEarth() {
  return (
    <section id="meet-earth" className="py-24 bg-[#00181C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sm font-medium text-[#1DF659] tracking-widest uppercase mb-4">
            Allow me to introduce myself
          </span>
          <h2 className="font-secular text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Who am I?
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Oh, just a humble rocky planet orbiting a medium-sized star. Fourth largest in the Solar System.
            First in hospitality. No big deal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#001E23] border border-[#1DF659]/15 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1DF659]/15 flex items-center justify-center">
                <span className="text-[#1DF659] text-lg">👋🏼</span>
              </div>
              <h3 className="font-secular text-2xl text-white">Hi, I'm Earth</h3>
            </div>
            <div className="space-y-4 font-inter text-white/70 leading-relaxed text-base">
              <p>
                People call me Terra, Gaia, the Blue Marble. I've had more nicknames than a rockstar.
                I'm 4.5 billion years old and honestly, I've never felt better... well, mostly.
              </p>
              <p>
                I started out as a fiery ball of chaos, which, between you and me, was kind of exciting.
                Then I cooled down, grew some oceans, invented photosynthesis (my personal favorite achievement),
                and eventually decided to let life try its hand at things.
              </p>
              <p>
                I've survived five mass extinctions, a few ice ages, and the dinosaurs. I'm tough. But
                even I appreciate a little help now and then.
              </p>
              <p className="text-[#1DF659] font-medium italic">
                "I'm not asking for much. Just... stop lighting me on fire, okay?" Earth, probably
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.title}
                  className="bg-[#001E23] border border-[#1DF659]/15 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#1DF659]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1DF659]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#1DF659]" />
                  </div>
                  <h4 className="font-secular text-white text-lg">{fact.title}</h4>
                  <p className="font-inter text-white/60 text-sm leading-relaxed">{fact.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div id="my-story" className="pt-4">
          <div className="text-center mb-12">
            <h2 className="font-secular text-3xl sm:text-4xl text-white mb-3">
              My life story
            </h2>
            <p className="font-inter text-white/50 text-base">
              A condensed version. The full version is 4.5 billion years long.
            </p>
          </div>

          {/* NEW LAYOUT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT → TIMELINE */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#1DF659] via-[#1DF659]/50 to-transparent" />

              <div className="space-y-5">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative flex items-center">

                    {/* LEFT CARD */}
                    <div className={`w-1/2 pr-8 ${i % 2 !== 0 && 'opacity-0'}`}>
                      {i % 2 === 0 && (
                        <div className="bg-[#001E23] border border-[#1DF659]/20 rounded-xl p-5  hover:border-[#1DF659]/50 transition-colors">
                          <span className="block font-secular text-[#1DF659] text-sm mb-1">
                            {item.year}
                          </span>
                          <p className="font-inter text-white/70 text-sm leading-relaxed">
                            {item.event}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* DOT */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1DF659] shadow-[0_0_10px_#1DF659]" />

                    {/* RIGHT CARD */}
                    <div className={`w-1/2 pl-8 ${i % 2 === 0 && 'opacity-0'}`}>
                      {i % 2 !== 0 && (
                        <div className="bg-[#001E23] border border-[#1DF659]/20 rounded-xl p-5 hover:border-[#1DF659]/50 transition-colors">
                          <span className="block font-secular text-[#1DF659] text-sm mb-1">
                            {item.year}
                          </span>
                          <p className="font-inter text-white/70 text-sm leading-relaxed">
                            {item.event}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-center">
              <img
                src="/earth.gif"
                alt="Earth animation"
                className="w-full max-w-md"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
