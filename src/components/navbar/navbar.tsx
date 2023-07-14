import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.desktop}>
                <div className={styles.inner}>
                    <div className={styles.siteLogo}>
                        <Link href="/">ARKACODE.COM</Link>
                    </div>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Projects</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/ArneZarg">
                                <Image src="/img/github.png" width={35} height={35} alt="Github Link"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;