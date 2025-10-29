import React from "react";

function Footer() {
  return (
    <footer className="w-full text-gray-400 py-10 px-6 mt-auto">
      {/* Top border and container */}
      <div className="w-full border-t border-gray-700 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap justify-between gap-10">
          
          {/* Brand Info */}
          <div className="flex-1 min-w-[250px] text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-3">CineScope</h2>
            <p className="text-sm leading-relaxed">
              Discover, track, and enjoy your favorite movies.
              <br />
              Your personal movie companion powered by AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px] text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Login
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex-1 min-w-[180px] text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a
                href="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-facebook"></i> Facebook
              </a>
              <a
                href="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-x-twitter"></i> Twitter
              </a>
              <a
                href="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex-1 min-w-[200px] text-center md:text-right text-sm flex flex-col justify-between">
            <p>&copy; {new Date().getFullYear()} CineScope. All rights reserved.</p>
            <p className="mt-2">
              Built <span className="text-[#ff0066]"></span> by Movie Lover
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
