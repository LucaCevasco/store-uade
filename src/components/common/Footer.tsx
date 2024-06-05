"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  const linkStyles = "text-sm transition duration-150 ease hover:text-white";
  const liStyles = "text-[#A1A1A1] my-1.5";

  return (
    <footer className="px-6 py-24 border-t border-solid pointer-events-auto bg-[#0A0A0A] border-[#242424]">
      <nav className="flex flex-wrap justify-around gap-5 mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center w-full max-w-xs gap-5">
           <div className="flex gap-3.5">
            <span className="flex items-center text-sm text-[#A1A1A1]">
              © 2024
            </span>
          </div>
        </div>
        <div className="w-full max-w-xs">
          <h2 className="my-3 text-sm font-medium">Products</h2>
          <ul className="grid grid-cols-2">
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/t-shirts`}
                className={linkStyles}
              >
                T-shirts
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/pants`}
                className={linkStyles}
              >
                Pants
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/sweatshirts`}
                className={linkStyles}
              >
                Sweatshirts
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-xs">
          <h2 className="my-3 text-sm font-medium">Assistance</h2>
          <ul className="grid grid-cols-2">
            <li className={liStyles}>
              <Link href="#" className={linkStyles}>
                Size guide
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="#" className={linkStyles}>
                Delivery
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="#" className={linkStyles}>
                Returns and refunds
              </Link>
            </li>
          </ul>
        </div>
    
      </nav>
    </footer>
  );
};
