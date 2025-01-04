import { Button } from '@/shared/ui/button';
import { projectCategories, programmingLanguages } from '@/shared/config/projects';

interface ProjectFiltersProps {
  selectedCategory: string;
  selectedLanguage: string;
  onCategoryChange: (category: string) => void;
  onLanguageChange: (language: string) => void;
}

export function ProjectFilters({
  selectedCategory,
  selectedLanguage,
  onCategoryChange,
  onLanguageChange,
}: ProjectFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Category</h3>
        <div className="flex flex-wrap gap-2">
          {projectCategories.map(({ value, label }) => (
            <Button
              key={value}
              variant={selectedCategory === value ? 'primary' : 'outline'}
              onClick={() => onCategoryChange(value)}
              size="sm"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Programming Language</h3>
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">All Languages</option>
          {programmingLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}