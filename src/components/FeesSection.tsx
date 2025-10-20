'use client';

import React from 'react';
import { Clock, DollarSign, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const FeesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="fees" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.fees.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.fees.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Hourly Rate */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t.fees.hourly.title}
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {t.fees.hourly.rate}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              {t.fees.hourly.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  {language === 'th' ? 'คิดค่าบริการตามเวลาที่ใช้จริง' : language === 'en' ? 'Billed based on actual time spent' : '按实际使用时间计费'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  {language === 'th' ? 'เหมาะสำหรับการติดตามระยะสั้น' : language === 'en' ? 'Suitable for short-term follow-ups' : '适合短期跟进'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  {language === 'th' ? 'การตรวจเอกสารเพิ่มเติม' : language === 'en' ? 'Additional document review' : '额外文件审查'}
                </span>
              </div>
            </div>
          </div>

          {/* Fixed Fee */}
          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t.fees.fixed.title}
                </h3>
                <p className="text-lg font-medium text-green-600">
                  {language === 'th' ? 'เหมาจ่าย' : language === 'en' ? 'One-time Fee' : '一次性费用'}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              {t.fees.fixed.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  {language === 'th' ? 'ยื่นคำร้องเพิกถอน Blacklist' : language === 'en' ? 'Filing to remove blacklist' : '申请移除黑名单'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  {language === 'th' ? 'อุทธรณ์คำสั่งปฏิเสธวีซ่า' : language === 'en' ? 'Appealing visa refusal' : '上诉签证拒签'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  {language === 'th' ? 'ครอบคลุมขั้นตอนที่ตกลงไว้' : language === 'en' ? 'Covers agreed procedures' : '涵盖商定的程序'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Information */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === 'th' ? 'สัญญาว่าจ้างทนายความ' : language === 'en' ? 'Legal Services Agreement' : '法律服务协议'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.fees.contract}
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Fee */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'th' ? 'ค่าปรึกษาเบื้องต้น' : language === 'en' ? 'Initial Consultation Fee' : '初步咨询费'}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {language === 'th' ? '5,000 บาท' : language === 'en' ? 'THB 5,000' : '5,000 泰铢'}
                </div>
                <div className="text-gray-600">
                  {language === 'th' ? 'ต่อชั่วโมง (ขั้นต่ำ 1 ชั่วโมง)' : language === 'en' ? 'per hour (minimum 1 hour)' : '每小时（最少1小时）'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg text-gray-700">
                  {language === 'th' ? 'รวมการตรวจเอกสารเบื้องต้น' : language === 'en' ? 'Includes preliminary document review' : '包括初步文件审查'}
                </div>
                <div className="text-lg text-gray-700">
                  {language === 'th' ? 'การวิเคราะห์ข้อกฎหมายและโอกาสสำเร็จ' : language === 'en' ? 'Legal analysis and success assessment' : '法律分析和成功评估'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesSection;
