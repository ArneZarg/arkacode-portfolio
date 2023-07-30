"use client"
import styles from "./about.module.css"
import Skill from "@/components/about/skill";
import { useState,useEffect } from "react";


const getData = async () => {
    try {
      const response = await fetch('/api/about');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };

export default function About(){

    const [skills, setSkills] = useState<any>([]);

    useEffect(() => {
        getData()
        .then((data) => setSkills(data))
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return(
        <main>
            <div className={styles.container}>
                <h1>Why Choose Arne Zargarian?</h1>
                <div className={styles.skills}>
                    {
                        skills.map((s:any,i:number) => {
                            return <Skill key={i} skillData={s}/>
                        })
                    }
                </div>
                <a href="Arne Zargarian - Full Stack Developer.docx.pdf" target="_blank">Download my resume here!</a>
                <div className={styles.footer}>
                    <h2>Ready to bring your digital vision to life?</h2>
                    <p>Reach out to Arne today to discuss your web development needs. With his proven expertise and commitment to excellence, John will work closely with you to turn your ideas into reality. Let&apos;s create something remarkable together!</p>
                </div>
            </div>
        </main>
    )
}