import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10 py-6 px-4 md:px-6 bg-[#121212] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]">
    <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
      <Link
        className="text-[15px] md:text-[20px] text-white font-semibold"
        to="/"
      >
        <span className="md:text-[23px]">D</span>-INVOICE
      </Link>
      <nav>
        <div className="flex items-center gap-4 md:gap-8 text-white">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
              />
            </svg>
          </button>
          <div className="h-full w-[40px] md:w-[90px] flex justify-center items-center">
            <Link
              className="h-[35px] w-[35px] bg-[white] text-[#121212] rounded-full"
              to="/login"
              aria-label="profile"
            >
              <img
                className="rounded-full"
                src="/images/benjo.jpg"
                alt="benjo quilario"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
