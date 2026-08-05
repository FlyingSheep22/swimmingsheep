const ProfileImg = '/images/o5jmamjfajdz.png'
const BannerImg = '/images/1892942565.jpg'

import Image from "next/image";
import styles from "./ProfileBlock.module.css";
import Grid from "@/components/Grid/Grid";
import SeparatorBlock from "./SeparatorBlock";

const Skills = [
    {
        name: "UnrealEngine",
        image: "/icons/skills/unrealengine-original.svg",
    },
    {
        name: "Unity",
        image: "/icons/skills/unity-original.svg",
    },
    {
        name: "C++",
        image: "/icons/skills/cplusplus-original.svg",
    },
    {
        name: "C#",
        image: "/icons/skills/csharp-original.svg",
    },
    {
        name: "Perforce",
        image: "/icons/skills/perforce.svg",
    },
    {
        name: "Git/GitHub",
        image: "/icons/skills/git-original.svg",
    },
    {
        name: "Figma",
        image: "/icons/skills/figma-original.svg",
    },
    {
        name: "React",
        image: "/icons/skills/react-original.svg",
    },
    {
        name: "Jira/Confluence",
        image: "/icons/skills/jira-original.svg",
    },
    {
        name: "Java",
        image: "/icons/skills/java-original.svg",
    },
    {
        name: "C",
        image: "/icons/skills/c-original.svg",
    },
    {
        name: "Luau",
        image: "/icons/skills/lua-original.svg",
    },
];

const QuickStats = [
    {
        name: "Name",
        value: "Kevin Bai",
    },
    {
        name: "Pronouns",
        value: "he//they",
    },
    {
        name: "DOB",
        value: "2006-01-31",
    },
    
    {
        name: "Location",
        value: "Montreal",
    },
]

export default function ProfileBlock() {
  return (
    <div className={styles.homeGrid}>
      <div className={styles.rightColumn}>
        <section className={styles.rightSideBox}>
          <h1>
            Hello!
          </h1>

          <p className={styles.description}>
            My name is Kevin, I’m a 20 year old Software Engineering student in my fourth year at McGill University.
            I am a passionate game developer, with a particular interest in UI/UX Design/Programming, and graphic design.

            <br/><br/>

            I was born in Montreal but grew up in Ottawa, Ontario.

            <br/><br/>

            I am yet again struggling to fill up space here. I will revisit this paragraph later. One two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
          </p>
        </section>

        <SeparatorBlock/>

        <section className={styles.rightSideBox}>
          <h1>
            Interests
          </h1>

          <p className={styles.description}>
            Game Development, UI/UX Programming, Gameplay Programming, Graphic Design, UI/UX Design, Web 
            Design
          </p>
        </section>

        <SeparatorBlock/>

        <section className={styles.rightSideBox}>
          <h1>Skills</h1>
          <Grid
            gridItems={Skills}
            columns={12}
          />
        </section>
        
      </div>
      
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
          <h1 className={styles.title}>About Me</h1>
        </div>

        <div className={styles.quickStats}>
            {QuickStats.map((item, index) => (
                <div className={styles.stat}>
                    <p className={styles.statName}>{item.name}</p>
                    <p className={styles.statValue}>{item.value}</p>
                </div>
            ))}
        </div>

      </section>

    
    </div>
  );
}