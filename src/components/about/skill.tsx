import Image from "next/image";
import styles from "../../app/about/about.module.css";

export default function Skill(props:any){
    const {skillData} = props;
    return(
        <div className={styles.skill}>
            <div className={styles.logo}>
                <Image
                    src={skillData.imgUrl}
                    width={570}
                    height={515}
                    alt={skillData.title}
                />
            </div>
            <div className={styles.text}>
                <h3>{skillData.title}</h3>
                <p>{skillData.description}</p>
            </div>
        </div>
    )
}