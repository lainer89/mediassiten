'use client'

import { Container } from "@/components/layout/container"
import { User, UploadCloud, Brain, BarChart3, CheckCircle, FileQuestion, FolderSearch, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
    {
        icon: FileQuestion,
        title: "No entiendes los resultados",
        description: "Términos médicos incomprensibles que nadie te explica."
    },
    {
        icon: FolderSearch,
        title: "Historial desordenado",
        description: "Exámenes en papeles, PDFs y diferentes portales."
    },
    {
        icon: Clock,
        title: "Poco tiempo con el médico",
        description: "No alcanza para resolver todas tus dudas."
    },
]

const steps = [
    {
        number: "1",
        icon: UploadCloud,
        title: "Sube tu examen",
        description: "Foto o PDF desde tu celular. Cualquier laboratorio.",
        details: ["PDF, JPG o foto directa", "Proceso en segundos", "Cualquier laboratorio"]
    },
    {
        number: "2",
        icon: Brain,
        title: "Recibe explicaciones claras",
        description: "La IA te explica cada valor en palabras simples.",
        details: ["Sin tecnicismos", "Te dice si está bien o no", "Contexto personalizado"]
    },
    {
        number: "3",
        icon: BarChart3,
        title: "Lleva tu historial",
        description: "Todos tus exámenes organizados. Ve cómo cambian tus valores.",
        details: ["Todo en un lugar", "Gráficos de evolución", "Comparte con tu médico"]
    },
]

export function ForPeople() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="personas" className="scroll-mt-20">
            {/* Header de sección */}
            <div className="bg-teal-600 py-8">
                <Container>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                            <User className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                Para Personas
                            </h2>
                            <p className="text-teal-100 text-lg">
                                Entiende tu salud sin complicaciones
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* El problema */}
            <div className="bg-teal-50 py-16">
                <Container>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
                        ¿Te ha pasado esto?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {problems.map((problem, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-teal-100">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                    <problem.icon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h4>
                                <p className="text-gray-600">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Cómo funciona */}
            <div className="bg-white py-16">
                <Container>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
                        Cómo funciona MedAssist
                    </h3>
                    <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                        3 pasos simples para entender tus exámenes
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative">
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-teal-200 -translate-x-1/2 z-0"></div>
                                )}
                                <div className="relative bg-teal-50 p-8 rounded-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                            {step.number}
                                        </div>
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-teal-200">
                                            <step.icon className="w-6 h-6 text-teal-600" />
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                                    <p className="text-gray-600 mb-6">{step.description}</p>

                                    <div className="space-y-2">
                                        {step.details.map((detail, j) => (
                                            <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-teal-500" />
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            size="lg"
                            onClick={scrollToWaitlist}
                            className="h-14 px-10 text-lg font-semibold rounded-xl bg-teal-600 hover:bg-teal-700"
                        >
                            Probar Gratis
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="mt-3 text-gray-500">Sin tarjeta de crédito • Gratis durante la beta</p>
                    </div>
                </Container>
            </div>
        </section>
    )
}
