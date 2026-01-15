'use client'

import { Container } from "@/components/layout/container"
import { Brain, MessageSquareText, FolderOpen, Sparkles } from "lucide-react"

const pillars = [
    {
        icon: Brain,
        title: "Análisis Inteligente",
        description: "Procesamos cualquier examen de laboratorio con IA avanzada, extrayendo los valores clave automáticamente."
    },
    {
        icon: MessageSquareText,
        title: "Explicaciones Claras",
        description: "Traducimos los resultados médicos a español simple. Sin tecnicismos, sin confusiones."
    },
    {
        icon: FolderOpen,
        title: "Historial Unificado",
        description: "Todos tus exámenes organizados en un solo lugar. Accede cuando quieras, desde cualquier dispositivo."
    },
]

export function Mission() {
    return (
        <section id="que-es" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-100 text-teal-600 rounded-full text-sm font-semibold mb-6 border border-teal-200 shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        Tecnología que entiende tu salud
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        ¿Qué es MedAssist?
                    </h2>

                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                        Una plataforma de inteligencia artificial que <strong className="text-gray-900">transforma tus exámenes médicos</strong> en explicaciones claras y comprensibles. Para personas que quieren entender su salud, y para clínicas que buscan automatizar su operación.
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, i) => (
                        <div
                            key={i}
                            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <pillar.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-lg">
                        Disponible para <span className="font-semibold text-teal-600">personas</span> y <span className="font-semibold text-indigo-600">empresas</span>
                    </p>
                </div>
            </Container>
        </section>
    )
}
