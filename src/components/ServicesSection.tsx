'use client';

import React from 'react';
import { Shield, FileText, Clock, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [Shield, FileText, Clock, Briefcase];

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t.services.title}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            {language === 'th' 
              ? 'บริการทางกฎหมายที่ครอบคลุมและเชี่ยวชาญเฉพาะด้าน พร้อมประสบการณ์กว่า 20 ปี' 
              : language === 'en'
              ? 'Comprehensive and specialized legal services with over 20 years of experience'
              : '全面专业的法律服务，拥有20多年经验'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full hover:-translate-y-2 min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 leading-tight min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center text-center">
                      <span className="break-words hyphens-auto">{service.title}</span>
                    </h3>
                    <p className="text-gray-600 flex-grow leading-relaxed text-xs sm:text-sm mb-4 sm:mb-6 min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center text-center">
                      <span className="break-words hyphens-auto">{service.description}</span>
                    </p>
                    <div className="mt-auto w-full">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                            <p className="text-xs text-blue-800 font-medium leading-relaxed">
                              {language === 'th' 
                                ? 'วิเคราะห์คดีเชิงลึก' 
                                : language === 'en'
                                ? 'In-depth case analysis'
                                : '深度案例分析'
                              }
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                            <p className="text-xs text-blue-800 font-medium leading-relaxed">
                              {language === 'th' 
                                ? 'กลยุทธ์เฉพาะสำหรับแต่ละคดี' 
                                : language === 'en'
                                ? 'Case-specific strategy'
                                : '针对具体案例的策略'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-10 max-w-5xl mx-auto shadow-lg border border-blue-100">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'th' 
                  ? 'ทำไมต้องเลือกเรา' 
                  : language === 'en'
                  ? 'Why Choose Us'
                  : '为什么选择我们'
                }
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {t.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors duration-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
