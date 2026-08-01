import Link from "next/link"
import Image from "next/image";
import { useRef } from "react";
import styles from "./ProjectPreviewCard.module.css";

export default function ProjectCard({ project }) {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  const stopVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      href={`/projects?project=${project.slug}`}
      rel="noopener noreferrer"
      className={styles.card}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
    >
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={project.previewImage}
          alt={project.name}
          fill
          sizes="(max-width: 120px) 100vw, 33vw"
        />

        {project.previewVideo && (
          <video
            ref={videoRef}
            className={styles.video}
            src={project.previewVideo}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>

      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.tools}>{project.descriptors}</p>
    </Link>
  );
}