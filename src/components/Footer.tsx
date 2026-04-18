import { Github, Twitter, Heart, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: "Quick links",
    links: [
      { label: 'Meet me', href: '#meet-earth' },
      { label: 'Dear humans', href: '#dear-humans' },
      { label: 'Protect me', href: '#protect-me' },
      { label: 'Life here', href: '#life-here' },
      { label: 'Earth stats', href: '#earth-stats' },
    ],
  },
  {
    title: 'Real resources',
    links: [
      { label: 'Earth day network', href: '#' },
      { label: 'WWF conservation', href: '#' },
      { label: 'UN environment', href: '#' },
      { label: 'Greenpeace', href: '#' },
      { label: 'Carbon footprint calculator', href: '#' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Make your pledge', href: '#join-cause' },
      { label: 'Plant a tree today', href: '#' },
      { label: 'Local clean-ups', href: '#' },
      { label: 'Support rewilding', href: '#' },
      { label: "Share Earth's story", href: '#' },
    ],
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#000E10] border-t border-[#1DF659]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="There Is No Planet B" className="h-12 w-12 object-contain" />
              <div>
                <span className="block font-secular text-[#1DF659] text-sm leading-tight">THERE IS <span className="text-[#D30202]">NO</span></span>
                <span className="block font-secular text-white text-sm leading-tight">PLANET <span className="text-[#1DF659]">B</span></span>
              </div>
            </div>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">
              A love letter from Earth to her most complicated, creative, and occasionally infuriating residents. That's you, humans. We're rooting for you.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: 'Linkedin', href: 'https://www.linkedin.com/in/hadil-ben-abdallah/' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/Hadil-Ben-Abdallah' },
                { icon: Twitter, label: 'Twitter', href: 'https://x.com/hadilbnabdallah' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#1DF659]/10 border border-[#1DF659]/20 flex items-center justify-center text-white/50 hover:text-[#1DF659] hover:border-[#1DF659]/50 hover:bg-[#1DF659]/15 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-secular text-white text-base mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-inter text-sm text-white/45 hover:text-[#1DF659] transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1DF659]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/35 text-sm text-center sm:text-left">
            Made with <Heart size={12} className="inline text-[#D30202] mx-1" /> by <a
              className="text-[#1DF659] relative inline-block group"
              href="https://dev.to/hadil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hadil Ben Abdallah
              <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-[#1DF659] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a> — Built for the DEV Weekend Challenge
          </p>
          <p className="font-inter text-white/25 text-xs">
            "THERE IS NO PLANET B" and that's the whole point.
          </p>
        </div>
      </div>
    </footer>
  );
}
