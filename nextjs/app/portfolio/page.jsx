import Image from "next/image";
import style from "./page.module.css";
import BBShower1 from "@/app/assets/images/bbshower1.jpg";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

            <header>
                <a href="index.html" className={style.logo}><strong>Jaelon Stimak-Eckman </strong></a>
                <nav id="nav">
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
                <Image className={style.flick} src={BBShower1.src} alt="car" width={300} height={300} />
                <img className="flick" src="bbshower1.JPG" alt="car" width="25%" height="25%" />
                <img className="flick" src="bbshowercollage.JPG" alt="bbshower" width="25%" height="25%" />
                <img className="flick" src="bbshowerHands.JPG" alt="bbshower" width="25%" height="25%" />
                <img className="flick" src="smokeforest.JPG" alt="forest" width="100%" height="100%" />
                <img className="flick" src="forestpain.JPG" alt="car" width="50%" height="25%" />


                <video src="web 2.mov" width="1000px" />
            </div>

            <header>
                <a href="/index.html" className={style.logo}><strong>Jaelon Stimak-Eckman </strong></a>
                <nav id="nav">
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
