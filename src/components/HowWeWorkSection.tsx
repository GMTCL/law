'use client';

import React from 'react';
import { Search, Brain, Target, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const HowWeWorkSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [Search, Brain, Target, CheckCircle];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.howWeWork.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'th' 
              ? 'กระบวนการทำงานที่โปร่งใสและมีประสิทธิภาพ' 
              : language === 'en'
              ? 'Transparent and efficient working process'
              : '透明高效的工作流程'
            }
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {t.howWeWork.steps.map((step, index) => {
              const IconComponent = icons[index];
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-20">
                    {index + 1}
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 mt-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'th' 
                ? 'การติดตามผลอย่างต่อเนื่อง' 
                : language === 'en'
                ? 'Continuous Follow-up'
                : '持续跟进'
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'th' 
                ? 'เราจะติดตามความคืบหน้าของคดีและแจ้งให้ทราบเป็นระยะๆ จนกว่าจะเสร็จสิ้น' 
                : language === 'en'
                ? 'We will track case progress and provide regular updates until completion'
                : '我们将跟踪案件进展并定期提供更新，直到完成'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {language === 'th' ? 'รายงานความคืบหน้าประจำสัปดาห์' : language === 'en' ? 'Weekly Progress Reports' : '每周进度报告'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {language === 'th' ? 'การติดต่อสื่อสารตลอด 24 ชั่วโมง' : language === 'en' ? '24/7 Communication' : '24/7 沟通'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {language === 'th' ? 'การรับประกันผลงาน' : language === 'en' ? 'Work Guarantee' : '工作保证'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
