'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import EducationList from './components/EducationList';
import ExperienceList from './components/ExperienceList';
import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';
import TechnologyList from './components/TechnologyList';

const Home = () => {
  return (
    <main className="min-h-screen py-3">
      <Header />
      <EducationList />
      <ExperienceList />
      <ProjectList />
      <SkillList />
      <TechnologyList />
      <footer className="mt-6 text-center text-gray-500 text-sm">
        Last updated: 2024-06-18
      </footer>
    </main>
  );
};

export default Home;
