import { useEffect, useState, useRef } from "react";
import styles from "./ProjectCard.module.css";
import MediaGallery from "@/components/MediaGallery/MediaGallery";


export default function ProjectCard({
    project,
    defaultOpen = false,
}) {

    const [isOpen, setIsOpen] = useState(defaultOpen);
    const cardRef = useRef(null);
    
    useEffect(() => {
        if (defaultOpen) {
            setIsOpen(true);
        }
    }, [defaultOpen]);

    useEffect(() => {
        if (defaultOpen) {
        setIsOpen(true);

        setTimeout(() => {
            cardRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            });
        }, 100);
        }
    }, [defaultOpen]);

    const toggleCard = () => {
        setIsOpen((current) => !current);
    };

    return (
        <article
            className={`${styles.card} ${
                isOpen ? styles.open : ""
            }`}
            ref={cardRef}
        >
            <button
                type="button"
                className={styles.summary}
                onClick={toggleCard}
                aria-expanded={isOpen}
            >
                <div className={styles.summaryContent}>
                    <h2 className={styles.title}>
                        {project.name}
                    </h2>

                    <p className={styles.date}>
                        {project.date}
                    </p>

                    <div className={styles.summaryRow}>
                        <h2 className={styles.skills}>{project.descriptors}</h2>

                        <span className={styles.actionText}>
                            {isOpen ? "click to close" : "click to expand"}
                        </span>
                    </div>
                    
                </div>

                {project.previewImage && (
                    <img
                        src={project.previewImage}
                        alt=""
                        className={styles.previewImage}
                        style={{
                            "--preview-position-y": project.previewPositionY ?? "50%",
                        }}
                    />
                )}
            </button>

            {isOpen && (
                <>
                <div className={styles.details}>
                    <div className={styles.gallery}>
                        <MediaGallery
                            media={project.media}
                            altPrefix={project.name}
                        />
                    </div>

                    <div className={styles.info}>
                        <div>
                            <h3>Tools/Skills Used</h3>
                            <p>{project.tools}</p>
                        </div>

                        <div>
                            <h3>Overview</h3>
                            <p>{project.overview}</p>
                        </div>

                        <div>
                            <h3>My Contribution</h3>
                            <p>{project.contribution}</p>
                        </div>

                    </div>
                </div>

                {project.links?.length > 0 && (
                    <div className={styles.bottomLinks}>
                        {project.links.map((link) => (
                            <a
                                key={link.link}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                {link.name} ↗
                            </a>
                        ))}
                    </div>
                )}
                </>
            )}
        </article>
    );
}