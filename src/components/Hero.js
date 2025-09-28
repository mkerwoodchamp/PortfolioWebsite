import React from 'react';
import { ChevronDown } from 'lucide-react';

function Hero({ scrollToSection, darkMode }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="gradient-text">
            Michael Kerwood
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Fourth-year Computer Science student at Champlain College, passionate about building impactful web applications and continuously learning new technologies, as well as learning software development and design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 gradient-bg text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-blue-600" />
      </button>
    </section>
  );
}

export default Hero;