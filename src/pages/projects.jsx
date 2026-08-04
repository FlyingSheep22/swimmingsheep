import Layout from "@/components/Layout/LayoutNew";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/Projects";
import { useRouter } from "next/router";

import styles from "@/stylesheets/projects.module.css";
import Head from "next/head";

export default function ProjectsPage() {
    const router = useRouter();
    const selectedProject = router.query.project;
    console.log(selectedProject);
    
    return (
        <div>
            <Head>
                <title>Projects | Kevin Bai</title>
            </Head>

            <Layout>
                <main className={styles.page}>
                    <h1 className={styles.heading}>Projects</h1>

                    <div className={styles.projects}>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.slug ?? project.name}
                                project={project}
                                defaultOpen={
                                    router.isReady &&
                                    Boolean(project.slug) &&
                                    selectedProject === project.slug
                                }
                            />
                        ))}
                    </div>
                </main>
            </Layout>
        </div>
    );
}