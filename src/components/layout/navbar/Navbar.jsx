'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.06;
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className="navbar">
      <div className={`contact-bar ${isScrolled ? 'hidden' : ''}`}>
        <div className="contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>+0536 050002</span>
        </div>
        <div className="contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>melav@melav.it</span>
        </div>
      </div>
      
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            href="/" 
            className="nav-link"
            onClick={() => {
              setIsMenuOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            HOME
          </Link>
          <Link 
            href="/contattaci" 
            className="nav-link"
            onClick={() => {
              setIsMenuOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            CONTATTACI
          </Link>
          
          <div className="dropdown">
            <button 
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              INTERVENTI
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
              <Link 
                href="/interventi-in-sede"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                IN SEDE
              </Link>
              <Link 
                href="/interventi-in-loco"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                IN LOCO
              </Link>
            </div>
          </div>
        </div>
        
        <div className="logo-container">
          <Image 
            src="/images/mela.png" 
            alt="MELA SRL" 
            width={140}
            height={55}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </nav>
    </header>
  );
}