import React from "react";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-[#eeeedc] shadow flex justify-between items-center">
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="150, 130, 60"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <h1 className="text-[#333333] text-3xl font-thin py-4 sm:py-6 pl-4 sm:pl-6 md:pl-10 lg:pl-16 pr-4">
        Tobias Smedes
      </h1>
      <nav>
        <ul className="flex space-x-4 mt-2 mr-4 sm:mr-6 md:mr-10 lg:mr-16">
          <li>
            <Link
              href="/"
              className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-[#605f6d] hover:text-gray-400 border-b-2 border-[#eeeedc]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
