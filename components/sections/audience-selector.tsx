'use client'

import { useState } from 'react'
import { Container } from "@/components/layout/container"
import { User, Building2, UploadCloud, Brain, BarChart3, Zap, Workflow, Users, TrendingUp, CheckCircle, ArrowRight, Shield, Heart, Sparkles, Clock, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

type Audience = 'none' | 'personas' | 'empresas'

// Datos para Personas (B2C)
const personasData = {
    tagline: "Entiende tu salud sin complicaciones",
    description: "MedAssist te ayuda a comprender tus exámenes médicos, guardar tu historial y tomar control de tu salud.",
    steps: [
        {
            icon: UploadCloud,
            title: "Sube tu examen",
            description: "Foto o PDF desde tu celular"
        },
        {
            icon: Brain,
            title: "Recibe explicaciones",
            description: "Sin tecnicismos, en español simple"
        },
        {
            icon: BarChart3,
            title: "Monitorea tu salud",
            description: "Historial y evolución de tus valores"
        },
    ],
    benefits: [
        "Explicaciones claras y fáciles de entender",
        "Historial médico unificado en un solo lugar",
        "Gráficos de evolución de tus valores",
        "Comparte fácilmente con tu médico",
        "Disponible 24/7 desde cualquier dispositivo",
        "Tus datos protegidos y encriptados"
    ],
    cta: "Probar Gratis",
    ctaNote: "Sin tarjeta de crédito • Gratis durante la beta"
}

// Datos para Empresas (B2B)
const empresasData = {
    tagline: "Automatiza la entrega de resultados",
    description: "Integra MedAssist a tu laboratorio o clínica para ofrecer explicaciones automáticas a tus pacientes.",
    steps: [
        {
            icon: Settings,
            title: "Conectamos tu sistema",
            description: "Integración vía API con tu software"
        },
        {
            icon: Zap,
            title: "Procesamiento automático",
            description: "Cada resultado genera explicaciones"
        },
        {
            icon: Users,
            title: "Entrega al paciente",
            description: "Resultados + explicaciones incluidas"
        },
    ],
    benefits: [
        "Reduce llamadas de pacientes confundidos",
        "Automatiza explicaciones sin intervención manual",
        "API RESTful documentada y fácil de integrar",
        "Dashboard de monitoreo y reportes de uso",
        "Soporte técnico dedicado",
        "Diferénciate de tu competencia"
    ],
    cta: "Contactar Comercial",
    ctaNote: "Respondemos en menos de 24 horas"
}

export function AudienceSelector() {
    const [selected, setSelected] = useState<Audience>('none')

    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }

    const currentData = selected === 'personas' ? personasData : empresasData

    return (
        <section id="soluciones" className="py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-semibold mb-4 border border-gray-200 shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        Elige tu perfil
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        ¿Cómo te podemos ayudar?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        MedAssist tiene soluciones diseñadas para cada tipo de usuario
                    </p>
                </div>

                {/* Selector Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                    {/* Card B2C - Personas */}
                    <button
                        onClick={() => setSelected(selected === 'personas' ? 'none' : 'personas')}
                        className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left ${selected === 'personas'
                                ? 'bg-gradient-to-br from-teal-500 to-emerald-600 border-teal-400 shadow-2xl shadow-teal-500/30 scale-[1.02]'
                                : 'bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200 hover:border-teal-400 hover:shadow-xl'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all ${selected === 'personas'
                                    ? 'bg-white/20'
                                    : 'bg-gradient-to-br from-teal-500 to-emerald-500'
                                }`}>
                                <User className={`w-8 h-8 ${selected === 'personas' ? 'text-white' : 'text-white'}`} />
                            </div>
                            <div className="flex-1">
                                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 ${selected === 'personas'
                                        ? 'bg-white/20 text-white'
                                        : 'bg-teal-100 text-teal-700'
                                    }`}>
                                    B2C • Usuarios personales
                                </span>
                                <h3 className={`text-2xl font-bold mb-2 ${selected === 'personas' ? 'text-white' : 'text-gray-900'}`}>
                                    Soy Paciente / Persona
                                </h3>
                                <p className={`${selected === 'personas' ? 'text-teal-100' : 'text-gray-600'}`}>
                                    Quiero entender mis exámenes médicos y llevar un historial de mi salud personal
                                </p>
                            </div>
                        </div>

                        {/* Indicador de selección */}
                        <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected === 'personas'
                                ? 'bg-white border-white'
                                : 'border-teal-300 bg-white'
                            }`}>
                            {selected === 'personas' && <CheckCircle className="w-5 h-5 text-teal-600" />}
                        </div>
                    </button>

                    {/* Card B2B - Empresas */}
                    <button
                        onClick={() => setSelected(selected === 'empresas' ? 'none' : 'empresas')}
                        className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left ${selected === 'empresas'
                                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-400 shadow-2xl shadow-indigo-500/30 scale-[1.02]'
                                : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 hover:border-indigo-400 hover:shadow-xl'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all ${selected === 'empresas'
                                    ? 'bg-white/20'
                                    : 'bg-gradient-to-br from-indigo-500 to-purple-500'
                                }`}>
                                <Building2 className={`w-8 h-8 ${selected === 'empresas' ? 'text-white' : 'text-white'}`} />
                            </div>
                            <div className="flex-1">
                                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 ${selected === 'empresas'
                                        ? 'bg-white/20 text-white'
                                        : 'bg-indigo-100 text-indigo-700'
                                    }`}>
                                    B2B • Clientes corporativos
                                </span>
                                <h3 className={`text-2xl font-bold mb-2 ${selected === 'empresas' ? 'text-white' : 'text-gray-900'}`}>
                                    Soy Clínica / Laboratorio
                                </h3>
                                <p className={`${selected === 'empresas' ? 'text-indigo-100' : 'text-gray-600'}`}>
                                    Quiero automatizar la entrega de resultados para mis pacientes
                                </p>
                            </div>
                        </div>

                        {/* Indicador de selección */}
                        <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected === 'empresas'
                                ? 'bg-white border-white'
                                : 'border-indigo-300 bg-white'
                            }`}>
                            {selected === 'empresas' && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                        </div>
                    </button>
                </div>

                {/* Contenido expandido cuando hay selección */}
                {selected !== 'none' && (
                    <div className={`max-w-5xl mx-auto rounded-3xl p-8 md:p-12 transition-all duration-500 ${selected === 'personas'
                            ? 'bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900'
                            : 'bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900'
                        }`}>
                        {/* Tagline */}
                        <div className="text-center mb-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                {currentData.tagline}
                            </h3>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto">
                                {currentData.description}
                            </p>
                        </div>

                        {/* Cómo funciona */}
                        <div className="mb-10">
                            <h4 className="text-center text-white/60 text-sm font-semibold uppercase tracking-wider mb-6">
                                Cómo funciona
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6">
                                {currentData.steps.map((step, i) => (
                                    <div key={i} className="text-center">
                                        <div className="relative w-16 h-16 mx-auto mb-4">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${selected === 'personas'
                                                    ? 'bg-teal-500'
                                                    : 'bg-indigo-500'
                                                }`}>
                                                <step.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-900 shadow">
                                                {i + 1}
                                            </div>
                                        </div>
                                        <h5 className="text-lg font-semibold text-white mb-1">{step.title}</h5>
                                        <p className="text-white/70 text-sm">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Beneficios */}
                        <div className="mb-10">
                            <h4 className="text-center text-white/60 text-sm font-semibold uppercase tracking-wider mb-6">
                                Lo que obtienes
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                                {currentData.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${selected === 'personas' ? 'text-teal-400' : 'text-indigo-400'
                                            }`} />
                                        <span className="text-white text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            {selected === 'personas' ? (
                                <>
                                    <Button
                                        size="lg"
                                        onClick={scrollToWaitlist}
                                        className="h-14 px-10 text-lg font-semibold rounded-xl bg-white text-teal-900 hover:bg-teal-50 shadow-lg"
                                    >
                                        {currentData.cta}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </>
                            ) : (
                                <a
                                    href="mailto:empresas@medassist.lat?subject=MedAssist para mi laboratorio/clínica"
                                    className="inline-flex items-center gap-2 h-14 px-10 text-lg font-semibold rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 shadow-lg transition-colors"
                                >
                                    {currentData.cta}
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                            )}
                            <p className="mt-4 text-white/60 text-sm">{currentData.ctaNote}</p>
                        </div>
                    </div>
                )}

                {/* Mensaje cuando no hay selección */}
                {selected === 'none' && (
                    <div className="text-center text-gray-500">
                        <p>👆 Selecciona una opción para ver más detalles</p>
                    </div>
                )}
            </Container>
        </section>
    )
}
