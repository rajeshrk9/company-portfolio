'use client'

import { useState } from 'react'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  {
    id: 'about',
    label: 'About',
    title: 'About Us',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          RK ITrade Group is a leading IT service provider dedicated to delivering innovative solutions and exceptional support to businesses of all sizes.
        </p>
        <p className="text-gray-700">
          With years of experience in the IT industry, we pride ourselves on providing reliable, scalable, and cost-effective IT solutions tailored to meet your business needs.
        </p>
        <div className="pt-4 space-y-2">
          <p className="font-semibold text-gray-900">Our Mission:</p>
          <p className="text-gray-700">To empower businesses through innovative IT solutions and exceptional customer service.</p>
        </div>
      </div>
    )
  },
  {
    id: 'services',
    label: 'Services',
    title: 'Our Services',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 mb-6">We offer a comprehensive range of IT services including:</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span className="text-gray-700"><strong>Infrastructure Management</strong> - Complete IT infrastructure setup and management</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span className="text-gray-700"><strong>Cloud Solutions</strong> - Migration and management of cloud-based services</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span className="text-gray-700"><strong>Security Services</strong> - Cybersecurity and data protection solutions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span className="text-gray-700"><strong>Support & Maintenance</strong> - 24/7 technical support and system maintenance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span className="text-gray-700"><strong>Consulting</strong> - Strategic IT consulting for business optimization</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'request',
    label: 'Service Request',
    title: 'Submit Your Service Request',
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Fill out the form below to request our IT services. Our team will review your request and get back to you within 24 hours.
        </p>
        <div className="bg-white/50 rounded-xl p-6 border border-blue-200">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf9FmhjmCeClqH6b-A-tZiYPKilMoEOtw1naugvWhAqMzWjtA/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-lg"
            title="Service Request Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Get in Touch',
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Have questions? We&apos;re here to help! Reach out to us through any of the following channels:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-3">Phone</h4>
            <a href="tel:+977-9819083222" className="text-blue-600 font-semibold text-lg hover:underline">
              +977 9819083222
            </a>
            <p className="text-sm text-gray-600 mt-2">Available Monday - Friday, 9AM - 6PM</p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h4 className="font-bold text-gray-900 mb-3">Email</h4>
            <a href="mailto:rajeshkhadka7007@gmail.com" className="text-emerald-600 font-semibold text-lg hover:underline">
              rajeshkhadka7007@gmail.com
            </a>
            <p className="text-sm text-gray-600 mt-2">We respond within 24 hours</p>
          </div>
        </div>
      </div>
    )
  }
]

export default function ServiceRequestForm() {
  const [activeTab, setActiveTab] = useState('about')

  const currentContent = menuItems.find(item => item.id === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-gray-900">Back</span>
          </Link>
          <div className="font-bold text-xl text-gray-900">Service Portal</div>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              {currentContent?.title}
            </h1>
            <p className="text-xl text-gray-600">
              Navigate through our information and submit your service request
            </p>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {item.label}
                {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Content Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-100 min-h-96 animate-fadeIn">
            {currentContent?.content}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 flex gap-4 justify-between">
            <button
              onClick={() => {
                const currentIndex = menuItems.findIndex(item => item.id === activeTab)
                if (currentIndex > 0) {
                  setActiveTab(menuItems[currentIndex - 1].id)
                }
              }}
              disabled={menuItems.findIndex(item => item.id === activeTab) === 0}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => {
                const currentIndex = menuItems.findIndex(item => item.id === activeTab)
                if (currentIndex < menuItems.length - 1) {
                  setActiveTab(menuItems[currentIndex + 1].id)
                }
              }}
              disabled={menuItems.findIndex(item => item.id === activeTab) === menuItems.length - 1}
              className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 RK ITrade Group. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}
