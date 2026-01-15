import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { ForPeople } from "@/components/sections/for-people";
import { ForBusiness } from "@/components/sections/for-business";
import { Security } from "@/components/sections/security";
import { Waitlist } from "@/components/sections/waitlist";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      {/* Hero Principal */}
      <Hero />

      {/* Nuestro Propósito */}
      <Mission />

      {/* ========== SECCIÓN PERSONAS ========== */}
      <ForPeople />

      {/* ========== SECCIÓN EMPRESAS ========== */}
      <ForBusiness />

      {/* Seguridad (aplica a ambos) */}
      <Security />

      {/* Registro Beta */}
      <Waitlist />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
