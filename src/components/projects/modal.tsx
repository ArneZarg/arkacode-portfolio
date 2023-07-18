import Image from "next/image";
import styles from "./modal.module.css";

export default function Modal(props:any){
    const {projectData,modalActive,handleModal} = props;

    

    return(
        <div className={modalActive ? `${styles.modal} ${styles.active}` : styles.modal}>
            <div className={styles.overlay} onClick={handleModal}></div>
            
            <div className={styles.content}>
                <button className={styles.close} onClick={handleModal}>
                    Close
                </button>
                <div className={styles.modalTitle}>
                    {projectData.title}
                </div>
                <div className={styles.modalImg}>
                    <Image
                        src={projectData.imageSrc ? projectData.imageSrc : "/img/placeholder.png"}
                        width={400}
                        height={250}
                        alt={projectData.title}
                    />
                </div>
                <p>{projectData.modalContent ? projectData.modalContent.longDescription : projectData.description}</p>
                <div className={styles.modalTech}>
                    <h4>Technologies</h4>
                    <div className={styles.techRow}>
                        {projectData.technologies.map((t:string)=>{
                            return <div className={styles.techText}>{t}</div>
                        })}
                    </div>
                </div>
                {
                    projectData.url ? <div className={styles.links}>
                    <h4>Website</h4>
                    <a target="_blank" href={projectData.url}>{projectData.url}</a>
                </div> : null
                }
                {
                    projectData.github ? 
                    <div className={styles.links}>
                        <h4>Github</h4>
                        <a target="_blank" href={projectData.github}>{projectData.github}</a>
                    </div>
                    : null
                }
                
            </div>
        </div>
    )
}