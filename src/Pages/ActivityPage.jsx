import styles from './Activity.module.css'


export default function ActivityPage() {
    return (
        <div className={styles.activitiesContainer}>
            <h1>Discover Mouride Activities</h1>
            <p>Explore key aspects of Mouridism, from spiritual teachings to community events.</p>

           
            <section className={styles.videoSection}>
                <h2>Teachings of Cheikh Ahmadou Bamba</h2>
                <div className={styles.videoContainer}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6Erm2Nla0NM?si=21ZPEiuGeOGmBPwO" title="Teachings of Cheikh Ahmadou Bamba" frameBorder="0" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pFYATdi6Zak?si=61C9lUEO_bX1w7eU" title="Mouride Community Events" frameBorder="0" allowFullScreen></iframe>
                </div>
            </section>

           
            <section className={styles.gallerySection}>
                <h2>Photo Gallery</h2>
                <div className={styles.galleryGrid}>
                    <img src="/images/touba.jpg" alt="Great Mosque of Touba" />
                    <img src="/images/prayer.jpg" alt="Mouride Prayer Circle" />
                    <img src="/images/community.jpg" alt="Mouride Community Gathering" />
                    <img src="/images/sermon.jpg" alt="Sermon & Teachings" />
                </div>
            </section>

           
            <section className={styles.activitiesList}>
                <h2>Key Mouride Activities</h2>
                <ul>
                    <li><strong>Spiritual Gatherings:</strong> Regular meetings for prayer and reflection.</li>
                    <li><strong>Community Service:</strong> Charitable initiatives to help those in need.</li>
                    <li><strong>Educational Programs:</strong> Classes on Islamic teachings and Mouride traditions.</li>
                    <li><strong>Annual Pilgrimages:</strong> Trips to Touba and other important sites.</li>
                    <li><strong>Cultural Celebrations:</strong> Mouride music, art, and storytelling events.</li>
                </ul>
            </section>
        </div>
    )
}