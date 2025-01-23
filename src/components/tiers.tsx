import styles from "./tiers.module.css"
import TierCard from "./tierCard"

export default function Tiers() {
  return (
    <div className={styles.tiers}>
      <TierCard 
        tierColor={"#856a39"}
        tierIcon={"/wooden_sword.png"}
        tierName={"Playground"}
        tierDescription={"Intended for experiments or small games"}
        playtime={"2 minutes"}
        maxReward={"$50"}
      />
      <TierCard 
        tierColor={"#908e8b"}
        tierIcon={"/stone_sword.png"}
        tierName={"Voyage"}
        tierDescription={"Intended for small-medium games"}
        playtime={"5 minutes"}
        maxReward={"$100"}
      />
      <TierCard 
        tierColor={"#cacaca"}
        tierIcon={"/iron_sword.png"}
        tierName={"Horizon"}
        tierDescription={"Intended for medium games"}
        playtime={"10 minutes"}
        maxReward={"$200"}
      />
      <TierCard 
        tierColor={"#85e3d3"}
        tierIcon={"/diamond_sword.png"}
        tierName={"Ascent"}
        tierDescription={"Intended for medium-large games"}
        playtime={"30 minutes"}
        maxReward={"$500"}
      />
    </div>

  );
}