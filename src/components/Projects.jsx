import React from 'react';
import projectsData from '../assets/projectsData.json';

function Projects() {
  return (
    <section>
      <h2 id="projects">Projects</h2>
      {projectsData.map((p) => <p key={p.id}>{p.name}</p>)}
    </section>
  );
}

export default Projects;
