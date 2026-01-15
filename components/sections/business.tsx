'use client'

import { Container } from "@/components/layout/container"
import { Building2, Clock, Workflow, FileText, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

const benefits = [
    {
        icon: Clock,
        title: "Elimina la carga operativa",
        description: "Deja de explicar resultados uno por uno. MedAssist genera explicaciones automáticas para cada paciente."
    },
    {
        icon: Workflow,
        title: "Automatiza flujos de trabajo",
        description: "Intégralo con tu sistema actual. Los resultados se procesan automáticamente al momento de la entrega."
    },
    {
        icon: Users,
        title: "Mejora la experiencia del paciente",
        description: "Tus pacientes entienden sus resultados sin necesidad de llamar a preguntar. Menos consultas, más satisfacción."
    },
    {
        icon: TrendingUp,
        title: "Diferénciate de la competencia",
        description: "Ofrece un servicio que otros laboratorios no tienen. Resultados claros y comprensibles como valor agregado."
    },
]

const stats = [
    { value: "Rápido", label: "procesamiento automático" },
    { value: "Simple", label: "integración con tu sistema" },
    { value: "24/7", label: "disponibilidad del servicio" },
]

export function Business() {
    return (
        <section id="empresas" className="py-20 bg-gray-900 scroll-mt-20">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-6">
                        <Building2 className="w-4 h-4" />
                        Para Clínicas y Laboratorios
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Transforma la entrega de resultados
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Integra inteligencia artificial en tu laboratorio o clínica.
                        Automatiza explicaciones y reduce la carga de tu equipo.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="bg-gray-800 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                                <benefit.icon className="w-6 h-6 text-teal-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* How it works */}
                <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        ¿Cómo funciona para tu negocio?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h4 className="font-semibold text-white mb-2">Conectamos tu sistema</h4>
                            <p className="text-sm text-gray-400">
                                Integramos MedAssist con tu software de laboratorio existente mediante API.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h4 className="font-semibold text-white mb-2">Procesamiento automático</h4>
                            <p className="text-sm text-gray-400">
                                Cada resultado se analiza y se genera una explicación clara en tiempo real.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h4 className="font-semibold text-white mb-2">Entrega al paciente</h4>
                            <p className="text-sm text-gray-400">
                                El paciente recibe sus resultados con explicaciones comprensibles incluidas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-16">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-teal-400">{stat.value}</div>
                            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-gray-300 mb-6">
                        ¿Tienes un laboratorio o clínica? Hablemos sobre cómo MedAssist puede ayudarte.
                    </p>
                    <a
                        href="mailto:empresas@medassist.lat?subject=MedAssist para mi laboratorio/clínica"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Contactar al equipo comercial
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-sm text-gray-500 mt-4">
                        Respondemos en menos de 24 horas
                    </p>
                </div>
            </Container>
        </section>
    )
}
