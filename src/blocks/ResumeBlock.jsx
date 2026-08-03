const ProfileImg = '/images/o5jmamjfajdz.png'
const BannerImg = '/images/1892942565.jpg'

import Image from "next/image";
import styles from "./ResumeBlock.module.css";

import ExperienceEntry from "@/components/ExperienceEntry/ExperienceEntry";

const Experiences = [
  {
    role: "UI Programmer Intern",
    company: "Behaviour Interactive",
    date: "May 2026 - Aug 2026",
    description: "Programmed in C++ and Unreal Engine for an unannounced AAA title by Behaviour Interactive.",
    logo: "/icons/company/behaviour.png"
  },

  {
    role: "Software Engineer Intern",
    company: "Voldex",
    date: "May 2025 - Aug 2025",
    description: "Roblox programming on Driving Empire. Top driving experience on Roblox, 2m+ daily visitors.",
    logo: "/icons/company/voldex.png"
  },
]

const education = {
  role: "Co-op in Software Engineering",
  company: "McGill University",
  date: "Sep 2023 - Aug 2028",
  logo: "/icons/company/mcgill.png"
}

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
      </section>
      
      <div className={styles.column}>
        <section className={styles.rightSideBox}>
          <h1>Experience</h1>
          <div className={styles.experiences}>
            {
              Experiences.map((item, index) => (
                <ExperienceEntry
                  role={item.role}
                  company={item.company}
                  date={item.date}
                  description={item.description}
                  logo={item.logo}
                />
              ))
            }
          </div>
        </section>

        <section className={styles.rightSideBox}>
          <h1>Education</h1>
          <ExperienceEntry
            role={education.role}
            company={education.company}
            date={education.date}
            description={education.description}
            logo={education.logo}
          />
        </section>
      </div>      
    </div>
  );
}