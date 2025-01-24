import Image from "next/image";
import Header from "../components/header";
import Steps from "../components/steps";
import Tiers from "../components/tiers";

export default function Home() {
  return (
    <div>
      <div className={"submitGame"}>
        <a className={"button"} href="https://airtable.com/appHyfZjPXrRXxVGl/pagm3aJtiGwB7NfJl/form">Submit your game!</a>
      </div>  
      <a href="https://hackclub.com" className={"hcLogo"}>
        <Image src="/flag-orpheus-top.svg" alt="hackclub" />
      </a>
      <Header />
      <Steps />
      <Tiers />
    </div>
  );
}
