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
        <img src="/flag-orpheus-top.svg"></img>
      </a>
      <Header />
      <Steps />
      <Tiers />
    </div>
  );
}
