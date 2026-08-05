import { useEffect, useState } from "react";
import styles from "./ArtGrid.module.css";

export default function ArtGrid({
    images = [],
    columns = 3,
    gap = "1rem",
}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const distributedColumns = Array.from(
        { length: columns },
        () => ({
            images: [],
            estimatedHeight: 0,
        })
    );

    images.forEach((image) => {
        const shortestColumn = distributedColumns.reduce(
            (shortest, column) =>
                column.estimatedHeight < shortest.estimatedHeight
                    ? column
                    : shortest
        );

        shortestColumn.images.push(image);
        shortestColumn.estimatedHeight += 1 / image.aspectRatio;
    });

    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <>
            <div
                className={styles.grid}
                style={{
                    "--columns": columns,
                    "--gap": gap,
                }}
            >
                {distributedColumns.map((column, columnIndex) => (
                    <div
                        key={columnIndex}
                        className={styles.column}
                    >
                        {column.images.map((image) => (
                            <button
                                key={image.src}
                                type="button"
                                className={styles.imageButton}
                                onClick={() => setSelectedImage(image)}
                                aria-label="View larger image"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt ?? ""}
                                    loading="lazy"
                                    className={styles.image}
                                />
                            </button>
                        ))}
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className={styles.modal}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image preview"
                    onMouseDown={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image"
                    >
                        ×
                    </button>

                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt ?? ""}
                        className={styles.modalImage}
                        onMouseDown={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}