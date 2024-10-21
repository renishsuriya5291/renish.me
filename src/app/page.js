'use client';

import ProjectList from './components/ProjectList';
import ExperienceList from './components/ExperienceList';
import EducationList from './components/EducationList';
import SkillList from './components/SkillList';
import TechnologyList from './components/TechnologyList';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <section className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fadeIn">About Me</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Hello, I am Renish Suriya, a passionate developer who enjoys creating
          innovative solutions to complex problems.
        </p>
      </section>
      <ProjectList />
      <ExperienceList />
      <EducationList />
      <SkillList />
      <TechnologyList />
    </main>
  );
};

export default Home;
