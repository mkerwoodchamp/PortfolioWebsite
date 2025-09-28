import React from 'react';

function About({ darkMode }) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 profile-circle">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Academic Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm currently pursuing a Bachelor's degree in Computer Science with a minor in applied mathematics. 
              My academic journey has equipped me with a solid understanding of algorithms, data structures, and software development principles.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Through coursework and personal projects, I've developed a strong foundation in modern web technologies,
              software engineering practices, and problem-solving skills. 
              I'm passionate about building efficient and scalable applications that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full">
                Team Player
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full">
                Quick Learner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
