'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ThailandBlacklistLawyer</h3>
            <p className="text-gray-300 mb-4">
              {language === 'th' 
                ? 'ทนายความผู้เชี่ยวชาญด้านการแก้ไข Blacklist และอุทธรณ์วีซ่าในประเทศไทย' 
                : language === 'en'
                ? 'Specialist in Blacklist Removal and Visa Appeals in Thailand'
                : '泰国黑名单移除和签证上诉专家'
              }
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+66 81 234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@thailandblacklistlawyer.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>
                  {language === 'th' 
                    ? 'สำนักงานทนายความ กรุงเทพมหานคร' 
                    : language === 'en'
                    ? 'Law Office, Bangkok, Thailand'
                    : '律师事务所，泰国曼谷'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'th' ? 'ลิงก์ด่วน' : language === 'en' ? 'Quick Links' : '快速链接'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">{t.nav.home}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">{t.nav.about}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">{t.nav.services}</a></li>
              <li><a href="#fees" className="text-gray-300 hover:text-white">{t.nav.fees}</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-white">{t.nav.booking}</a></li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'th' ? 'เวลาทำการ' : language === 'en' ? 'Office Hours' : '办公时间'}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <p className="text-gray-300">
                    {language === 'th' 
                      ? 'จันทร์ - ศุกร์: 9:00 - 18:00' 
                      : language === 'en'
                      ? 'Mon - Fri: 9:00 - 18:00'
                      : '周一 - 周五: 9:00 - 18:00'
                    }
                  </p>
                  <p className="text-gray-300">
                    {language === 'th' 
                      ? 'เสาร์: 9:00 - 12:00' 
                      : language === 'en'
                      ? 'Sat: 9:00 - 12:00'
                      : '周六: 9:00 - 12:00'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 ThailandBlacklistLawyer. {language === 'th' ? 'สงวนลิขสิทธิ์' : language === 'en' ? 'All rights reserved' : '版权所有'}.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                {language === 'th' ? 'นโยบายความเป็นส่วนตัว' : language === 'en' ? 'Privacy Policy' : '隐私政策'}
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                {language === 'th' ? 'ข้อกำหนดการใช้งาน' : language === 'en' ? 'Terms of Service' : '服务条款'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
