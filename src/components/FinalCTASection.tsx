'use client';

import React from 'react';
import { ArrowRight, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const FinalCTASection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.finalCta.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {language === 'th' 
              ? 'เราเข้าใจปัญหาของคุณและพร้อมให้ความช่วยเหลือด้วยประสบการณ์และความเชี่ยวชาญ' 
              : language === 'en'
              ? 'We understand your problems and are ready to help with our experience and expertise'
              : '我们理解您的问题，并准备用我们的经验和专业知识为您提供帮助'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              {language === 'th' ? 'ทำไมต้องเลือกเรา' : language === 'en' ? 'Why Choose Us' : '为什么选择我们'}
            </h3>
            <div className="space-y-4">
              {t.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-blue-100">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h4 className="text-xl font-semibold mb-4 text-center">
                {language === 'th' ? 'เริ่มต้นการปรึกษา' : language === 'en' ? 'Start Your Consultation' : '开始您的咨询'}
              </h4>
              <div className="space-y-4">
                <a
                  href="#booking"
                  className="w-full bg-white text-blue-900 py-4 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>{t.finalCta.cta1}</span>
                </a>
                <a
                  href="https://line.me/ti/p/~lawyer"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.finalCta.cta2}</span>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-4 text-center">
                {language === 'th' ? 'ติดต่อด่วน' : language === 'en' ? 'Quick Contact' : '快速联系'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-lg">+66 81 234 5678</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-lg">LINE: @lawyer</span>
                </div>
                <p className="text-center text-blue-100 text-sm">
                  {language === 'th' 
                    ? 'ตอบกลับภายใน 24 ชั่วโมง' 
                    : language === 'en'
                    ? 'Response within 24 hours'
                    : '24小时内回复'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              {language === 'th' ? 'ประสบการณ์ 20+ ปี' : language === 'en' ? '20+ Years Experience' : '20+ 年经验'}
            </h4>
            <p className="text-blue-100 text-sm">
              {language === 'th' 
                ? 'เชี่ยวชาญด้านคดีวีซ่าและ Blacklist' 
                : language === 'en'
                ? 'Specialized in visa and blacklist cases'
                : '专门从事签证和黑名单案件'
              }
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              {language === 'th' ? 'อัตราความสำเร็จ 95%' : language === 'en' ? '95% Success Rate' : '95% 成功率'}
            </h4>
            <p className="text-blue-100 text-sm">
              {language === 'th' 
                ? 'คดีที่ประสบความสำเร็จมากกว่า 500 คดี' 
                : language === 'en'
                ? 'Over 500 successful cases'
                : '超过500个成功案例'
              }
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              {language === 'th' ? 'บริการ 3 ภาษา' : language === 'en' ? '3 Language Service' : '3种语言服务'}
            </h4>
            <p className="text-blue-100 text-sm">
              {language === 'th' 
                ? 'ไทย-อังกฤษ-จีน' 
                : language === 'en'
                ? 'Thai-English-Chinese'
                : '泰语-英语-中文'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
