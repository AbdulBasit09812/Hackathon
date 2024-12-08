import Image from "next/image";

import Hero from "./hero";
import Card from "./card";
import Running from "./runningslide";
import Gear from "./gear";
import Stand from "./stand";
import Essentials from "./essentials";
import RunningSlide from "./runningslide";


export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">

      <Hero/>
      <Card/>
      <RunningSlide/>
      <Gear/>
      <Stand/>
      <Essentials/>
    </main>
  );
}
