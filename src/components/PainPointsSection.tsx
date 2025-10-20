'use client';

import React from 'react';
import { AlertTriangle, XCircle, Clock, FileX } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const PainPointsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [AlertTriangle, XCircle, Clock, FileX];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.painPoints.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'th' 
              ? 'ปัญหาที่ลูกค้าของเรามักพบและเราช่วยแก้ไขได้' 
              : language === 'en'
              ? 'Common problems our clients face that we can help solve'
              : '我们客户常遇到的问题，我们可以帮助解决'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.painPoints.items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {language === 'th' 
                ? 'อย่าปล่อยให้ปัญหาเหล่านี้ทำลายอนาคตของคุณ' 
                : language === 'en'
                ? 'Don\'t let these problems destroy your future'
                : '不要让这些问题毁掉您的未来'
              }
            </h3>
            <p className="text-blue-700">
              {language === 'th' 
                ? 'เรามีประสบการณ์และความเชี่ยวชาญในการแก้ไขปัญหาทุกประเภท' 
                : language === 'en'
                ? 'We have the experience and expertise to solve all types of problems'
                : '我们拥有解决各种问题的经验和专业知识'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
