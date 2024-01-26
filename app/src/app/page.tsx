import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Todos</h1>

      <div>
        <div><span className="material-symbols-outlined">check_box_outline_blank</span></div>
      </div>
    </main>
  );
}
