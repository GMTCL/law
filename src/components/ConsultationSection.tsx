'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const ConsultationSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.consultation.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'th' 
              ? 'การปรึกษาเชิงลึกเพื่อวิเคราะห์คดีและวางแผนกลยุทธ์' 
              : language === 'en'
              ? 'In-depth consultation to analyze your case and plan strategy'
              : '深度咨询以分析您的案件并制定策略'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Consultation Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === 'th' ? 'ค่าปรึกษา' : language === 'en' ? 'Consultation Fee' : '咨询费'}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {t.consultation.fee}
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'th' ? 'การปรึกษาครอบคลุม:' : language === 'en' ? 'Consultation includes:' : '咨询包括:'}
                </h4>
                <div className="space-y-3">
                  {t.consultation.includes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Process */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {t.consultation.booking.title}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  {t.consultation.booking.description}
                </p>
                <p className="text-gray-700">
                  {t.consultation.booking.process}
                </p>
                <p className="text-gray-700">
                  {t.consultation.booking.completion}
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {language === 'th' ? 'จองการปรึกษา' : language === 'en' ? 'Book Consultation' : '预约咨询'}
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'th' ? 'ชื่อ' : language === 'en' ? 'First Name' : '名字'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={language === 'th' ? 'ชื่อของคุณ' : language === 'en' ? 'Your first name' : '您的名字'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'th' ? 'นามสกุล' : language === 'en' ? 'Last Name' : '姓氏'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={language === 'th' ? 'นามสกุลของคุณ' : language === 'en' ? 'Your last name' : '您的姓氏'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'th' ? 'อีเมล' : language === 'en' ? 'Email' : '邮箱'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={language === 'th' ? 'your@email.com' : language === 'en' ? 'your@email.com' : 'your@email.com'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'th' ? 'เบอร์โทรศัพท์' : language === 'en' ? 'Phone Number' : '电话号码'}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={language === 'th' ? '+66 81 234 5678' : language === 'en' ? '+66 81 234 5678' : '+66 81 234 5678'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'th' ? 'วันที่สะดวก' : language === 'en' ? 'Preferred Date' : '首选日期'}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'th' ? 'เวลาที่สะดวก' : language === 'en' ? 'Preferred Time' : '首选时间'}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">{language === 'th' ? 'เลือกเวลา' : language === 'en' ? 'Select time' : '选择时间'}</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'th' ? 'รายละเอียดปัญหา' : language === 'en' ? 'Problem Description' : '问题描述'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={language === 'th' ? 'อธิบายปัญหาของคุณโดยย่อ...' : language === 'en' ? 'Briefly describe your problem...' : '简要描述您的问题...'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.consultation.cta1}</span>
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">
                {language === 'th' ? 'หรือติดต่อด่วน' : language === 'en' ? 'Or contact us directly' : '或直接联系我们'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+66812345678"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>{language === 'th' ? 'โทรเลย' : language === 'en' ? 'Call Now' : '立即致电'}</span>
                </a>
                <a
                  href="https://line.me/ti/p/~lawyer"
                  className="flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.consultation.cta2}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
