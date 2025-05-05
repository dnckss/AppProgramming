import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Smartphones</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Tablets</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Watches</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">TVs</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Refrigerators</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Laundry</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Help Center</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Product Help</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Order Help</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Your Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">My Account</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">My Orders</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Order History</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Wishlist</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Company Info</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Business Area</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Brand Identity</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Investor Relations</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Ethics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-600 text-sm">Sign up for our newsletter to receive product updates and special offers.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SAMSUNG. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Privacy</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600">Legal</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600">Accessibility</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;