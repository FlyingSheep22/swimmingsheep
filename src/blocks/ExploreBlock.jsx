import Link from "next/link";
import Image from "next/image";

import styles from "./ExploreBlock.module.css";

const Artwork = "/images/Explore.jpg"; // placeholder

const links = [
    {
        title: "About",
        description: "Past Experiences, Skills, Interests",
        href: "/about",
    },

    {
        title: "Projects",
        description: "All Projects I've worked on",
        href: "/projects",
    },
    
    {
        title: "Creative",
        description: "UI/UX, Graphic Design, Digital Art",
        href: "/contact",
    },
];

export default function ExploreBlock() {
    return (
        <section className={styles.block}>

            <div className={styles.left}>

                <h2>Explore More</h2>

            {/* <p className={styles.subtitle}>
                    Outside of programming, I'm drawn to thoughtful design,
                    game development, digital art, and building experiences
                    that feel polished from both a technical and creative
                    perspective.
                </p> */}

                <div className={styles.links}>
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className={styles.link}
                        >
                            <h3>{link.title}</h3>
                            <p>{link.description}</p>

                            <span className={styles.arrow}>→</span>
                        </Link>
                    ))}
                </div>

            </div>

            <div className={styles.right}>
                <Image
                    src={Artwork}
                    alt=""
                    fill
                    className={styles.artwork}
                />
            </div>

        </section>
    );
}