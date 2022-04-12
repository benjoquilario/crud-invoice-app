import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header className="absolute top-0 left-0 w-full z-10 py-6 px-6 bg-[#121212] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]">
         <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
            <Link className="text-[23px] text-white" to="/">
               D-INVOICE
            </Link>
            <nav>
               <div className="flex items-center gap-4 text-white">
                  <button>Dark</button>
                  <div className="h-full w-[90px] flex justify-center items-center">
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
};

export default Header;
