import styles from "./tierCard.module.css"

export interface TierCardProps {
  tierColor: string;
  tierIcon: string;
  tierName: string;
  tierDescription: string;
  playtime: string;
  maxReward: string;
}

export default function TierCard(props: TierCardProps) {
  return (
    <div className={styles.tierCard}>
      <div className={styles.header} style={{backgroundColor: props.tierColor}}>
        <img src={props.tierIcon} className={styles.swordIcon} alt="Sword"/>
        <h2>{props.tierName}</h2>
      </div>
      <div className={styles.cardBody}>
        <p>{props.tierDescription}</p>
        <hr className={styles.divider} />
        <div className={styles.aspectContainer} >
          <p className={styles.aspectTitle} >Maximum Reward</p>
          <p className={styles.aspectDescription} >{props.playtime}</p>
        </div>
        <hr className={styles.divider} />
        <div className={styles.aspectContainer} >
          <p className={styles.aspectTitle} >Expected playtime</p>
          <p className={styles.aspectDescription} >{props.maxReward}</p>
        </div>
      </div>
    </div>
  );
}