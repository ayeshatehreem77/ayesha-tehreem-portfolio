import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from './projectsData';
import {
  HeroProjectCard,
  StandardProjectCard,
  CurrentlyBuildingCard,
} from './ProjectCard';
import ProjectModal from './ProjectModal'; // Ensure correct path for ProjectModal

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const heroProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter(
    (p) => p.id !== heroProject.id
  );

  return (
    <section id="projects" className="scroll-mt-24 relative min-h-screen bg-[#0C0C0F] text-[#F7F2EC] py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-[#A93A5B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-64 w-[600px] h-[600px] bg-[#D16A8A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#A93A5B]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">
              FEATURED WORK
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#F7F2EC]">
                Selected Projects.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <p className="text-[#F7F2EC]/70 text-base leading-relaxed font-light">
                A curated selection of projects demonstrating my approach to building scalable applications, thoughtful user experiences, and clean software architecture.
              </p>
            </motion.div>
          </div>
        </header>

        <div className="space-y-8">
          {/* Hero Project */}
          <HeroProjectCard
            project={heroProject}
            onOpenModal={() => setSelectedProject(heroProject)}
          />

          {/* Secondary Projects Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {secondaryProjects.map((project) => (
              <div key={project.id} className="lg:col-span-7">
                <StandardProjectCard
                  project={project}
                  onOpenModal={() => setSelectedProject(project)}
                />
              </div>
            ))}

            <div className="lg:col-span-5">
              <CurrentlyBuildingCard />
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal Component */}
      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || undefined}
      />
    </section>
  );
}