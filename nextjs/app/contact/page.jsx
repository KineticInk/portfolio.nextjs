"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/images";
import styles from "./page.module.css";
import Bts1 from "@/app/assets/images/bts.jpg";

export default function Contact() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    }

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
                <h1>CONTACT ME</h1>
                <h2>for inquiries :)</h2>
                <Image src={Bts1} alt="bts" style={{ width: "100%", height: "auto" }} />
            </div>

            <div className={styles.contactSection}>
                <div className={styles.contactContainer}>
                    <h2>Get In Touch</h2>
                    <p>Available for commissions and collaborations</p>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}