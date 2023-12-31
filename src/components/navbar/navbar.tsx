"use client"

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [activeMobile, setActiveMobile] = useState<boolean>(false);
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
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/ArneZarg">
                                <Image src="/img/github.png" width={35} height={35} alt="Github Link"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.mobile}>
                <button onClick={() => setActiveMobile(!activeMobile)} className={activeMobile ? `${styles.mobileNavButton} ${styles.active}` :styles.mobileNavButton}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={styles.siteLogo}>
                    <Link href="/">ARKACODE.COM</Link>
                </div>
                <div className={activeMobile ? `${styles.mobileMenu} ${styles.active}` : styles.mobileMenu}>
                    <ul>
                        <li>
                            <Link onClick={() => setActiveMobile(false)} href="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => setActiveMobile(false)} href="/about">About</Link>
                        </li>
                        <li>
                            <Link onClick={() => setActiveMobile(false)} href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link onClick={() => setActiveMobile(false)} href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;