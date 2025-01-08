import Header from "@/components/header";
import Steps from "@/components/steps";

export default function Home() {
  return (
    <div>   
      <a href="https://hackclub.com" className={"hcLogo"}>
        <img src="/flag-orpheus-top.svg"></img>
      </a>
      <Header />
      <Steps />
    </div>
  );
}
