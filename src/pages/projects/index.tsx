import { useEffect, useState } from 'react';
import { fetchProjects } from '@/shared/lib/supabase';
import { Project } from '@/shared/config/projects';
import { ProjectFilters } from './ui/project-filters';
import { ProjectCard } from './ui/project-card';

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    }

    loadProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === 'all' || project.category === selectedCategory;
    const languageMatch =
      !selectedLanguage || project.languages.includes(selectedLanguage);
    return categoryMatch && languageMatch;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900">Projects</h1>
      
      <ProjectFilters
        selectedCategory={selectedCategory}
        selectedLanguage={selectedLanguage}
        onCategoryChange={setSelectedCategory}
        onLanguageChange={setSelectedLanguage}
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found matching your filters.</p>
        </div>
      )}
    </div>
  );
}