import { Link } from 'react-router-dom';

export default function ProjectCard({ url, title, description }) {
  // Check if the link goes to another website or an internal page
  const isExternal = url.startsWith("http");

  // Remove the ".html" extension for internal routing
  const cleanUrl = url.replace('.html', '');

  return (
    <>
      <div className="projects">
        {isExternal ? (
          <a href={url} target="_blank" rel="noreferrer" className="block-link">
            <h3 className="project--heading">{title}</h3>
            <p>{description}</p>
          </a>
        ) : (
          <Link to={cleanUrl} className="block-link">
            <h3 className="project--heading">{title}</h3>
            <p>{description}</p>
          </Link>
        )}
      </div>
      <div className="line-break"></div>
    </>
  );
}