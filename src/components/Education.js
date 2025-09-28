import React from 'react';
import { Award, BookOpen, Calendar } from 'lucide-react';

function Education({ darkMode, education }) {
  return (
    <section id="education" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        
        {/* University Information */}
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg mb-12`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">{education.university}</h3>
              <p className="text-xl text-blue-600 font-semibold mb-2">{education.degree}</p>
              {education.minor && (
                <p className="text-lg text-gray-600 dark:text-gray-300">Minor: {education.minor}</p>
              )}
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Calendar size={20} className="mr-2 text-blue-600" />
              <span className="text-lg font-medium">{education.graduationDate}</span>
            </div>
          </div>

          {/* GPA and Honors */}
          {(education.gpa || education.honors.length > 0) && (
            <div className="border-t border-gray-300 dark:border-gray-600 pt-6 mb-6">
              <div className="flex flex-wrap gap-6">
                {education.gpa && (
                  <div className="flex items-center">
                    <Award size={20} className="mr-2 text-purple-600" />
                    <span className="font-semibold">GPA: {education.gpa}</span>
                  </div>
                )}
                {education.honors.map((honor, index) => (
                  <div key={index} className="flex items-center">
                    <Award size={20} className="mr-2 text-green-600" />
                    <span className="font-medium">{honor}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Relevant Coursework */}
          <div className="border-t border-gray-300 dark:border-gray-600 pt-6">
            <div className="flex items-center mb-4">
              <BookOpen size={24} className="mr-2 text-blue-600" />
              <h4 className="text-2xl font-semibold">Relevant Coursework</h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {education.coursework.map((course, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border border-gray-300 dark:border-gray-500 hover:shadow-md transition-shadow`}
                >
                  <p className="text-sm font-medium">{course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Academic Achievements */}
        {education.achievements && education.achievements.length > 0 && (
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h4 className="text-xl font-semibold mb-4">Academic Achievements</h4>
            <div className="space-y-3">
              {education.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <Award size={18} className="mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Education;