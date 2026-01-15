import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { AudienceSelector } from "@/components/sections/audience-selector";
import { Security } from "@/components/sections/security";
import { Waitlist } from "@/components/sections/waitlist";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      {/* Hero Principal */}
      <Hero />

      {/* ¿Qué es MedAssist? */}
      <Mission />

      {/* ═══════════════════════════════════════════════════════════════
          SELECTOR DE AUDIENCIA - SECCIÓN PRINCIPAL
          El usuario elige su perfil y ve información específica
      ═══════════════════════════════════════════════════════════════ */}
      <AudienceSelector />

      {/* Seguridad (aplica a ambos) */}
      <Security />

      {/* Registro Beta */}
      <Waitlist />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
