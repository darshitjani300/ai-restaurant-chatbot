import React from "react";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center grow py-24 px-6 text-center">
      <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-accent mb-8 shadow-lg">
        <FaFireFlameCurved size={28} />
      </div>
      
      <h4 className="text-brand-accent tracking-widest uppercase text-xs sm:text-sm font-bold mb-4">
        Error 404
      </h4>
      <h1 className="text-5xl sm:text-6xl md:text-7xl text-brand-dark mb-6">
        Table not found
      </h1>
      <p className="text-brand-gray text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
        We&apos;re sorry, but the page you are looking for doesn&apos;t exist. It might have been moved, or the link could be broken.
      </p>
      
      <Link 
        href="/"
        className="bg-brand-dark hover:bg-brand-dark-hover text-white text-md font-medium px-8 py-3.5 rounded-lg transition-colors shadow-md inline-flex items-center gap-2"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
