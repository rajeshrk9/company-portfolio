import { Cpu, Wrench, Code2, Phone, Mail, MapPin, ArrowRight, Star, Check } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Kabita Trade Group" width={48} height={48} className="h-12 w-auto" />
            <div className="font-bold text-xl text-gray-900 hidden sm:block">Kabita Trade</div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#customer-details" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Service Request</a>
            <a href="#contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-transparent rounded-full -z-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-8">
                <Image src="/logo.png" alt="Kabita Trade Group Logo" width={120} height={120} className="h-32 w-auto" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                Powering Your Technology
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Empowering Your Business
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Professional IT services and support for computer repair, hardware maintenance, and software solutions. Your trusted technology partner in Biratnagar.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:to-blue-800">
                Get Started
              </button>
            </div>
            
            {/* Right Image */}
            <div className="hidden md:block relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/it-services.png" 
                  alt="IT Services Team" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - MOVED FIRST */}
      <section id="about" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-poppins)' }}>About Kabita Trade Group</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Kabita Trade Group is a premier IT services provider based in Biratnagar, Nepal. We specialize in comprehensive technology solutions for businesses and individuals, helping them overcome IT challenges and maximize their technological efficiency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a vision to make quality IT services accessible and affordable, we&apos;ve grown to become a trusted partner for over 500+ clients. Our team of certified technicians brings 15+ years of combined experience in computer repair, hardware maintenance, and software solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe in building long-term relationships with our clients through exceptional service, transparent communication, and reliable technical support. Our mission is simple: to keep your technology running smoothly so you can focus on growing your business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re a startup, small business, or established enterprise, Kabita Trade Group is your go-to partner for all your technology needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Cpu, value: '500+', label: 'Happy Clients' },
                { icon: Star, value: '98%', label: 'Satisfaction Rate' },
                { icon: Wrench, value: '15+', label: 'Years Experience' },
                { icon: Phone, value: '24/7', label: 'Support Available' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200 hover:border-blue-400 transition-colors">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                    <div className="text-gray-600 font-medium text-sm">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Our Services</h2>
          <p className="text-center text-gray-600 text-lg mb-16">Comprehensive IT solutions tailored to your business needs</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 border border-blue-200 hover:border-blue-500 hover:shadow-lg">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-300">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>Computer Repair</h3>
              <ul className="text-gray-600 leading-relaxed mb-6 space-y-2 text-sm">
                <li>• Desktop & Laptop Diagnosis</li>
                <li>• Motherboard & CPU Repair</li>
                <li>• Screen & Display Replacement</li>
                <li>• Data Recovery Services</li>
              </ul>
              <div className="flex items-center text-blue-600 font-semibold">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 border border-emerald-200 hover:border-emerald-500 hover:shadow-lg">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-300">
                <Wrench className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>Hardware Maintenance</h3>
              <ul className="text-gray-600 leading-relaxed mb-6 space-y-2 text-sm">
                <li>• Regular System Maintenance</li>
                <li>• Cleaning & Dust Removal</li>
                <li>• Hard Drive & SSD Upgrades</li>
                <li>• Preventive Care Programs</li>
              </ul>
              <div className="flex items-center text-emerald-600 font-semibold">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 border border-amber-200 hover:border-amber-500 hover:shadow-lg">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-amber-300">
                <Code2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>Software Support</h3>
              <ul className="text-gray-600 leading-relaxed mb-6 space-y-2 text-sm">
                <li>• OS Installation & Setup</li>
                <li>• Software Troubleshooting</li>
                <li>• Antivirus & Security Setup</li>
                <li>• System Optimization</li>
              </ul>
              <div className="flex items-center text-amber-600 font-semibold">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Why Choose Kabita Trade Group?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: 'Expert Technicians', desc: 'Certified professionals with extensive experience' },
                { title: 'Quick Response Time', desc: 'Average 2-hour response to service requests' },
                { title: '24/7 Support', desc: 'Round-the-clock availability for emergencies' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-blue-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                { title: 'Affordable Pricing', desc: 'Competitive rates for all budgets' },
                { title: 'Quality Guarantee', desc: '6-month warranty on all repairs' },
                { title: 'On-Site Service', desc: 'Free home or office visits available' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-blue-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Details Section */}
      <section id="customer-details" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Service Request Form</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Fill out the form below to request our IT services. We&apos;ll get back to you shortly.</p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 overflow-hidden shadow-lg">
            <div className="w-full h-[900px] overflow-y-auto">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf9FmhjmCeClqH6b-A-tZiYPKilMoEOtw1naugvWhAqMzWjtA/viewform?embedded=true" 
                width="100%" 
                height="900" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'var(--font-poppins)' }}>Get In Touch</h2>
          <p className="text-center text-gray-600 text-lg mb-16">We&apos;d love to help with your IT needs</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Phone</h3>
              <p className="text-gray-600">Contact us for immediate assistance</p>
              <p className="text-blue-600 font-bold mt-4 text-lg">+977 9819083222</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Email</h3>
              <p className="text-gray-600">Drop us a message anytime</p>
              <p className="text-emerald-600 font-bold mt-4 text-lg">kabitatrade@gmail.com</p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-amber-200">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Location</h3>
              <p className="text-gray-600">Visit us at our office</p>
              <p className="text-amber-600 font-bold mt-4 text-lg">Biratnagar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-blue-400 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>Kabita Trade Group</h4>
              <p className="text-gray-400">Powering Your Technology, Empowering Your Business</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Computer Repair</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Hardware Maintenance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Software Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#customer-details" className="hover:text-blue-400 transition-colors">Service Request</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kabita Trade Group. All rights reserved. Based in Biratnagar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
