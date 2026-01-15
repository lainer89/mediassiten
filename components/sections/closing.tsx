'use client'

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Closing() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="py-20 bg-gray-50">
            <Container className="max-w-3xl text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Toma el control de tu salud
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Únete a los primeros usuarios en Latinoamérica.
                    Entiende tus exámenes médicos de forma simple y segura.
                </p>

                <div className="mt-10">
                    <Button
                        size="lg"
                        onClick={scrollToWaitlist}
                        className="btn-primary h-12 px-8 text-base font-semibold rounded-lg"
                    >
                        Unirme a la Beta Gratis
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="mt-4 text-sm text-gray-500">
                        Sin tarjeta de crédito • Configuración en 2 minutos
                    </p>
                </div>
            </Container>
        </section>
    )
}
