'use client'

import { Container } from "@/components/layout/container"
import { FileQuestion, FolderSearch, TrendingDown, Clock } from "lucide-react"
import Image from "next/image"

const problems = [
    {
        icon: FileQuestion,
        title: "Terminología Incomprensible",
        description: "Los resultados están llenos de términos médicos difíciles de entender."
    },
    {
        icon: FolderSearch,
        title: "Historial Fragmentado",
        description: "Tus exámenes están dispersos en papeles, PDFs y diferentes portales."
    },
    {
        icon: TrendingDown,
        title: "Sin Seguimiento",
        description: "Es difícil saber si tus valores mejoraron o empeoraron con el tiempo."
    },
    {
        icon: Clock,
        title: "Consultas Limitadas",
        description: "El tiempo con tu médico es escaso para resolver todas tus dudas."
    },
]

export function Problem() {
    return (
        <section id="problema" className="py-20 bg-orange-50 scroll-mt-20">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Tu salud no debería ser un misterio
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Millones de personas enfrentan estos desafíos
                            cada vez que reciben un examen médico.
                        </p>

                        <div className="mt-10 grid sm:grid-cols-2 gap-6">
                            {problems.map((item, i) => (
                                <div key={i} className="bg-white p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                                        <item.icon className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 bg-orange-200/50 rounded-full blur-3xl"></div>
                            <Image
                                src="/problem-illustration.png"
                                alt="Persona confundida con documentos médicos"
                                width={500}
                                height={500}
                                className="relative w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
