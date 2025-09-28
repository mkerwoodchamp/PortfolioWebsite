
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

function Contact({ darkMode }) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborating on interesting projects, 
          or just having a conversation about technology. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:kirkkerwood@gmail.com"
            className="flex items-center px-6 py-3 gradient-bg text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <Mail size={20} className="mr-2" />
            kirkkerwood@gmail.com
          </a>
          <div className="flex space-x-4">
            <a
              href="https://github.com/mkerwoodchamp"
              className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/michaelfkerwood/"
              className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;