import { useParams, Link } from 'react-router-dom';
import { projectsList } from "../data/projectsData";

export default function ProjectDetail() {
  const { projectId } = useParams(); 
  
  // Find the exact project in our data array where the id matches the URL
  const project = projectsList.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="section--page">
        <h2>Project not found</h2>
        <Link to="/projects">&#x2190; Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="section--page">
      <Link to="/projects">&#x2190; Go Back</Link>

      <h1>{project.title}</h1>

      <ul>
        <li>
          <a href={project.repoLink} target="_blank" rel="noreferrer">
            Source Code / Demo
          </a>
        </li>
      </ul>
      
      <p>{project.description}</p>

      {/* Render bullets only if they exist */}
      {project.bullets && (
        <ul>
          {project.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </section>
  );
}