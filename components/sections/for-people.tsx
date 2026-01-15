'use client'

import { Container } from "@/components/layout/container"
import { User, UploadCloud, Brain, BarChart3, FileQuestion, FolderSearch, Clock, ArrowRight, Sparkles, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
    {
        icon: FileQuestion,
        title: "Resultados incomprensibles",
        description: "Recibes tus exámenes llenos de términos médicos y números que no sabes interpretar."
    },
    {
        icon: FolderSearch,
        title: "Historial disperso",
        description: "Tus exámenes están en papeles, PDFs, emails y diferentes portales de laboratorios."
    },
    {
        icon: Clock,
        title: "Consultas muy cortas",
        description: "El tiempo con tu médico es limitado y no alcanza para resolver todas tus dudas."
    },
]

const steps = [
    {
        number: "1",
        icon: UploadCloud,
        title: "Sube tu examen",
        description: "Toma una foto o sube el PDF desde tu celular. Acepta cualquier laboratorio."
    },
    {
        number: "2",
        icon: Brain,
        title: "Obtén explicaciones claras",
        description: "La IA analiza cada valor y te explica en palabras simples qué significa."
    },
    {
        number: "3",
        icon: BarChart3,
        title: "Monitorea tu evolución",
        description: "Guarda tu historial completo y observa cómo cambian tus valores en el tiempo."
    },
]

const benefits = [
    {
        icon: Sparkles,
        title: "Sin tecnicismos",
        description: "Explicaciones diseñadas para que cualquier persona entienda"
    },
    {
        icon: Shield,
        title: "Privado y seguro",
        description: "Tus datos de salud protegidos con encriptación"
    },
    {
        icon: Heart,
        title: "Tu salud, tu control",
        description: "Accede a tu historial cuando y donde quieras"
    },
]

export function ForPeople() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="personas" className="scroll-mt-20">
            {/* ═══════════════════════════════════════════════════════════════
                HEADER - PERSONAS
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 py-10">
                <Container>
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <User className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-1">
                                B2C • Usuarios personales
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Para Personas
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                SUBSECCIÓN: EL PROBLEMA
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-teal-50 py-14">
                <Container>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 text-sm font-semibold rounded-full mb-3 border border-red-200 shadow-sm">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            El Problema
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            ¿Te identificas con esto?
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {problems.map((problem, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                                    <problem.icon className="w-6 h-6 text-red-500" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h4>
                                <p className="text-gray-600">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                SUBSECCIÓN: CÓMO FUNCIONA
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-white py-14">
                <Container>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-100 text-teal-600 text-sm font-semibold rounded-full mb-3 border border-teal-200 shadow-sm">
                            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                            Cómo Funciona
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            3 pasos simples
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {steps.map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="relative w-20 h-20 mx-auto mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <step.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                                        {step.number}
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                SUBSECCIÓN: BENEFICIOS + CTA
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-teal-900 py-14">
                <Container>
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-800/50 text-teal-100 text-sm font-semibold rounded-full mb-3 border border-teal-600 shadow-lg backdrop-blur-sm">
                            <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                            Beneficios
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            ¿Por qué elegir MedAssist?
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                            >
                                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                                <p className="text-teal-200 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button
                            size="lg"
                            onClick={scrollToWaitlist}
                            className="h-14 px-10 text-lg font-semibold rounded-xl bg-white text-teal-900 hover:bg-teal-50"
                        >
                            Probar Gratis
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="mt-4 text-teal-300 text-sm">Sin tarjeta de crédito • Gratis durante la beta</p>
                    </div>
                </Container>
            </div>
        </section>
    )
}
