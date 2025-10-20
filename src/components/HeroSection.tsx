'use client';

import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="block mb-2">
                  {language === 'th' ? 'แก้ปัญหา Blacklist' : language === 'en' ? 'Blacklist Removal' : '黑名单移除'}
                </span>
                <span className="block text-yellow-300">
                  {language === 'th' ? 'และอุทธรณ์คำสั่งปฏิเสธวีซ่า' : language === 'en' ? '& Visa Appeal' : '和签证上诉'}
                </span>
                <span className="block text-blue-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                  {language === 'th' ? 'ในประเทศไทย' : language === 'en' ? 'in Thailand' : '在泰国'}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="text-lg">{t.hero.cta1}</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://line.me/ti/p/~lawyer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <MessageCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-lg">{t.hero.cta2}</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">20+</div>
                <div className="text-blue-100 font-medium">
                  {language === 'th' ? 'ปีประสบการณ์' : language === 'en' ? 'Years Experience' : '年经验'}
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-blue-100 font-medium">
                  {language === 'th' ? 'คดีที่ประสบความสำเร็จ' : language === 'en' ? 'Successful Cases' : '成功案例'}
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
                <div className="text-blue-100 font-medium">
                  {language === 'th' ? 'อัตราความสำเร็จ' : language === 'en' ? 'Success Rate' : '成功率'}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-3xl">⚖️</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {language === 'th' ? 'ดร. สุทัศน์ ขำวิไล' : language === 'en' ? 'Dr. Sutus Kumvilai' : '苏图斯·库姆维莱博士'}
                  </h3>
                  <p className="text-blue-100 text-lg font-medium">
                    {language === 'th' 
                      ? 'ทนายความผู้เชี่ยวชาญด้านคดีวีซ่าและ Blacklist' 
                      : language === 'en'
                      ? 'Specialist in Visa & Blacklist Cases'
                      : '签证和黑名单案件专家'
                    }
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-white font-medium">
                      {language === 'th' ? 'เลขทะเบียนทนายความ: 1738/2544' : language === 'en' ? 'Attorney License: 1738/2544' : '律师执照: 1738/2544'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-white font-medium">
                      {language === 'th' ? 'ประสบการณ์กว่า 20 ปี' : language === 'en' ? '20+ Years Experience' : '20+ 年经验'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-white font-medium">
                      {language === 'th' ? 'บริการภาษาไทย-อังกฤษ' : language === 'en' ? 'Bilingual Service' : '双语服务'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
