import { skills } from '@/shared/config/skills';

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-dark-text">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="py-16 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 dark:text-dark-text">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 dark:text-dark-text">Frontend</h3>
            {skills.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 dark:text-dark-text">Backend</h3>
            {skills.backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 dark:text-dark-text">Tools & Technologies</h3>
            {skills.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}