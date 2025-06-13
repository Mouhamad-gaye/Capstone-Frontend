import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomePage.module.css";
import art from '../assets/artwork.jpg'
import download from '../assets/download.jpeg'
import flyer from '../assets/Untitled.png'
import touba from '../assets/touba.jpg'

export default function HomePage() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <div className={styles.homeContainer}>
            <section className={styles.heroSection}>
                <Slider {...sliderSettings} className={styles.carousel}>
                    <div><img src={touba} alt="Great Mosque of Touba" /></div>
                    <div><img src={flyer} alt="Mouride Community in Denver" /></div>
                    <div><img src={art} alt="Prayer Gathering" /></div>
                    <div><img src={download} alt="Prayer Gathering" /></div>
                </Slider>
                <h1>Preserving the Teachings of Cheikh Ahmadou Bamba</h1>
                <p>Welcome to Denver's Mouride Daara, where we uphold the values of faith, service, and education.</p>
                <button className={styles.ctaButton}>Learn More</button>
            </section>
            <section className={styles.featuredContent}>
                <h2>Our Mission & Activities</h2>
                <div className={styles.contentGrid}>
                    <div className={styles.contentCard}>
                        <h3>Islamic Education</h3>
                        <p>Offering Qur'anic studies and spiritual teachings based on the wisdom of Cheikh Ahmadou Bamba.</p>
                        <Link to="/teachings">Explore Teachings</Link>
                    </div>
                    <div className={styles.contentCard}>
                        <h3>Community Gatherings</h3>
                        <p>Join our prayer circles, discussions, and cultural celebrations.</p>
                        <Link to="/events">See Events</Link>
                    </div>
                    <div className={styles.contentCard}>
                        <h3>Charitable Initiatives</h3>
                        <p>Supporting local efforts in education, social welfare, and community service.</p>
                        <Link to="/community">Get Involved</Link>
                    </div>
                </div>
            </section>
            <footer className={styles.footer}>
                <p>&copy; 2025 Denver Mouride Daara. All rights reserved.</p>
                <p>Contact: info@denverdaara.com | Follow us on <Link to="/social">Social Media</Link></p>
            </footer>
        </div>
    );
}
