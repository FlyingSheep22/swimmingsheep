const ProfileImg = '/images/o5jmamjfajdz.png'
const BannerImg = '/images/abstractblue.jpg'

import Image from "next/image";
import UtilityCard from "@/components/UtilityCard/UtilityCard";
import styles from "./IntroBlock.module.css";

export default function IntroBlock() {
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
            Welcome to my website
          </h1>

          <p className={styles.introductionDescription}>
            Thank you for visiting my website! My name is Kevin Bai. I'm an avid Game Developer, Artist, UI/UX designer, and amateur web developper.
            In this website you'll find a glimpse of who I am, what I do, etc. 
            <br/><br/>
            For any inquiries, please feel free to reach out to me <a href="mailto:kevinycbai@gmail.com">via email.</a> I'll be happy to respond in a timely manner :)
          </p>
        </section>

        <div className={styles.banner}>
          <Image
            src={BannerImg}
            alt="Profile picture"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <section className={styles.listening}>
          {/* <SongsCard songInfo={songInfo} /> */}
          <UtilityCard/>
        </section>
      </div>
    </div>
  );
}