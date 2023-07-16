import styles from './projects.module.css'
import Image from 'next/image';

const Projects = () => {
    return(
        <main>
            <div className={styles.container}>
                <h1>Projects</h1>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <Image
                            src={'/img/310nutritionportfolio.gif'}
                            width={500}
                            height={500}
                            alt={"310gif"}
                        />
                        <div className={styles.description}>
                            <div className={styles.text}></div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <Image
                            src={'/img/hpemt.gif'}
                            width={500}
                            height={500}
                            alt={"hpemt"}
                        />
                    </div>
                    <div className={styles.project}>
                        <Image
                            src={'/img/kkportfolio.gif'}
                            width={500}
                            height={500}
                            alt={"hpemt"}
                        />
                    </div>
                    <div className={styles.project}>
                        <Image
                            src={'/img/kkportfolio.gif'}
                            width={500}
                            height={500}
                            alt={"hpemt"}
                        />
                    </div>
                    <div className={styles.project}>
                        <Image
                            src={'/img/sanMarino.gif'}
                            width={500}
                            height={500}
                            alt={"sanMarino"}
                        />
                    </div>
                </div>
            </div>
        </main>)
}

export default Projects;