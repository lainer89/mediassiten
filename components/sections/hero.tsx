'use client'

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

const benefits = [
    "Explicaciones claras con IA",
    "Historial siempre organizado",
    "100% privado y seguro",
]

export function Hero() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="pt-24 pb-16 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                            Beta Gratuita — Disponible para Latinoamérica
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Entiende tus exámenes médicos{" "}
                            <span className="text-teal-600">sin complicaciones</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Sube tus resultados de laboratorio y recibe explicaciones claras
                            con inteligencia artificial. Tu historial médico organizado y seguro.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-teal-500" />
                                    <span className="text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                onClick={scrollToWaitlist}
                                className="btn-primary h-12 px-8 text-base font-semibold rounded-lg"
                            >
                                Unirme a la Beta Gratis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                            Sin tarjeta de crédito • Configuración en 2 minutos
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <Image
                            src="/hero-illustration.png"
                            alt="MedAssist - Análisis de exámenes médicos"
                            width={600}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
