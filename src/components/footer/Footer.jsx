import React from "react";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
       {/* Updated Footer */}
       <footer className="bg-[#002366] text-white py-12">
        <div className="container mx-auto px-10 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-0 md:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Home</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Services</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Text Messaging</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Chat Widget</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Email Builder</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Lead Management</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400"><FaFacebook  size={24} /></a>
                <a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400"><RiTwitterXLine size={24} /></a>
                <a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400"><LuInstagram size={24} /></a>
                <a href="#" className="text-[14px] sm:text-[18px] hover:text-blue-400"><GrLinkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Digital Gateway Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
