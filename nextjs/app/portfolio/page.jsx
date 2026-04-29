import Image from "next/image";
import style from "./page.module.css";
import BBShower1 from "@/app/assets/images/bbshower1.jpg";
import BBShowercollage from "@/app/assets/images/bbshowercollage.jpg";
import BBShowerhands from "@/app/assets/images/bbshowerhands.jpg";
import Smokeforest from "@/app/assets/images/smokeforest.jpg";
import Forestpain from "@/app/assets/images/forestpain.jpg";


export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

            <header>
                <a href="index.html" className={style.logo}><strong>Jaelon Stimak-Eckman </strong></a>
                <nav className="nav">
                    <a href="portfolio.html">Portfolio</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                </nav>
                <div className="menu-toggle" onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className="menu-toggle" onclick="toggleMenu()">

            </div>
            <div className="content-section">
                <h1> Portfolio </h1>
                <h2>All done by me</h2>
                <video className="video" width="100%" height="100%" controls poster="Untitled-2.png">
                    <source src="showreel.mp4" type="video/mp4" />

                </video>
                <h1>Photos</h1>
                <Image className={style.flick} src={BBShower1.src} alt="bbshower" width={300} height={300} />
                <Image className={style.flick} src={BBShowercollage.src} alt="bbshower" width={300} height={300} />
                <Image className={style.flick} src={BBShowerhands.src} alt="bbshower" width={300} height={300} />
                <Image className={style.flick} src={Smokeforest.src} alt="forest" width={300} height={300} />
                <Image className={style.flick} src={Forestpain.src} alt="forest" width={300} height={300} />


                <video src="web 2.mov" width="1000px" />
            </div>

            <header>
                <a href="/index.html" className={style.logo}><strong>Jaelon Stimak-Eckman </strong></a>
                <nav className="nav">
                    <a href="/portfolio.html">Portfolio</a>
                    <a href="/about.html">About</a>
                    <a href="/contact.html">Contact</a>
                </nav>
                <div className="menu-toggle" onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className="menu-toggle" onclick="toggleMenu()">

            </div>
        </div>
    )
}
