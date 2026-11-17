import { useState } from 'react'
import type { Project } from '../portfolio-data'
import { projects } from '../portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../styles'
import ImageLightbox from './ImageLightbox'
import ProjectModal from './ProjectModal'

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(
    null,
  )

  return (
    <section
      className={`${section} bg-[linear-gradient(180deg,rgba(20,38,57,0.45),transparent)]`}
      id="projects"
    >
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Featured projects</div>
          <h2 className={heading}>Turning Science into Scalable Solutions</h2>
        </div>
        <div className="grid grid-cols-2 gap-5 max-[850px]:grid-cols-1">
          {projects.map((project) => (
            <article
              className="flex max-[620px]:flex-col bg-surface border rounded-[18px] overflow-hidden transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-[rgba(67,211,107,0.55)]"
              style={{ borderColor: LINE }}
              key={project.title}
            >
              <div
                className={`shrink-0 w-[40%] max-[620px]:w-full grid place-items-center text-[62px] min-h-[175px] max-[620px]:min-h-[160px] overflow-hidden ${
                  project.artVariant === 'blue'
                    ? 'bg-[linear-gradient(135deg,#173b5a,#25334b)]'
                    : 'bg-[linear-gradient(135deg,#1e4c3e,#152c43)]'
                }`}
              >
                {project.image ? (
                  <button
                    type="button"
                    className="group relative w-full h-full cursor-zoom-in"
                    onClick={() =>
                      setPreview({
                        src: project.image!,
                        alt: `${project.title} screenshot`,
                      })
                    }
                    aria-label={`View ${project.title} screenshot`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition duration-200 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 grid place-items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/50 to-transparent">
                      <span className="text-[12px] font-semibold text-white bg-black/50 rounded-full px-3 py-1">
                        Click to view full image
                      </span>
                    </span>
                  </button>
                ) : (
                  project.art
                )}
              </div>
              <div className="p-6">
                <h3 className="text-[22px] mb-2">{project.title}</h3>
                <p className="text-green font-semibold mb-3">
                  {project.tagline}
                </p>
                <p className="text-[#c1cfde] mb-[18px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-[18px]">
                  {project.tags.map((tag) => (
                    <span
                      className="text-xs px-2.5 py-[5px] rounded-full bg-[#26384e] text-[#dce8f5]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.caseStudy ? (
                  <button
                    type="button"
                    className="text-[#76c9ff] font-semibold hover:text-green"
                    onClick={() => setActiveProject(project)}
                  >
                    Project Context →
                  </button>
                ) : (
                  <a className="text-[#76c9ff] font-semibold" href="#experience">
                    Project Context →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject?.caseStudy ? (
        <ProjectModal
          caseStudy={activeProject.caseStudy}
          onClose={() => setActiveProject(null)}
        />
      ) : null}

      {preview ? (
        <ImageLightbox
          src={preview.src}
          alt={preview.alt}
          onClose={() => setPreview(null)}
        />
      ) : null}
    </section>
  )
}

export default Projects
