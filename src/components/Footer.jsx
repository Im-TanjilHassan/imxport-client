import React from 'react';

const Footer = () => {
    return (
      <div className="bg-primary text-primary-content backdrop-blur-md pt-10 pb-6 border w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* ===== 1. Brand / About ===== */}
          <div>
            <h2 className="text-2xl text-accent font-bold mb-3">IMXport</h2>
            <p className="text-sm leading-relaxed opacity-90 text-gray-200">
              IMXport connects global buyers and sellers with premium quality
              export-import products. Reliable, fast, and trusted worldwide.
            </p>
          </div>

          {/* ===== 2. Quick Links ===== */}
          <div>
            <h3 className="text-lg text-accent font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-accent">
              <li>
                <a href="#" className="hover:font-semibold transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:font-semibold transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:font-semibold transition">
                  Import
                </a>
              </li>
              <li>
                <a href="#" className="hover:font-semibold transition">
                  Export
                </a>
              </li>
            </ul>
          </div>

          {/* ===== 3. Support ===== */}
          <div>
            <h3 className="text-lg text-accent font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:font-semibold transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:font-semibold transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:font-semibold transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:font-semibold transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ===== 4. Newsletter ===== */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-accent mb-3">
              Subscribe to Newsletter
            </h3>
            <p className="text-sm mb-3 text-gray-200 opacity-90">
              Get the latest updates on new products, trends, and special
              offers.
            </p>
            <div className="form-control w-full max-w-md">
              <div className="join">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered bg-gray-400 text-black join-item w-full"
                />
                <button className="btn join-item bg-secondary border-none text-white hover:bg-primary transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm opacity-80 text-accent">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">IMXport</span> — All rights
            reserved.
          </p>
        </div>
      </div>
    );
};

export default Footer;