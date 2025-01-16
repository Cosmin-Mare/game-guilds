import styles from "./tiers.module.css"

export default function Tiers() {
  return (
    <div className={styles.tiersContainer}>
      <table id={styles.tiers}>
        <thead>
            <tr>
                <th className={styles.iconTitle}></th>
                <th>Tier</th>
                <th>Playtime</th>
                <th>Max Reward</th>
            </tr>
        </thead>
        <tbody>
            <tr className={styles.tier1}>
                <td className={styles.firstCol}><img className={styles.swordIcon} src="/wooden_sword.png"/></td>
                <td className={styles.nameCol}>Playground</td>
                <td>2 minutes</td>
                <td className={styles.lastCol}>$50</td>
            </tr>
            <tr className={styles.tier2}>
                <td className={styles.firstCol}><img className={styles.swordIcon} src="/stone_sword.png"/></td>
                <td className={styles.nameCol}>Voyage</td>
                <td>x minutes</td>
                <td className={styles.lastCol}>$100</td>
            </tr>
            <tr className={styles.tier3}>
                <td className={styles.firstCol}><img className={styles.swordIcon} src="/iron_sword.png"/></td>
                <td className={styles.nameCol}>Horizon</td>
                <td>x minutes</td>
                <td className={styles.lastCol}>$200</td>
            </tr>
            <tr className={styles.tier4}>
                <td className={styles.firstCol}><img className={styles.swordIcon} src="/diamond_sword.png"/></td>
                <td className={styles.nameCol}>Ascent</td>
                <td>x hours</td>
                <td className={styles.lastCol}>$500</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
// ### Tier 1: GameGuilds Playground

// - This tier is intended for experiments or small games
// - Expected playtime: 2m
// - Expected Hours worked: 10-15
// - Maximum Reward: $50

// ### Tier 2: GameGuilds Voyage

// - This tier is intended for small-medium games
// - Expected playtime:
// - Expected hours worked: 15-25
// - Maximum Reward: $100

// ### Tier 3: GameGuilds Horizon

// - This tier is intended for medium games
// - Expected playtime:
// - Expected hours worked: 25-50
// - Maximum reward: $200

// ### Tier 4: GameGuilds Ascent

// - This tier is intended for medium-large games
// - Expected playtime:
// - Expected hours worked: 50-150
// - Maximum reward: $500