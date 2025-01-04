import { Project } from '@/shared/config/projects';
import { Button } from '@/shared/ui/button';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={project.image_url}
          alt={project.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <p className="mt-3 text-base text-gray-500">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          {project.live_url && (
            <Button
              variant="outline"
              onClick={() => window.open(project.live_url, '_blank')}
              className="flex items-center"
            >
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {project.github_url && (
            <Button
              variant="outline"
              onClick={() => window.open(project.github_url, '_blank')}
              className="flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}