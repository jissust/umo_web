import { HeroVideo } from "@/components/blocks/heroVideo/HeroVideo";
import { Presentation } from "@/components/blocks/presentation/Presentation";
import { OurLetter } from "@/components/blocks/ourLetter/OurLetter";
import { Map } from "@/components/blocks/map/Map";
import { LatestNews } from "@/components/blocks/latestNews/LatestNews";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Presentation />
      <OurLetter />
      <LatestNews />
      <Map />
    </>
  );
}
