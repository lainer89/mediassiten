import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Mission } from "@/components/sections/mission";
import { Solution } from "@/components/sections/solution";
import { Security } from "@/components/sections/security";
import { FAQ } from "@/components/sections/faq";
import { Closing } from "@/components/sections/closing";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Problem />
      <Solution />
      <Security />
      <FAQ />
      <Closing />
    </>
  );
}
