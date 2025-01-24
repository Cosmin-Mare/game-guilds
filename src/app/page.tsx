import Flag from "@/components/flag";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Steps from "@/components/steps";
import SubmitButton from "@/components/submit";
import Tiers from "@/components/tiers";

export default function Home() {
  return (
    <div>
      <SubmitButton />
      <Flag />
      <Header />
      <Steps />
      <Tiers />
      <Footer />
    </div>
  );
}
