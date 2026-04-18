import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToMeet = () => {
    const el = document.querySelector('#meet-earth');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#00181C]">
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet="/hero-xs.webp" media="(max-width: 800px)" />
        <source srcSet="/hero-s.webp" media="(max-width: 899px)" />
        <source srcSet="/hero.webp" media="(min-width: 900px)" />
        <img
          src="/hero.webp"
          alt="earth image in form of a woman"
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* your content */}
        </div>
      </div>

      <button
        onClick={scrollToMeet}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-[#1DF659] transition-colors group"
      >
        <span className="font-inter text-xs tracking-widest uppercase">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
