'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { FileQuestion, FolderSearch, TrendingDown, AlertCircle, Clock, HelpCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const problems = [
    {
        icon: FileQuestion,
        title: "Terminología Incomprensible",
        description: "Los resultados de laboratorio están llenos de abreviaturas y términos médicos que parecen escritos en código.",
        example: "\"Mi LDL está en 142 mg/dL. ¿Eso es malo?\"",
        stat: "78%",
        statLabel: "no entiende sus resultados"
    },
    {
        icon: FolderSearch,
        title: "Historial Fragmentado",
        description: "Tus exámenes están dispersos en papeles, PDFs y portales. Imposible tener una visión completa.",
        example: "\"Necesito el examen del año pasado pero no lo encuentro.\"",
        stat: "85%",
        statLabel: "pierde seguimiento"
    },
    {
        icon: TrendingDown,
        title: "Sin Seguimiento",
        description: "¿Mejoraste o empeoraste? Sin visualizar la evolución, es imposible detectar patrones.",
        example: "\"¿Mi glucosa ha subido o bajado en los últimos meses?\"",
        stat: "92%",
        statLabel: "no hace seguimiento"
    },
    {
        icon: Clock,
        title: "Consultas Limitadas",
        description: "El tiempo con tu médico es escaso. No siempre hay oportunidad de preguntar todo.",
        example: "\"El doctor solo tenía 10 minutos.\"",
        stat: "15 min",
        statLabel: "promedio de consulta"
    },
]

export function Problem() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <section id="problema" className="py-28 relative overflow-hidden scroll-mt-20">
            {/* Vibrant Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white"></div>
                <motion.div
                    className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-br from-orange-200/40 to-pink-200/30 rounded-full blur-3xl"
                    animate={{ x: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/20 rounded-full blur-3xl"
                    animate={{ x: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
            </div>

            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div>
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 rounded-full text-sm font-semibold border border-orange-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                <AlertCircle className="w-4 h-4" />
                                El Desafío Actual
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                Tu salud no debería ser{" "}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                        un misterio
                                    </span>
                                </span>
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                <span className="text-gray-900 font-semibold">Más de 400 millones de latinoamericanos</span>{" "}
                                enfrentan estos desafíos cada vez que reciben un examen médico.
                            </p>
                        </motion.div>

                        {/* Problems Grid */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {problems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <motion.div
                                        className="h-full p-5 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-100/50"
                                        whileHover={{ scale: 1.02, y: -3 }}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <motion.div
                                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center"
                                                animate={hoveredCard === index ? { rotate: [0, -5, 5, 0] } : {}}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <item.icon className="h-5 w-5 text-orange-500" />
                                            </motion.div>
                                            <div className="text-right ml-auto">
                                                <div className="text-xl font-bold text-orange-500">{item.stat}</div>
                                            </div>
                                        </div>
                                        <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 text-lg text-gray-600"
                        >
                            <span className="text-gray-900 font-semibold">¿Te suena familiar?</span>{" "}
                            No estás solo.
                        </motion.p>
                    </div>

                    {/* Right - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-pink-100/30 to-purple-100/50 rounded-full blur-3xl scale-110"></div>
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/problem-illustration.png"
                                    alt="Persona confundida con documentos médicos"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto drop-shadow-xl relative"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
