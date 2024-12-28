import { useFetchProjects } from './fetchProjects'
const Projects = () => {
  const { projects, loading } = useFetchProjects()
  if (loading) {
    return (
      <section className="projects">
        <h2>Loading....</h2>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, url, img } = project
          return (
            <a
              key={id}
              href={url}
              rel="noreferrer"
              target="_blank"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
