"use client"

import Project from '@/components/projects/project';
import styles from './projects.module.css';
import {useEffect, useState} from 'react';


const getData = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      console.log('Data: ', data);
      return data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };
  
  

const Projects = () => {
    const [projects, setProjects] = useState<any>([]);

    useEffect(() => {
        getData()
        .then((data) => setProjects(data))
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    return(
        <main>
            <div className={styles.container}>
                <h1>Projects</h1>
                <div className={styles.projects}>
                    {projects.map((p:object) => {
                        return <Project projectData={p}/>
                    })}
                </div>
                <div className={styles.footer}>
                    <a href="Arne Zargarian - Full Stack Developer.docx.pdf" target="_blank">Download my resume here!</a>
                </div>
            </div>
        </main>)
}

export default Projects;