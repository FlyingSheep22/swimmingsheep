import Link from "next/link"
import Image from "next/image";
import { useRef } from "react";
import styles from "./ProjectCard.module.css";

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
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
    >
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={project.images[0]}
          alt={project.name}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
        />

        {project.video && (
          <video
            ref={videoRef}
            className={styles.video}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>

      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.tools}>{project.tools}</p>
    </Link>
  );
}