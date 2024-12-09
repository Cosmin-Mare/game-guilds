import styles from "./heading.module.css"
export default function Heading() {
  return (
    <div className={styles.heading}>
      <h1>GameGuilds</h1>
      <h2>Build Unity games with your friends</h2>
      <h2>Receive grants to improve and publish them</h2>
      <img src="/wooden_sword.png" className={styles.woodenSword}></img>
      <div className={styles.buttonContainer}>
        <button>Get your grant!</button>
        <button>How to make a game?</button>
      </div>
    </div>
  );
}
