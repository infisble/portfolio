export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  live_url: string;
  github_url: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  languages: string[];
}

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' },
];

export const programmingLanguages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'Go',
  'Rust',
  'PHP',
].sort();