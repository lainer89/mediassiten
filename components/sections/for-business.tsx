'use client'

import { Container } from "@/components/layout/container"
import { Building2, Clock, Workflow, Users, TrendingUp, Zap, ArrowRight, CheckCircle } from "lucide-react"

const problems = [
    {
        icon: Clock,
        title: "Carga operativa alta",
        description: "Tu equipo dedica tiempo a explicar resultados uno por uno."
    },
    {
        icon: Users,
        title: "Pacientes confundidos",
        description: "Llaman para preguntar qué significan sus resultados."
    },
    {
        icon: TrendingUp,
        title: "Competencia crece",
        description: "Otros laboratorios ya ofrecen servicios diferenciados."
    },
]

const benefits = [
    {
        icon: Zap,
        title: "Automatización total",
        description: "Cada resultado se procesa automáticamente. Sin intervención manual."
    },
    {
        icon: Users,
        title: "Pacientes satisfechos",
        description: "Reciben explicaciones claras. Menos llamadas, más confianza."
    },
    {
        icon: Workflow,
        title: "Integración simple",
        description: "Conectamos con tu sistema actual mediante API."
    },
    {
        icon: TrendingUp,
        title: "Valor diferencial",
        description: "Ofrece algo que tu competencia no tiene."
    },
]

const steps = [
    {
        number: "1",
        title: "Conectamos tu sistema",
        description: "Integramos MedAssist con tu software de laboratorio existente."
    },
    {
        number: "2",
        title: "Procesamiento automático",
        description: "Cada resultado se analiza y genera una explicación en tiempo real."
    },
    {
        number: "3",
        title: "Entrega al paciente",
        description: "El paciente recibe sus resultados con explicaciones incluidas."
    },
]

export function ForBusiness() {
    return (
        <section id="empresas" className="scroll-mt-20">
            {/* Header de sección */}
            <div className="bg-indigo-600 py-8">
                <Container>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                            <Building2 className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                Para Clínicas y Laboratorios
                            </h2>
                            <p className="text-indigo-100 text-lg">
                                Automatiza la entrega de resultados
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* El problema */}
            <div className="bg-indigo-50 py-16">
                <Container>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
                        Los desafíos de tu negocio
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {problems.map((problem, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-indigo-100">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                    <problem.icon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h4>
                                <p className="text-gray-600">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Beneficios */}
            <div className="bg-white py-16">
                <Container>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
                        Cómo MedAssist ayuda a tu negocio
                    </h3>
                    <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                        Integra inteligencia artificial en tu operación diaria
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="bg-indigo-50 p-6 rounded-xl">
                                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Cómo funciona */}
            <div className="bg-indigo-900 py-16">
                <Container>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
                        ¿Cómo funciona para tu negocio?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {steps.map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="w-14 h-14 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {step.number}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                                <p className="text-indigo-200">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="mailto:empresas@medassist.lat?subject=MedAssist para mi laboratorio/clínica"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-900 text-lg font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
                        >
                            Contactar al equipo comercial
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <p className="text-indigo-300 mt-4">
                            Respondemos en menos de 24 horas
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    )
}
