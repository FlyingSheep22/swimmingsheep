import { useEffect, useState } from "react";
import styles from "./CurrentlyBlock.module.css";
import SongCard from "@/components/SongsCard/SongCard";

export default function CurrentlyBlock() {
    const [items, setItems] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        async function fetchCurrently() {
            try {
                const response = await fetch("/api/notion-current");

                if (!response.ok) {
                    throw new Error("Failed to fetch currently data");
                }

                const data = await response.json();

                setItems(data.items);
                setLastUpdated(data.lastUpdated);
            } catch (error) {
                console.error("Currently fetch failed:", error);
            }
        }

        fetchCurrently();
    }, []);

    const getItem = (category) =>
        items.find((item) => item.category === category);

    const status = getItem("Status");
    const listening = getItem("Listening");
    const reading = getItem("Reading");
    const working = getItem("Working");
    const playing = getItem("Playing");

    const formattedLastUpdated = lastUpdated
        ? new Intl.DateTimeFormat("en-CA", {
              timeZone: "America/Toronto",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
          }).format(new Date(lastUpdated))
        : "Loading...";

    return (
        <section className={styles.block}>
            <div className={styles.header}>
                <h2>What I am currently...</h2>

                <p className={styles.updated}>
                    Last updated: {formattedLastUpdated}
                </p>
            </div>

            <div className={styles.grid}>
                <article className={`${styles.card} ${styles.status}`}>
                    <p className={styles.label}>Status</p>

                    <p className={styles.largeText}>
                        {status?.text || "—"}
                    </p>
                </article>

                <article className={`${styles.card} ${styles.listening}`}>
                    <p className={styles.label}>Listening to...</p>

                    <div className={styles.songWrapper}>
                        <SongCard spotifyUrl={listening?.url} />
                    </div>
                </article>

                <article className={`${styles.card} ${styles.reading}`}>
                    <p className={styles.label}>Reading...</p>

                    <div className={styles.bookCover}>
                        {/* Replace with an Image later */}
                    </div>

                    <p className={styles.itemTitle}>
                        {reading?.text || "—"}
                    </p>
                </article>

                <article className={`${styles.card} ${styles.working}`}>
                    <p className={styles.label}>Working on...</p>

                    <p className={styles.largeText}>
                        {working?.text || "—"}
                    </p>
                </article>

                <article className={`${styles.card} ${styles.playing}`}>
                    <p className={styles.label}>Playing...</p>

                    <p className={styles.largeText}>
                        {playing?.text || "—"}
                    </p>
                </article>
            </div>
        </section>
    );
}