import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Flame } from 'lucide-react';
import { GYM_DETAILS, gymAssetImages } from '../data/gymData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trainer', href: '#trainer' },
    { name: 'Monday Challenge', href: '#challenge', badge: 'HOT' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-red-600/30 py-3 shadow-xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
          id="nav-logo-link"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-red-600 to-red-900 border border-red-500/40 group-hover:scale-105 transition-transform duration-300">
            <img
              src={gymAssetImages.logo}
              alt="F3 Gym Logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-wider text-white block leading-none">
              F3 <span className="text-red-600">UNISEX</span>
            </span>
            <span className="text-[10px] tracking-widest text-red-500 font-bold uppercase flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              24/7 AGRA GYM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-lg flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-red-600/20 border border-red-600/50 shadow-sm shadow-red-600/30'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="bg-gradient-to-r from-red-600 to-amber-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-0.5">
                    <Flame className="w-2.5 h-2.5" />
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20I%20want%20to%20know%20about%20membership%20and%20offers!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
            id="nav-whatsapp-btn"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Join 24/7
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${GYM_DETAILS.phone}`}
            className="p-2 text-red-500 bg-red-950/60 border border-red-800/40 rounded-lg"
            aria-label="Call Gym"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-red-900/50 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg font-heading text-lg font-semibold tracking-wider flex items-center justify-between ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-neutral-200 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded-full uppercase">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20F3%20Gym,%20I%20want%20to%20join%20now!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-center rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-center rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Gym: {GYM_DETAILS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
