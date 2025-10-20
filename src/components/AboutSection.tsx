'use client';

import React from 'react';
import { User, Award, BookOpen, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'th' 
              ? 'ทนายความผู้เชี่ยวชาญด้านคดีวีซ่าและ Blacklist ด้วยประสบการณ์กว่า 20 ปี' 
              : language === 'en'
              ? 'Specialist in Visa & Blacklist cases with over 20 years of experience'
              : '签证和黑名单案件专家，拥有20多年经验'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Basic Info */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-blue-600" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-10 h-10 text-yellow-800" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {t.about.name}
            </h3>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              {language === 'th' 
                ? 'ทนายความผู้เชี่ยวชาญด้านคดีวีซ่าและ Blacklist' 
                : language === 'en'
                ? 'Specialist in Visa & Blacklist Cases'
                : '签证和黑名单案件专家'
              }
            </p>
          </div>

          {/* Credentials & Experience */}
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                {language === 'th' ? 'คุณวุฒิการศึกษา' : language === 'en' ? 'Education' : '教育背景'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    {language === 'th' ? 'นิติศาสตร์บัณฑิต (รามคำแหง)' : language === 'en' ? 'LL.B. (Ramkhamhaeng University)' : '法学学士（兰甘亨大学）'}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    {language === 'th' ? 'นิติศาสตร์มหาบัณฑิต (ธรรมศาสตร์)' : language === 'en' ? 'LL.M. (Thammasat University)' : '法学硕士（法政大学）'}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    {language === 'th' ? 'เนติบัณฑิตไทย' : language === 'en' ? 'Thai Barrister-at-Law' : '泰国律师'}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    {language === 'th' ? 'ปริญญาเอกด้านการจัดการธุรกิจ (DBA)' : language === 'en' ? 'Doctorate in Business Administration (DBA)' : '工商管理博士学位（DBA）'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 text-green-600 mr-3" />
                {language === 'th' ? 'ประสบการณ์และความเชี่ยวชาญ' : language === 'en' ? 'Experience & Expertise' : '经验和专业知识'}
              </h4>
              <div className="space-y-3">
                {t.about.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {language === 'th' ? 'เลขทะเบียนทนายความ' : language === 'en' ? 'Attorney License' : '律师执照'}
              </h4>
              <p className="text-2xl font-bold text-yellow-600">
                1738/2544
              </p>
              <p className="text-gray-600 mt-2">
                {language === 'th' 
                  ? 'สมาคมทนายความแห่งประเทศไทย' 
                  : language === 'en'
                  ? 'Law Society of Thailand'
                  : '泰国律师协会'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.caseStudies.title}
            </h3>
            <p className="text-gray-600">
              {language === 'th' 
                ? 'ตัวอย่างคดีที่ประสบความสำเร็จ (ไม่ระบุตัวตน)' 
                : language === 'en'
                ? 'Examples of successful cases (anonymous)'
                : '成功案例示例（匿名）'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.caseStudies.cases.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
