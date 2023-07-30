"use client"

import Image from "next/image";
import styles from "./project.module.css"
import Modal from "./modal";
import { useState } from "react";

export default function Project(props:any){

    const [modalActive,setModalActive] = useState<boolean>(false);

    const {projectData} = props;

    const handleModal = () => {

        const body = document.querySelector("body");

        if(modalActive){
            body?.classList.remove("modal-active")
        }else{
            body?.classList.add("modal-active");
        }
        setModalActive(!modalActive);
    }
    
    return(
        <>
            <div className={styles.project} onClick={handleModal}>
                <div className={styles.screenshot}>
                    <Image
                        className={projectData.imageSrc ? "" : styles.placeholder}
                        src={projectData.imageSrc ? projectData.imageSrc : "/img/placeholder.png"}
                        width={400}
                        height={600}
                        alt={projectData.imageAlt ? projectData.imageAlt : 'placeholder'}
                    />
                </div>
                <div className={styles.description}>
                    <div className={styles.text}>
                        <h3>{projectData.title}</h3>
                        <p>{projectData.description}</p>
                        <div className={styles.technologies}>
                            {projectData.technologies.map((t:string,i:number)=>{
                                return <div key={i} className={styles.tech}>{t}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Modal handleModal={handleModal} modalActive={modalActive} projectData={projectData}/>
        </>
    )
}