import styles from "./GridWithHeader.module.css"

export default function GridWithHeader({
    headerText, gridItems, columns
}
) {

  return (
    <section className={styles.container}>
        <h1 className={styles.header}>{headerText}</h1>
        <div className={styles.grid}
                style={{"--columns": columns}}>
            {gridItems.map((item, index) => (
                <div className={styles.item}>
                    <img
                        src={item.image}
                    />
                </div>
            ))}
        </div>
    </section>
  );
}