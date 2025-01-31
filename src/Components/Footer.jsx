import React from 'react'

const Footer = () => {
    return (
      <footer className="w-full flex justify-center items-center bg-gray-100 p-6">
        <div className="max-w-[1600px] w-full flex flex-wrap justify-between mx-auto">
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <div className="w-16 h-0.5 bg-red-600 my-2"></div>
            <ul className="text-blue-600 space-y-2 mt-4">
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Custom Links</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <div className="w-16 h-0.5 bg-red-600 my-2"></div>
            <ul className="text-blue-600 space-y-2 mt-4">
              <li>Contact</li>
              <li>Return</li>
              <li>Site Map</li>
              <li>Brands</li>
              <li>Unlimited Links</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-lg font-semibold">My Account</h3>
            <div className="w-16 h-0.5 bg-red-600 my-2"></div>
            <ul className="text-blue-600 space-y-2 mt-4">
              <li>My Account</li>
              <li>Order History</li>
              <li>Affiliates</li>
              <li>Newsletter</li>
              <li>Gift Certificates</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <div className="w-16 h-0.5 bg-red-600 my-2"></div>
            <p className="mt-4">Stay up to date with news and promotions by signing up for our newsletters.</p>
            <div className="flex items-center mt-4 border border-gray-400 p-2 rounded-md h-[35px] overflow-hidden relative">
              <input type="email" placeholder="Your email" className="flex-1 p-2 outline-none" />
              <button className="bg-blue-600 text-white px-4   sm:ml-[58px]  h-[35px] absolute right-0">Send</button>
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm ">I have read and agree to the <a href="#" className="text-blue-600">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  