import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Meet me', href: '#meet-earth' },
  { label: 'Dear humans', href: '#dear-humans' },
  { label: 'Protect me', href: '#protect-me' },
  { label: 'Life here', href: '#life-here' },
  { label: 'Earth stats', href: '#earth-stats' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll(); // run once
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${scrolled
        ? 'bg-[#00181C]/60 border-[#1DF659]/10 shadow-lg shadow-black/30'
        : 'bg-[#00181C]/0 border-transparent shadow-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.webp"
              alt="Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <span className="block font-secular text-[#1DF659] text-sm leading-tight">THERE IS <span className="text-[#D30202]">NO</span></span>
              <span className="block font-secular text-white text-sm leading-tight">PLANET <span className="text-[#1DF659]">B</span></span>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 font-inter text-sm font-medium text-white/80 hover:text-[#1DF659] transition-colors duration-200 rounded-lg hover:bg-[#1DF659]/10"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNavClick('#join-cause')}
            className="hidden md:flex items-center gap-2 bg-[#1DF659]  text-[#00181C] font-inter font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-md "
          >
            Save Earth
          </button>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#00181C]/98 border-t border-[#1DF659]/10">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 font-inter text-base text-white/80 hover:text-[#1DF659] hover:bg-[#1DF659]/10 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNavClick('#join-cause')}
                className="w-full bg-[#1DF659] hover:bg-[#1DF659] text-[#00181C] font-inter font-semibold py-3 rounded-full transition-colors"
              >
                Save Earth
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
