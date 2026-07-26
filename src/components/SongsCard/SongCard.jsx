import { useEffect, useState } from "react";
import styles from "./SongCard.module.css";

export default function SongCard({ spotifyUrl }) {
    const [track, setTrack] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!spotifyUrl) {
            setTrack(null);
            return;
        }

        async function fetchTrack() {
            try {
                setError(false);

                const response = await fetch(
                    `/api/spotify-track?url=${encodeURIComponent(
                        spotifyUrl
                    )}`
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch Spotify track"
                    );
                }

                const data = await response.json();
                setTrack(data);
            } catch (error) {
                console.error(
                    "SongCard fetch failed:",
                    error
                );

                setError(true);
            }
        }

        fetchTrack();
    }, [spotifyUrl]);

    if (!spotifyUrl) {
        return (
            <div className={styles.placeholder}>
                No song selected
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.placeholder}>
                Song unavailable
            </div>
        );
    }

    if (!track) {
        return (
            <div className={styles.placeholder}>
                Loading...
            </div>
        );
    }

    return (
        <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`Listen to ${track.name} by ${track.artists.join(
                ", "
            )} on Spotify`}
        >
            <div className={styles.imageWrapper}>
                <img
                    src={track.albumArt}
                    alt={`${track.album} album cover`}
                    className={styles.albumArt}
                />
            </div>

            <p className={styles.songName}>
                {track.name}
            </p>

            <p className={styles.artistName}>
                {track.artists.join(", ")}
            </p>
        </a>
    );
}