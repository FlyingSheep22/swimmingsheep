import React from "react";
import styles from "../stylesheets/About.module.css";
const profileImage = "/images/IMG_3868.jpg";
import Skill from "../components/Skill.jsx";
import Layout from "../components/Layout.jsx";

function About(){

    return (
        <Layout>
            <div style={{paddingBottom: '20px'}}>
                <div className={styles.profile}>
                    
                    <div className={styles.name}>
                        <h1>Hey &#128075;<br></br>I'm Kevin Ji Pho</h1>
                    </div>
                    
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={profileImage}></img>
                    </div>
                    
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.infoParagraph}>
                        <p>
                            I'm a second year student in Software Engineering Co-op (B.Eng) at McGill University. I am a passionate
                            game developer specializing in UI Programming and Design, as well as Gameplay Programming.
                        </p>
                        <p>
                            In my spare time, I love to draw, attend concerts, and both play and make games :)
                        </p>
                    </div>
                    <div className={styles.skillsOverview}>
                        <Skill type={"Programming Languages and Tools"}
                            list={"C++, Java, C#, Python, C, Git, HTML, CSS, JavaScript"}
                        />

                        <Skill type={"Engines and Frameworks"}
                            list={"Unity, Unreal Engine, Roblox Studio, SpringBoot, PostgreSQL, React, NodeJS"}
                        />

                        <Skill type={"Interests"}
                            list={"UI/UX Design, Gameplay Programming, Graphic Design"}
                        />                    
                    </div>
                </div>
                
            </div>
        </Layout>
    )

}

export default About