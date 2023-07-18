import Project from '@/components/projects/project';
import styles from './projects.module.css'
import Image from 'next/image';


async function getData(){
    const res = await fetch("http://localhost:3000/api/projects");
    if(!res.ok){
        throw new Error("Failed to fetch data.");
    }
    return res.json();
}

const Projects = async () => {
    const projects = await getData();
    console.log(projects)
    return(
        <main>
            <div className={styles.container}>
                <h1>Projects</h1>
                <div className={styles.projects}>
                    {projects.map((p:object) => {
                        return <Project projectData={p}/>
                    })}
                </div>
            </div>
        </main>)
}

export default Projects;