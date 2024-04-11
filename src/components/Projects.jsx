import projectsData from '../assets/projectsData'

function Projects() {
  return(
    <section>
      <h2 id="projects">Projects</h2>
      {projectsData.map((p)=>{
        return <p key={p.id}>{p.name}</p>
      })}
    </section>
  )
}

export default Projects;
