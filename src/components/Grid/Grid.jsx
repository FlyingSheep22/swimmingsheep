import styles from "./Grid.module.css"
import Image from "next/image";

export default function Grid({
    gridItems, columns
}
) {

  return (
    <section className={styles.container}>
        <div className={styles.grid}
                style={{"--columns": columns}}>
            {gridItems.map((item, index) => (
                <div className={styles.item}>
                    <Image
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                        width={40}
                        height={40}
                    />
                </div>
            ))}
        </div>
    </section>
  );
}