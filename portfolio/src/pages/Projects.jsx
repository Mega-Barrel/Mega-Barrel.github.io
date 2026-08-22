import React from 'react';
import ProjectCard from "../components/ProjectCard";
import { projectsList, hackathonsList } from '../data/projectsData';

export default function Projects() {
  return (
    <>
      <section className="section--page">
        {projectsList.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            // If it has an 'id', create the internal route. Otherwise, use the external URL.
            url={project.id ? `/projects/${project.id}` : project.url} 
            title={project.title} 
            description={project.description} 
          />
        ))}
      </section>

      <section className="section--page">
        <h3>Hackathons</h3>
        <div className="hackathons">
          {hackathonsList.map((hackathon, index) => (
            <ProjectCard 
              key={`hack-${index}`} 
              url={hackathon.url} 
              title={hackathon.title} 
              description={hackathon.description} 
            />
          ))}
        </div>
      </section>
    </>
  );
}