// import { ArrowDown } from 'lucide-react';

// export default function Hero() {
//   const scrollToMeet = () => {
//     const el = document.querySelector('#meet-earth');
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#00181C]">
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: 'url(/hero.png)' }}
//       />
//       {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00181C]/80 via-[#00181C]/40 to-[#00181C]/60" /> */}
//       {/* <div className="absolute inset-0 bg-gradient-to-t from-[#00181C] via-transparent to-[#00181C]/20" /> */}

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
//         <div className="max-w-3xl">
//           {/* <div className="inline-flex items-center gap-2 bg-[#1DF659]/15 border border-[#1DF659]/30 rounded-full px-4 py-2 mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#1DF659] animate-pulse" />
//             <span className="font-inter text-sm text-[#1DF659] font-medium">Earth Day — April 22</span>
//           </div> */}

//           {/* <h1 className="font-secular text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
//             Save our
//             <br />
//             <span className="text-[#1DF659]">Earth</span>
//           </h1> */}

//           {/* <p className="font-inter text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
//             Hi there. I'm Earth — you know, that big blue-green marble you call home?
//             I've been around for 4.5 billion years and I have a few things I'd like to say.
//             Grab a seat. Or a plant. Either works for me.
//           </p> */}

//           {/* <div className="flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={scrollToMeet}
//               className="inline-flex items-center justify-center gap-2 bg-[#1DF659] hover:bg-[#1DF659] text-[#00181C] font-inter font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#1DF659]/25"
//             >
//               Meet Me First
//             </button>
//             <button
//               onClick={() => {
//                 const el = document.querySelector('#protect-me');
//                 if (el) el.scrollIntoView({ behavior: 'smooth' });
//               }}
//               className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#1DF659] text-white hover:text-[#1DF659] font-inter font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-[#1DF659]/10"
//             >
//               How to Help
//             </button>
//           </div> */}
//         </div>
//       </div>

//       <button
//         onClick={scrollToMeet}
//         className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-[#1DF659] transition-colors group"
//       >
//         <span className="font-inter text-xs tracking-widest uppercase">Scroll Down</span>
//         <ArrowDown size={20} className="animate-bounce" />
//       </button>
//     </section>
//   );
// }





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
