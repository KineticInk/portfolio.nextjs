"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import AboutImg from "@/app/assets/images/5.jpg";

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.page}>

            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <strong>Jaelon Stimak-Eckman</strong>
                </Link>
                <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ""}`}>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className={styles.contentSection}>
                <h1>About Me :)</h1>
                <h2>More about me as a person</h2>
                <Image
                    src={AboutImg}
                    alt="abtimg"
                    style={{ width: "100%", height: "auto" }}
                />
                <p>
                    I&apos;ve always been about creating, ever since I was a little kid, sticking
                    quarters in between my toes while painting my body and stacking redbull cans.
                    Visual storytelling has been in my blood for generations, from photographers,
                    painters, or video business owners. I&apos;m a determined young man with a
                    sensitive heart and an observant mind. And sometimes that&apos;s all you need to win.
                </p>
            </div>

        </div>
    );
}