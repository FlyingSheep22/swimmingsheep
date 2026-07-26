import styles from "./GameCard.module.css";

export default function GameCard({ name, coverUrl, gameUrl }) {
    const content = (
        <>
            <div className={styles.coverWrapper}>
                {coverUrl ? (
                    <img
                        src={coverUrl}
                        alt={`${name} cover`}
                        className={styles.cover}
                    />
                ) : (
                    <div className={styles.placeholder} />
                )}
            </div>

            <p className={styles.name}>{name || "—"}</p>
        </>
    );

    if (!gameUrl) {
        return <div className={styles.card}>{content}</div>;
    }

    return (
        <a
            href={gameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`View ${name}`}
        >
            {content}
        </a>
    );
}