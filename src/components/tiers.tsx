import styles from "./tiers.module.css"
import TierCard, { TierCardProps } from "./tierCard"


export default function Tiers() {
  const tiers : TierCardProps[] = [
    {
      tierColor: "#856a39",
      tierIcon: "/wooden_sword.png",
      tierName: "Playground",
      tierDescription: "Experiments / small games",
      playtime: "2 minutes",
      maxReward: "$50",
    },
    {
      tierColor: "#908e8b",
      tierIcon: "/stone_sword.png",
      tierName: "Voyage",
      tierDescription: "Small-medium games",
      playtime: "x minutes",
      maxReward: "$100",
    },
    {
      tierColor: "#cacaca",
      tierIcon: "/iron_sword.png",
      tierName: "Horizon",
      tierDescription: "Medium games",
      playtime: "x minutes",
      maxReward: "$200",
    },
    {
      tierColor: "#85e3d3",
      tierIcon: "/diamond_sword.png",
      tierName: "Ascent",
      tierDescription: "Medium-large games",
      playtime: "x minutes",
      maxReward: "$500",
    }
  ];
  return (
    <div className={styles.tiers}>
      <TierCard {...tiers[0]}/>
      <TierCard {...tiers[1]}/>
      <TierCard {...tiers[2]}/>
      <TierCard {...tiers[3]}/>
      </div>

  );
}