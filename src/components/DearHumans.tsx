import { Heart, AlertTriangle, Smile } from 'lucide-react';

const messages = [
  {
    icon: Heart,
    color: '#1DF659',
    title: 'I love you (mostly)',
    text: "Look, you've been living here rent-free for 300,000 years and I have zero complaints about that. You built art, music, pizza, and pizza genuinely impressed me. I love watching you explore, dream, and hug each other. Keep doing that.",
  },
  {
    icon: AlertTriangle,
    color: '#D30202',
    title: "But we need to talk",
    text: "Between the plastic in my oceans, the smoke in my skies, and cutting down my forests faster than I can grow them back... I'm a little concerned. I'm not trying to guilt-trip you. I'm just saying, I've been a good host. Maybe it's your turn to help tidy up?",
  },
  {
    icon: Smile,
    color: '#1DF659',
    title: "I still believe in you",
    text: "Here's the thing: you're the only species I've ever known that actually sits and thinks about how to fix its mistakes. That's remarkable. You invented solar panels, rewilding, composting, and electric cars. You're getting there. I can feel it. Literally.",
  },
];

export default function DearHumans() {
  return (
    <section id="dear-humans" className="py-24 bg-[#001E23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sm font-medium text-[#1DF659] tracking-widest uppercase mb-4">
            A letter from your home
          </span>
          <h2 className="font-secular text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Dear humans
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            I've been meaning to write this for a while. Pull up a comfy chair
            (preferably made from sustainably sourced wood) and read on.
          </p>
        </div>

        <div className="relative bg-[#00181C] border border-[#1DF659]/15 rounded-3xl p-8 md:p-12 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DF659]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D30202]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative">
            <p className="font-secular text-2xl sm:text-3xl text-white mb-6 leading-snug">
              "To the creatures who named me Earth, though I'd prefer{' '}
              <span className="text-[#1DF659]">Terra</span> — it sounds more elegant..."
            </p>
            <div className="space-y-4 font-inter text-white/65 text-base leading-relaxed max-w-3xl">
              <p>
                I've been orbiting the Sun since before your concept of time existed, and in all that
                eternity, nothing has surprised me quite like you. You're chaotic, brilliant, messy,
                inventive, and wonderfully weird.
              </p>
              <p>
                You've looked up at my skies and written poetry about my stars. You've dived into
                my deepest oceans just to understand what lives there. You've built cities that
                glow at night, and from space, they look like constellations of their own.
              </p>
              <p>
                I see all of it. And I want you to keep going. I just need you to remember,
                you don't have a backup planet. There's no <em>Earth 2.0</em> waiting in your inbox.
                This is it. We're it.
              </p>
              <p className="text-[#1DF659] font-medium">
                With all the love 4.5 billion years can hold,
                <br />
                <strong className="font-secular text-xl">Earth xo</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {messages.map((msg) => {
            const Icon = msg.icon;
            return (
              <div
                key={msg.title}
                className="bg-[#00181C] border border-[#1DF659]/15 rounded-2xl p-7 hover:border-[#1DF659]/35 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${msg.color}18` }}
                >
                  <Icon size={22} style={{ color: msg.color }} />
                </div>
                <h3 className="font-secular text-xl text-white mb-3">{msg.title}</h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">{msg.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
