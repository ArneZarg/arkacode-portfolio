import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.homepage}>
          <div className={styles.background}>
            <Image
              src="/img/Background Art.png"
              alt="Background Art"
              width={579}
              height={519}
            />
          </div>
          <h1><span>Welcome to </span><br/>Arne Zargarian's Web Developer Portfolio</h1>
          <p>Are you seeking a talented <strong>full stack web developer</strong> with a diverse skill set to elevate your online presence? Look no further! Arne Zargarian is an experienced and passionate web developer specializing in a wide range of cutting-edge technologies. With expertise in <strong>HTML, CSS, React, WordPress, .NET Core, SQL, PHP, and Shopify</strong>, Arne crafts dynamic websites that captivate audiences and deliver exceptional user experiences.</p>
          <div className={styles.see}>
            <Link href="/projects">See More About Me</Link>
          </div>
        </div>
      </div>
    </main>
  )
}