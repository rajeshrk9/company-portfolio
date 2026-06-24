'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ServiceRequestForm() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-gray-900">Back</span>
          </Link>
          <div className="font-bold text-xl text-gray-900">Service Request</div>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Service Request Form
            </h1>
            <p className="text-xl text-gray-600">
              Fill out the form below to request our IT services. Our team will get back to you soon!
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf9FmhjmCeClqH6b-A-tZiYPKilMoEOtw1naugvWhAqMzWjtA/viewform?embedded=true"
                width="100%"
                height="943"
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

          {/* Support Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need Quick Help?</h3>
              <p className="text-gray-600 mb-4">Call us directly for urgent support:</p>
              <a href="tel:+977-9819083222" className="text-blue-600 font-bold text-lg hover:underline">
                +977 9819083222
              </a>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your details directly:</p>
              <a href="mailto:rajeshkhadka7007@gmail.com" className="text-emerald-600 font-bold text-lg hover:underline">
                rajeshkhadka7007@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 RK ITrade Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
