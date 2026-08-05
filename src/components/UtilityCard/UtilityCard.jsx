import { useEffect, useState } from "react";
import styles from "./UtilityCard.module.css";

const TIME_ZONE = "America/Toronto";

const links = [
    {
        name: "Itch",
        href: "https://flyingsheep22.itch.io/",
        icon: "/images/icons/itch.svg",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/kevinycbai/",
        icon: "/images/icons/linkedin.svg",
    },
    {
        name: "GitHub",
        href: "https://github.com/FlyingSheep7846",
        icon: "/images/icons/github.svg",
    },
    {
        name: "Spotify",
        href: "https://open.spotify.com/user/hmg65x7x7il076kdqa2yn194i?si=6c751fd9813e4c03",
        icon: "/images/icons/spotify.svg",
    },
];

export default function UtilityCard() {
    const [now, setNow] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        setNow(new Date());

        const interval = setInterval(() => {
            setNow(new Date());
        }, 30_000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const params = new URLSearchParams({
                    latitude: "45.5019",
                    longitude: "-73.5674",
                    current: "temperature_2m,weather_code",
                    temperature_unit: "celsius",
                    timezone: TIME_ZONE,
                });

                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?${params}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch weather");
                }

                const data = await response.json();
                setWeather(data.current);
            } catch (error) {
                console.error("Weather fetch failed:", error);
            }
        }

        fetchWeather();

        const interval = setInterval(fetchWeather, 15 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    if (!now) return null;

    const time = new Intl.DateTimeFormat("en-CA", {
        timeZone: TIME_ZONE,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(now);

    const date = new Intl.DateTimeFormat("en-CA", {
        timeZone: TIME_ZONE,
        weekday: "short",
        month: "long",
        day: "numeric",
    }).format(now);

    const temperature = weather
        ? `${Math.round(weather.temperature_2m)}°C`
        : "--°C";

    return (
        <section className={styles.card}>
            <div className={styles.links}>
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label={link.name}
                    >
                        <img
                            src={link.icon}
                            alt=""
                            className={styles.icon}
                        />
                    </a>
                ))}
            </div>

            <div className={styles.separator} />

            <div className={styles.info}>
                <p className={styles.date}>Montreal, QC</p>
                <p className={styles.time}>{temperature}</p>
            </div>

            <div className={styles.separator} />

            <div className={styles.info}>
                <p className={styles.date}>{date}</p>
                <p className={styles.time}>{time}</p>
            </div>
        </section>
    );
}