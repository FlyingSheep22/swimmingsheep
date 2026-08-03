import Image from "next/image";
import styles from "./ExperienceEntry.module.css";

export default function ExperienceEntry({
    role,
    company,
    date,
    description,
    logo,
}) {
    return (
        <article className={styles.entry}>
            <div className={styles.top}>
                <div className={styles.heading}>
                    <h2 className={styles.role}>{role}</h2>

                    <div className={styles.meta}>
                        <p className={styles.company}>{company}</p>
                        <p className={styles.date}>{date}</p>
                    </div>
                </div>

                <div className={styles.logoWrapper}>
                    <Image
                        src={logo}
                        alt={`${company} logo`}
                        fill
                        className={styles.logo}
                    />
                </div>
            </div>

            <p className={styles.description}>{description}</p>
        </article>
    );
}