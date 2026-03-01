import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, actionLinks } from '../../data/nav-links';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click and Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="lg:hidden">
      {/* Hamburger toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slide-down panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-b border-border p-4 animate-slide-down">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg transition-colors duration-200"
                {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
            <a
              href={actionLinks.gamePanel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-center text-sm font-medium border border-border rounded-lg text-text-primary hover:border-brand-red/50 transition-colors cursor-pointer"
            >
              {actionLinks.gamePanel.label}
            </a>
            <a
              href={actionLinks.login.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-center text-sm font-medium bg-gradient-to-r from-brand-red to-brand-orange text-white rounded-lg hover:brightness-110 transition-all shadow-lg shadow-brand-red/25 cursor-pointer"
            >
              {actionLinks.login.label}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
