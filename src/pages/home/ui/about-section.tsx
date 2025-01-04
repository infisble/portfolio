import { GraduationCap, Briefcase, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 dark:text-dark-text">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=800"
              alt="Professional headshot"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-dark-text">
              I'm a passionate Full Stack Developer with over 5 years of experience building modern web applications. 
              I specialize in React, ASP.NET, C++ and Python.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300">B.S. in Computer Science, University of ST Syril and Methodus 2022 - now</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">Developer at Slovak Educations company</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text">Achievements</h3>
                  <p className="text-gray-600 dark:text-gray-300">AWS Certified Developer, Open Source Contributor, Microsoft .NET course, Microsoft C++ course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}