import React from 'react';

function Footer({ darkMode }) {
  return (
    <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-100 border-t border-gray-200'}`}>
      <p className="text-gray-600 dark:text-gray-300">
        © 2025 Michael Kerwood
      </p>
    </footer>
  );
}

export default Footer;