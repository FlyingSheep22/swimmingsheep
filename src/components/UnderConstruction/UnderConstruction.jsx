import styles from "./UnderConstruction.module.css";
import Header from "@/components/Header/NewHeader";

export default function UnderConstruction({ children, sidebar = null }) {
  return (
    <div>
        <Header/>
        <div className={styles.page}>
            <h1 className={styles.heading}>Page under construction</h1>
            <p className={styles.subheading}>Thank you for your patience.</p>
        </div>
    </div>
  );
}