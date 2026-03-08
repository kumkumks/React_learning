import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-cyan-950 text-white w-full'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>Company</h3>
            <p className='text-gray-300 text-sm leading-relaxed'>
              We design beautiful and responsive websites that help your business grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>Home</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>About Us</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>Services</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>
            <ul className='space-y-2'>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>Web Design</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>Web Development</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>UI/UX Design</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white transition-colors'>SEO Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Us</h4>
            <ul className='space-y-2 text-gray-300 text-sm'>
              <li>Email: info@company.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Street, City</li>
            </ul>
            <div className='flex space-x-4 mt-4'>
              <a href='#' className='text-gray-300 hover:text-white transition-colors text-xl'>📘</a>
              <a href='#' className='text-gray-300 hover:text-white transition-colors text-xl'>🐦</a>
              <a href='#' className='text-gray-300 hover:text-white transition-colors text-xl'>📷</a>
              <a href='#' className='text-gray-300 hover:text-white transition-colors text-xl'>💼</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-cyan-800 mt-8 pt-6 text-center text-gray-300 text-sm'>
          <p>&copy; 2026 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer