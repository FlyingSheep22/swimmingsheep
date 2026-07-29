const ProfileImg = '/images/o5jmamjfajdz.png'
const BannerImg = '/images/1892942565.jpg'

import Image from "next/image";
import styles from "./ProfileBlock.module.css";
import GridWithHeader from "@/components/GridWithHeader/GridWithHeader";

const Skills = [
    {
        name: "UnrealEngine",
        image: "/images/icons/itch.svg",
    },
    {
        name: "Unity",
        image: "/images/icons/itch.svg",
    },
    {
        name: "C++",
        image: "/images/icons/itch.svg",
    },
    {
        name: "C#",
        image: "/images/icons/itch.svg",
    },
    {
        name: "Perforce",
        image: "/images/icons/itch.svg",
    },
    {
        name: "Git/GitHub",
        image: "/images/icons/itch.svg",
    },
    {
        name: "Figma",
        image: "/images/icons/itch.svg",
    },
    {
        name: "React",
        image: "/images/icons/itch.svg",
    },
    {
        name: "Jira/Confluence",
        image: "/images/icons/itch.svg",
    },
    {
        name: "Java",
        image: "/images/icons/itch.svg",
    },
];

export default function ProfileBlock() {
  return (
    <div className={styles.homeGrid}>
      <section className={styles.profile}>
        <div className={styles.profileImage}> 
          <Image
            src={ProfileImg}
            alt="Profile picture"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.profileText}>
          <h1 className={styles.nameTitle}>Kevin Bai</h1>
          <p className={styles.nameSubtitle}>
            Game Programmer, UI/UX Design, Artist
          </p>
        </div>
      </section>

    <div className={styles.rightColumn}>
        <section className={styles.introduction}>
          <h1 className={styles.introductionTitle}>
            Hello!
          </h1>

          <p className={styles.introductionDescription}>
            My name is Kevin, I’m a 20 year old Software Engineering student in my fourth year at McGill University.
            I am a passionate game developer,
          </p>
        </section>

        <section className={styles.skills}>
          <GridWithHeader
            headerText="Skills"
            gridItems={Skills}
          />

        </section>
      </div>
    </div>
  );
}