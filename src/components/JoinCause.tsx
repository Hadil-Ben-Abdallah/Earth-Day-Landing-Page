import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const pledges = [
  "I'll reduce my plastic use starting today",
  "I'll plant at least one tree this year",
  "I'll choose walking or cycling when I can",
  "I'll think twice before buying something new",
  "I'll spread the word about Earth's story",
];

export default function JoinCause() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const toggle = (pledge: string) => {
    setSelected((prev) =>
      prev.includes(pledge) ? prev.filter((p) => p !== pledge) : [...prev, pledge]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selected.length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="join-cause" className="py-24 bg-[#001E23] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1DF659]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#1DF659]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block font-inter text-sm font-medium text-[#1DF659] tracking-widest uppercase mb-4">
          Be Earth's hero
        </span>
        <h2 className="font-secular text-4xl sm:text-5xl md:text-6xl text-white mb-6">
          Make your pledge
        </h2>
        <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          I, Earth, am officially asking for your commitment. No forms in triplicate. No bureaucracy.
          Just you, choosing to show up for me. Pick your pledges below.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-[#00181C] border border-[#1DF659]/20 rounded-3xl p-8 md:p-10 text-left">
            <h3 className="font-secular text-2xl text-white mb-6 text-center">
              I pledge to...
            </h3>

            <div className="space-y-3 mb-8">
              {pledges.map((pledge) => {
                const isSelected = selected.includes(pledge);
                return (
                  <button
                    key={pledge}
                    type="button"
                    onClick={() => toggle(pledge)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left group ${isSelected
                      ? 'border-[#1DF659] bg-[#1DF659]/12 text-white'
                      : 'border-white/10 bg-transparent text-white/60 hover:border-[#1DF659]/40 hover:text-white/80 hover:bg-[#1DF659]/5'
                      }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? 'border-[#1DF659] bg-[#1DF659]' : 'border-white/30'
                        }`}
                    >
                      {isSelected && (
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                          <path d="M1 3.5L3.5 6L9 1" stroke="#00181C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="font-inter text-sm sm:text-base">{pledge}</span>
                  </button>
                );
              })}
            </div>

            <div className="mb-6">
              <label className="block font-inter text-sm text-white/60 mb-2">
                Your email, so I can send you little Earth updates
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@earthfriend.com"
                className="w-full bg-[#001E23] border border-white/15 rounded-xl px-4 py-3 font-inter text-white placeholder-white/30 focus:outline-none focus:border-[#1DF659] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={selected.length === 0 || !email}
              className="w-full flex items-center justify-center gap-3 bg-[#1DF659] hover:bg-[#1DF659] disabled:opacity-40 disabled:cursor-not-allowed text-[#00181C] font-inter font-semibold text-base py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#1DF659]/20"
            >
              Make my pledge <ArrowRight size={18} />
            </button>

            {selected.length === 0 && (
              <p className="text-center font-inter text-xs text-white/35 mt-3">
                Select at least one pledge above
              </p>
            )}
          </form>
        ) : (
          <div className="bg-[#00181C] border border-[#1DF659]/30 rounded-3xl p-10 md:p-14 text-center">
            <CheckCircle2 size={56} className="text-[#1DF659] mx-auto mb-6" />
            <h3 className="font-secular text-3xl text-white mb-4">Earth Says Thank You!</h3>
            <p className="font-inter text-white/60 text-base leading-relaxed max-w-md mx-auto mb-6">
              You just made {selected.length} pledge{selected.length > 1 ? 's' : ''} to one very grateful planet.
              I felt it. Seriously, I did. There was a small tremor in my crust. That was me, happy.
            </p>
            <div className="space-y-2 text-left max-w-sm mx-auto mb-8">
              {selected.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#1DF659] flex-shrink-0" />
                  <span className="font-inter text-white/70 text-sm">{p}</span>
                </div>
              ))}
            </div>
            <p className="font-inter text-[#1DF659] text-sm font-medium">
              Share this with a friend. The more the merrier, literally, for my entire ecosystem.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
