import { Cpu, Wrench, Code2, Phone, Mail, MapPin, ArrowRight, Star, Check } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-2xl text-blue-600">RK ITrade</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Powering Your Technology
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
            Empowering Your Business
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Professional IT services and support for computer repair, hardware maintenance, and software solutions. We&apos;re your trusted technology partner in Biratnagar.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-none">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
          <p className="text-center text-gray-600 text-lg mb-16">Comprehensive IT solutions tailored to your business needs</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-white p-8 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 border-2 border-transparent hover:border-blue-600">
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 border-2 border-blue-600">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Computer Repair</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fast and reliable repair services for desktops and laptops. We diagnose and fix hardware and software issues quickly.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white p-8 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 border-2 border-transparent hover:border-emerald-600">
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 border-2 border-emerald-600">
                <Wrench className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Hardware Maintenance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Preventive maintenance services to keep your equipment running smoothly. Regular checks and updates included.
              </p>
              <div className="flex items-center text-emerald-600 font-semibold">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white p-8 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 border-2 border-transparent hover:border-amber-600">
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 border-2 border-amber-600">
                <Code2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Software Support</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Expert software installation, troubleshooting, and support. From OS updates to specialized applications.
              </p>
              <div className="flex items-center text-amber-600 font-semibold">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Why Choose RK ITrade Group?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: 'Expert Technicians', desc: 'Highly trained and certified IT professionals' },
                { title: 'Quick Response', desc: 'Fast turnaround on all repair and maintenance tasks' },
                { title: '24/7 Support', desc: 'Always available when you need technical assistance' },
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
                { title: 'Affordable Pricing', desc: 'Competitive rates without compromising quality' },
                { title: 'Warranty Included', desc: 'All services backed by our quality guarantee' },
                { title: 'On-Site Service', desc: 'We come to you for convenient support' },
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

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">About RK ITrade Group</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Based in Biratnagar, RK ITrade Group is a dedicated IT services provider committed to delivering exceptional technical support and solutions to businesses and individuals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With years of experience in computer repair, hardware maintenance, and software support, we&apos;ve built a reputation for reliability, expertise, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: to keep your technology running smoothly so you can focus on what matters most—your business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Cpu, value: '500+', label: 'Systems Repaired' },
                { icon: Star, value: '98%', label: 'Satisfaction Rate' },
                { icon: Wrench, value: '15+', label: 'Years Experience' },
                { icon: Phone, value: '24/7', label: 'Support Available' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                    <div className="text-gray-600 font-medium">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-gray-600 text-lg mb-16">We&apos;d love to help with your IT needs</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">Contact us for immediate assistance</p>
              <p className="text-blue-600 font-bold mt-4 text-lg">+977 (xxx) xxx-xxxx</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">Drop us a message anytime</p>
              <p className="text-emerald-600 font-bold mt-4 text-lg">rajeshkhadka7007@gmail.com</p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Visit us at our office</p>
              <p className="text-amber-600 font-bold mt-4 text-lg">Biratnagar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-blue-400 mb-4">RK ITrade Group</h4>
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
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RK ITrade Group. All rights reserved. Based in Biratnagar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
