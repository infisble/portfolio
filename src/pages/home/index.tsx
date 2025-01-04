import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { AboutSection } from './ui/about-section';
import { SkillsSection } from './ui/skills-section';

export function HomePage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=1200"
              alt="Hero background"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm </span>
            <span className="block text-blue-600">Anton Vovk</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
           Full-stack developer with a passion for creating beautiful and functional web applications, games and software.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button
                onClick={() => window.location.href = '/contact'}
                className="w-full flex items-center justify-center px-8 py-3"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com', '_blank')}
                className="w-full flex items-center justify-center px-8 py-3"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                variant="outline"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="w-full flex items-center justify-center px-8 py-3"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
      <SkillsSection />
    </div>
  );
}