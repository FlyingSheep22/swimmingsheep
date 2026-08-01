import { useEffect, useState } from "react";
import styles from "./MediaGallery.module.css";

export default function MediaGallery({
    media = [],
    altPrefix = "Project media",
}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedMedia = media[selectedIndex];

    useEffect(() => {
        setSelectedIndex(0);
    }, [media]);

    if (media.length === 0) {
        return null;
    }

    const showPrevious = () => {
        setSelectedIndex((current) =>
            current === 0 ? media.length - 1 : current - 1
        );
    };

    const showNext = () => {
        setSelectedIndex((current) =>
            current === media.length - 1 ? 0 : current + 1
        );
    };

    const getYoutubeThumbnail = (id) =>
        `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

    const getYoutubeEmbed = (id) =>
        `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`;

    const getThumbnail = (item) => {
        if (item.type === "youtube") {
            return (
                <img
                    src={getYoutubeThumbnail(item.src)}
                    alt=""
                    className={styles.thumbnail}
                />
            );
        }

        if (item.type === "video") {
            if (item.thumbnail) {
                return (
                    <img
                        src={item.thumbnail}
                        alt=""
                        className={styles.thumbnail}
                    />
                );
            }

            return (
                <video
                    src={item.src}
                    className={styles.thumbnail}
                    muted
                    preload="metadata"
                />
            );
        }

        return (
            <img
                src={item.src}
                alt=""
                className={styles.thumbnail}
            />
        );
    };

    const getMediaKey = (item, index) =>
        `${item.type}-${item.src}-${index}`;

    return (
        <div className={styles.gallery}>
            <div className={styles.viewport}>
                {selectedMedia.type === "image" && (
                    <img
                        src={selectedMedia.src}
                        alt={`${altPrefix} ${selectedIndex + 1}`}
                        className={styles.mainMedia}
                    />
                )}

                {selectedMedia.type === "video" && (
                    <video
                        key={selectedMedia.src}
                        src={selectedMedia.src}
                        className={styles.mainMedia}
                        controls
                        playsInline
                        autoPlay
                        muted
                        preload="metadata"
                        loop
                    />
                )}

                {selectedMedia.type === "youtube" && (
                    <iframe
                        key={selectedMedia.src}
                        src={`https://www.youtube.com/embed/${selectedMedia.src}?autoplay=1&mute=1&rel=0`}
                        title={`${altPrefix} ${selectedIndex + 1}`}
                        className={styles.mainMedia}
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}

                {media.length > 1 && (
                    <>
                        <button
                            type="button"
                            className={`${styles.arrow} ${styles.previous}`}
                            onClick={showPrevious}
                            aria-label="Previous media"
                        >
                            ←
                        </button>

                        <button
                            type="button"
                            className={`${styles.arrow} ${styles.next}`}
                            onClick={showNext}
                            aria-label="Next media"
                        >
                            →
                        </button>
                    </>
                )}
            </div>

            {media.length > 1 && (
                <div className={styles.thumbnails}>
                    {media.map((item, index) => (
                        <button
                            key={getMediaKey(item, index)}
                            type="button"
                            className={`${styles.thumbnailButton} ${
                                index === selectedIndex
                                    ? styles.selectedThumbnail
                                    : ""
                            }`}
                            onClick={() => setSelectedIndex(index)}
                            aria-label={`Show media ${index + 1}`}
                        >
                            {getThumbnail(item)}

                            {(item.type === "video" ||
                                item.type === "youtube") && (
                                <span className={styles.videoIndicator}>
                                    ▶
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}