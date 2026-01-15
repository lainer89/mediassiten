'use client'

import { Container } from "@/components/layout/container"
import { UploadCloud, Brain, BarChart3, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const steps = [
    {
        number: "1",
        icon: UploadCloud,
        title: "Sube tu examen",
        description: "Toma una foto con tu celular o sube el PDF que te entregó el laboratorio. Aceptamos cualquier formato.",
        details: [
            "PDF, JPG, PNG o foto directa",
            "Funciona con cualquier laboratorio",
            "Proceso en menos de 30 segundos"
        ]
    },
    {
        number: "2",
        icon: Brain,
        title: "Recibe explicaciones claras",
        description: "Nuestra inteligencia artificial analiza cada valor y te explica qué significa en palabras simples, sin tecnicismos.",
        details: [
            "Explicaciones en lenguaje cotidiano",
            "Te indica si los valores están bien o no",
            "Contexto personalizado para ti"
        ]
    },
    {
        number: "3",
        icon: BarChart3,
        title: "Lleva tu historial organizado",
        description: "Guarda todos tus exámenes en un solo lugar. Visualiza cómo cambian tus valores con el tiempo y detecta tendencias.",
        details: [
            "Todos tus exámenes en un lugar",
            "Gráficos fáciles de entender",
            "Comparte con tu médico cuando quieras"
        ]
    },
]

export function Solution() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="como-funciona" className="py-20 bg-white scroll-mt-20">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6">
                        Para Personas
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Entiende tus exámenes en 3 pasos
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Sin conocimientos médicos, sin buscar en Google, sin confusión.
                        Solo sube tu examen y recibe la información que necesitas.
                    </p>
                </div>

                <div className="space-y-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                        {step.number}
                                    </div>
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                                        <step.icon className="w-6 h-6 text-teal-600" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-lg text-gray-600 mb-6">
                                    {step.description}
                                </p>

                                <div className="space-y-3">
                                    {step.details.map((detail, j) => (
                                        <div key={j} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                            <span className="text-gray-700">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="flex-1 w-full">
                                <div className={`bg-gray-50 rounded-2xl p-8 ${i === 0 ? 'border-2 border-dashed border-gray-300' : ''}`}>
                                    {i === 0 && (
                                        <div className="text-center">
                                            <UploadCloud className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500 font-medium">Arrastra tu archivo aquí</p>
                                            <p className="text-sm text-gray-400 mt-2">o haz clic para seleccionar</p>
                                            <div className="mt-6 flex justify-center gap-4 text-xs text-gray-400">
                                                <span>PDF</span>
                                                <span>•</span>
                                                <span>JPG</span>
                                                <span>•</span>
                                                <span>PNG</span>
                                            </div>
                                        </div>
                                    )}
                                    {i === 1 && (
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium text-gray-900">Glucosa</span>
                                                    <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded">Normal</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Tu nivel de azúcar en sangre está dentro del rango saludable.</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium text-gray-900">Colesterol Total</span>
                                                    <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Atención</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Está un poco elevado. Considera consultar con tu médico.</p>
                                            </div>
                                        </div>
                                    )}
                                    {i === 2 && (
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="font-medium text-gray-900">Glucosa - Últimos 6 meses</span>
                                            </div>
                                            <div className="h-32 flex items-end justify-between gap-2">
                                                {[85, 92, 88, 95, 90, 87].map((value, j) => (
                                                    <div key={j} className="flex-1 flex flex-col items-center">
                                                        <div
                                                            className="w-full bg-teal-500 rounded-t"
                                                            style={{ height: `${value - 50}%` }}
                                                        ></div>
                                                        <span className="text-xs text-gray-400 mt-2">{['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][j]}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-4 text-center">Tus niveles se mantienen estables ✓</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        size="lg"
                        onClick={scrollToWaitlist}
                        className="btn-primary h-12 px-8 text-base font-semibold rounded-lg"
                    >
                        Probar Gratis
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="mt-3 text-sm text-gray-500">Sin tarjeta de crédito • Gratis durante la beta</p>
                </div>
            </Container>
        </section>
    )
}
