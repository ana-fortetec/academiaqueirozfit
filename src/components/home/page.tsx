import GymHero from "./hero";
import Modalities from "./modalities";
import Testimonials from "./testimonials/page";
import PlansHome from "./plans-home";

export default function HomeSection(): JSX.Element {
  return (
    <div>
      <GymHero />
      <Modalities />
      <PlansHome />
      <Testimonials />
    </div>
  );
}
