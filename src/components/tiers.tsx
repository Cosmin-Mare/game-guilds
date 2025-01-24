import styles from "./tiers.module.css"
import TierCard, { TierCardProps } from "./tierCard"

export interface TierCard extends TierCardProps{
  key: number
}

export default function Tiers() {
  const tiers : TierCard[] = [
    {
      key: 1,
      tierColor: "#856a39",
      tierIcon: "/wooden_sword.png",
      tierName: "Playground",
      tierDescription: "Intended for experiments or small games",
      playtime: "2 minutes",
      maxReward: "$50"
    },
    {
      key: 2,
      tierColor: "#908e8b",
      tierIcon: "/stone_sword.png",
      tierName: "Voyage",
      tierDescription: "Intended for small-medium games",
      playtime: "5 minutes",
      maxReward: "$100"
    },
    {
      key: 3,
      tierColor: "#cacaca",
      tierIcon: "/iron_sword.png",
      tierName: "Horizon",
      tierDescription: "Intended for medium games",
      playtime: "10 minutes",
      maxReward: "$200"
    },
    {
      key: 4,
      tierColor: "#85e3d3",
      tierIcon: "/diamond_sword.png",
      tierName: "Ascent",
      tierDescription: "Intended for medium-large games",
      playtime: "30 minutes",
      maxReward: "$500"
    }
  ];
  return (
    <div className={styles.tiers}>
      {
      tiers.map((tier) => (<TierCard key={tier.key} {...tier as TierCardProps}/>))
      }
    </div>

  );
}