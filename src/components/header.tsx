import styles from "./heading.module.css"
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headingContainer}>
        <img src="/wooden_sword.png" className={styles.woodenSword}></img>
        <h1>GameGuilds</h1>
      </div>
      <h2>Build Unity games with your friends</h2>
      <h2>Receive grants to improve and publish them</h2>
      <div className={styles.buttonContainer}>
        <button>Get your grant!</button>
        <button>How to make a game?</button>
      </div>
    </div>
  );
}
