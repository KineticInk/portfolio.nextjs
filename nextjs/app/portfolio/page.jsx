"use client";

import { useState } from "react";
import Image from "next/images";
import Link from "next/link";
import styles from "./page.module.css";
import BBShower1 from "@/app/assets/images/bbshower1.jpg";
import BBShowercollage from "@/app/assets/images/bbshowercollage.jpg";
import BBShowerhands from "@/app/assets/images/bbshowerhands.jpg";
import Smokeforest from "@/app/assets/images/smokeforest.jpg";
import Forestpain from "@/app/assets/images/forestpain.jpg";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.body}>

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
                <h1>Portfolio</h1>
                <h2>All done by me</h2>

                <video className={styles.video} width="100%" height="100%" controls poster="Untitled-2.png">
                    <source src="showreel.mp4" type="video/mp4" />
                </video>

                <h1>Photos</h1>
                <Image className={styles.flick} src={BBShower1} alt="bbshower" width={300} height={300} />
                <Image className={styles.flick} src={BBShowercollage} alt="bbshower collage" width={300} height={300} />
                <Image className={styles.flick} src={BBShowerhands} alt="bbshower hands" width={300} height={300} />
                <Image className={styles.flick} src={Smokeforest} alt="smoke forest" width={300} height={300} />
                <Image className={styles.flick} src={Forestpain} alt="forest" width={300} height={300} />

                <video className={styles.flick} src="web2.mov" width={1000} />
            </div>

        </div>
    );
}