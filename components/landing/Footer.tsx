import React from 'react';
import 'tailwindcss/tailwind.css';

// Social media icons URLs
const tiktokIcon = 'https://i.imgur.com/g3dNUup.png';
const instagramIcon = 'https://i.imgur.com/HLue3iH.png';
const facebookIcon = 'https://i.imgur.com/zaWN3Nx.png';

// Contact icons URLs
const phoneIcon = 'https://i.imgur.com/ALf9Mpn.png';
const messageIcon = 'https://i.imgur.com/3Rzxtr8.png';
const locationIcon = 'https://i.imgur.com/Qsun0Fg.png';

function Footer() {
  return (
    <footer className="bg-[#061125] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo si descriere */}
          <div className="mb-10 md:mb-0 md:col-span-1">
            <h2 className="text-[44px] font-bold text-white leading-none">CODE</h2>
            <h3 className="text-[25.23px] font-extrabold text-white leading-none">&lt; CRAFT &gt;</h3>
            <p className="font-[Kanit] text-[18px] mt-2 mb-6">Empower Collaboration, Achieve your 
            <br></br>
            Projects, codecraft-teams-app.com</p>
            
            {/* Iconite social */}
            <div className="flex mt-4">
              <img src={tiktokIcon} alt="TikTok" className="h-[22px] w-[22px] mr-4" />
              <img src={instagramIcon} alt="Instagram" className="h-[22px] w-[22px] mr-4" />
              <img src={facebookIcon} alt="Facebook" className="h-[22px] w-[22px]" />
            </div>
          </div>

          {/* Coloana "Product Categories"  */}
          <div className="md:col-span-1">
            <h4 className="font-[Kanit] font-semibold text-[20px] mb-1">Product Categories</h4>
            <div className="border-b border-white mb-4"></div>
            <nav>
              <ul className="list-none space-y-2">
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Create organization</li>
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Lorem</li>
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Lorem</li>
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Lorem</li>
              </ul>
            </nav>
          </div>

          {/* Coloana "Terms and Policies"  */}
          <div className="md:col-span-1">
            <h4 className="font-[Kanit] font-semibold text-[20px] mb-1">Terms and Policies</h4>
            <div className="border-b border-white mb-4"></div>
            <nav>
              <ul className="list-none space-y-2">
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Terms and Conditions</li>
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Politică confidențialitate</li>
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Privacy Policy</li>
                <li className="font-[Kanit] font-normal text-[16px]">{'>'} Lorem</li>
              </ul>
            </nav>
          </div>

          {/* Coloana "Contact"  */}
          <div className="md:col-span-1">
            <h4 className="font-[Kanit] font-semibold text-[20px] mb-1">Contact</h4>
            <div className="border-b border-white mb-4"></div>
            <div className="space-y-2">
              <div className="flex items-center">
                <img src={phoneIcon} alt="Phone" className="h-[22px] w-[22px] mr-4" />
                <span className="font-[Kanit] font-normal text-[16px]">(+40) 000 000 00</span>
              </div>
              <div className="flex items-center">
                <img src={messageIcon} alt="Message" className="h-[22px] w-[22px] mr-4" />
                <span className="font-[Kanit] font-normal text-[16px]">codecraft@code.com</span>
              </div>
              <div className="flex items-center">
                <img src={locationIcon} alt="Location" className="h-[22px] w-[22px] mr-4" />
                <span className="font-[Kanit] font-normal text-[16px]">Strada Universității 13</span>
              </div>
            </div>
          </div>

        </div>

        {/* Linie de separare */}
        <hr className="border-t border-gray-600 my-8" />

        {/* Copyright  */}
        <div className="text-left text-sm mb-8">
          <p>Copyright © 2024 CodeCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
