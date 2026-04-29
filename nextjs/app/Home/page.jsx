"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/images";
import styles from "./page.module.css";

import Slide1 from "@/app/assets/images/nundu.jpg";
import Slide2 from "@/app/assets/images/bts.jpg";
import Slide3 from "@/app/assets/images/kebab.jpg";
import Slide4 from "@/app/assets/images/nyc.jpg";
import Slide5 from "@/app/assets/images/btstwo.jpg";

const slides = [
    { src: Slide1, alt: "1" },
    { src: Slide2, alt: "2" },
    { src: Slide3, alt: "3" },
    { src: Slide4, alt: "4" },
    { src: Slide5, alt: "5" },
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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

            <div className={styles.sliderContainer}>
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`${styles.slide} ${i === slideIndex ? styles.slideActive : ""}`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            priority={i === 0}
                        />
                    </div>
                ))}

                <div className={styles.sliderDots}>
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${i === slideIndex ? styles.dotActive : ""}`}
                            onClick={() => setSlideIndex(i)}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.contentSection}>
                <h1>Jaelon Stimak-Eckman</h1>
                <h2>(jzillafilmz) Director and visual storyteller.</h2>
                <p>Specializing in photography and cinematography, capturing the world around us through the lens of raw creativity.</p>
            </div>

        </div>
    );
}