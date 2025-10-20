'use client';

import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 truncate">
              ThailandBlacklistLawyer
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
              {language === 'th' ? 'ทนายความผู้เชี่ยวชาญด้าน Blacklist และวีซ่า' : 
               language === 'en' ? 'Specialist in Blacklist & Visa Cases' :
               '黑名单和签证案件专家'}
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              {t.nav.home}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              {t.nav.about}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              {t.nav.services}
            </a>
            <a href="#fees" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              {t.nav.fees}
            </a>
            <a href="#booking" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              {t.nav.booking}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Switcher & Contact */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Switcher - Hidden on very small screens */}
            <div className="hidden xs:flex space-x-1">
              <button
                onClick={() => setLanguage('th')}
                className={`px-1.5 py-1 text-xs rounded ${
                  language === 'th' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                ไทย
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-1 text-xs rounded ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-1.5 py-1 text-xs rounded ${
                  language === 'zh' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                中文
              </button>
            </div>

            {/* Contact Buttons - Hidden on mobile */}
            <div className="hidden sm:flex space-x-2">
              <a
                href="tel:+66812345678"
                className="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
              <a
                href="https://line.me/ti/p/~lawyer"
                className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600"
              >
                <MessageCircle className="w-4 h-4" />
                <span>LINE</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {/* Language Switcher for Mobile */}
              <div className="flex space-x-2 py-2 border-b border-gray-200">
                <button
                  onClick={() => setLanguage('th')}
                  className={`px-3 py-2 text-sm rounded ${
                    language === 'th' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  ไทย
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-2 text-sm rounded ${
                    language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-2 text-sm rounded ${
                    language === 'zh' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  中文
                </button>
              </div>

              {/* Navigation Links */}
              <a
                href="#home"
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={toggleMenu}
              >
                {t.nav.home}
              </a>
              <a
                href="#about"
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={toggleMenu}
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={toggleMenu}
              >
                {t.nav.services}
              </a>
              <a
                href="#fees"
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={toggleMenu}
              >
                {t.nav.fees}
              </a>
              <a
                href="#booking"
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={toggleMenu}
              >
                {t.nav.booking}
              </a>
              <a
                href="#contact"
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={toggleMenu}
              >
                {t.nav.contact}
              </a>

              {/* Contact Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href="tel:+66812345678"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg text-sm hover:bg-green-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://line.me/ti/p/~lawyer"
                  className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg text-sm hover:bg-blue-600"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>LINE Chat</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
