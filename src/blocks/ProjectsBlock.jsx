import { projects } from "@/data/Projects.js";
import ProjectPreviewCard from "@/components/ProjectPreviewCard/ProjectPreviewCard";
import styles from "./ProjectsBlock.module.css";

export default function ProjectsBlock() {
  const featuredProjects = projects.slice(0, 3);
// or projects.filter(p => p.featured)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Projects</h2>

        <a
          className={styles.seeAll}
          href="/projects"
        >
          See All
        </a>
      </div>

      <div className={styles.grid}>
        {featuredProjects.map((project) => (
          <ProjectPreviewCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}