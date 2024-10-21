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
          Founder of RickMate, a platform with over 250+ users, helping people save money by sharing rides with the principle of &quot;Connect, Commute, and Save.&quot; Passionate about developing solutions that make a difference in everyday life, combining technical expertise with real-world impact.
        </p>

        <a
          href="/renish_resume.pdf"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          download
        >
          Download Resume
        </a>

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
