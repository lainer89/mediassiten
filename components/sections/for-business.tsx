'use client'

import { Container } from "@/components/layout/container"
import { Building2, Clock, Workflow, Users, TrendingUp, Zap, ArrowRight, Settings, CheckCircle } from "lucide-react"

const challenges = [
    {
        icon: Clock,
        title: "Alta carga operativa",
        description: "Tu equipo dedica tiempo valioso explicando resultados uno por uno a cada paciente."
    },
    {
        icon: Users,
        title: "Pacientes confundidos",
        description: "Reciben llamadas constantes preguntando qué significan los valores de sus exámenes."
    },
    {
        icon: TrendingUp,
        title: "Competencia creciente",
        description: "Otros laboratorios están innovando y ofreciendo servicios diferenciados."
    },
]

const solutions = [
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

const integrationSteps = [
    {
        number: "1",
        title: "Conectamos tu sistema",
        description: "Integramos MedAssist con tu software de laboratorio existente.",
        icon: Settings
    },
    {
        number: "2",
        title: "Procesamiento automático",
        description: "Cada resultado se analiza y genera una explicación en tiempo real.",
        icon: Zap
    },
    {
        number: "3",
        title: "Entrega al paciente",
        description: "El paciente recibe sus resultados con explicaciones incluidas.",
        icon: Users
    },
]

const features = [
    "API RESTful documentada",
    "Soporte técnico dedicado",
    "Dashboard de monitoreo",
    "Reportes de uso mensuales",
    "SLA garantizado",
    "Onboarding personalizado"
]

export function ForBusiness() {
    return (
        <section id="empresas" className="scroll-mt-20">
            {/* ═══════════════════════════════════════════════════════════════
                HEADER - EMPRESAS
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-10">
                <Container>
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <Building2 className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-1">
                                B2B • Clientes corporativos
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Para Clínicas y Laboratorios
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                SUBSECCIÓN: LOS DESAFÍOS
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-indigo-50 py-14">
                <Container>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-100 text-orange-600 text-sm font-semibold rounded-full mb-3 border border-orange-200 shadow-sm">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            Los Desafíos
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            ¿Tu negocio enfrenta estos problemas?
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {challenges.map((challenge, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                                    <challenge.icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                                <p className="text-gray-600">{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                SUBSECCIÓN: NUESTRA SOLUCIÓN
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-white py-14">
                <Container>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-100 text-indigo-600 text-sm font-semibold rounded-full mb-3 border border-indigo-200 shadow-sm">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Nuestra Solución
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Cómo MedAssist ayuda a tu negocio
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {solutions.map((solution, i) => (
                            <div
                                key={i}
                                className="bg-indigo-50 p-6 rounded-xl hover:bg-indigo-100 transition-colors"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                    <solution.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h4>
                                <p className="text-gray-600 text-sm">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                SUBSECCIÓN: PROCESO DE INTEGRACIÓN + CTA
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-indigo-900 py-14">
                <Container>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-800/50 text-indigo-100 text-sm font-semibold rounded-full mb-3 border border-indigo-500 shadow-lg backdrop-blur-sm">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                            Integración
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            ¿Cómo funciona para tu negocio?
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
                        {integrationSteps.map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="relative w-20 h-20 mx-auto mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <step.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-indigo-900 rounded-full flex items-center justify-center text-sm font-bold shadow">
                                        {step.number}
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                                <p className="text-indigo-200 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto mb-10">
                        <h4 className="text-center font-semibold text-white mb-4">Lo que incluye</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-indigo-100 text-sm">
                                    <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="mailto:empresas@medassist.lat?subject=MedAssist para mi laboratorio/clínica"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-900 text-lg font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
                        >
                            Contactar al equipo comercial
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <p className="text-indigo-300 mt-4 text-sm">
                            Respondemos en menos de 24 horas
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    )
}
