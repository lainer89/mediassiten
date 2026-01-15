'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { FileQuestion, FolderSearch, TrendingDown, AlertCircle, Clock, HelpCircle } from "lucide-react"
import { useState } from "react"

const problems = [
    {
        icon: FileQuestion,
        title: "Terminología Incomprensible",
        description: "Los resultados de laboratorio están llenos de abreviaturas, valores de referencia y términos médicos que parecen escritos en código.",
        example: "\"Mi LDL está en 142 mg/dL. ¿Eso es malo? ¿Qué debería hacer?\"",
        stat: "78%",
        statLabel: "no entiende sus resultados"
    },
    {
        icon: FolderSearch,
        title: "Historial Fragmentado",
        description: "Tus exámenes están dispersos: papeles en casa, PDFs en el correo, portales de laboratorios con contraseñas olvidadas. Imposible tener una visión completa.",
        example: "\"Necesito comparar con el examen del año pasado, pero no lo encuentro.\"",
        stat: "85%",
        statLabel: "pierde seguimiento de exámenes"
    },
    {
        icon: TrendingDown,
        title: "Sin Seguimiento de Tendencias",
        description: "¿Mejoraste o empeoraste? Sin poder visualizar la evolución de tus valores en el tiempo, es imposible detectar patrones importantes.",
        example: "\"¿Mi glucosa ha subido o bajado en los últimos meses?\"",
        stat: "92%",
        statLabel: "no hace seguimiento"
    },
    {
        icon: Clock,
        title: "Consultas Limitadas",
        description: "El tiempo con tu médico es escaso. No siempre hay oportunidad de hacer todas las preguntas que tienes sobre tus resultados.",
        example: "\"El doctor solo tenía 10 minutos y no pude preguntar todo.\"",
        stat: "15 min",
        statLabel: "promedio de consulta"
    },
]

export function Problem() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <section id="problema" className="py-32 relative overflow-hidden scroll-mt-20">
            {/* Enhanced Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background"></div>
                <motion.div
                    className="absolute top-40 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
            </div>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold border border-amber-500/30"
                        whileHover={{ scale: 1.05 }}
                    >
                        <AlertCircle className="w-4 h-4" />
                        El Desafío Actual
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                        Tu salud no debería ser{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                un misterio
                            </span>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </span>
                    </h2>

                    <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        <span className="text-foreground font-semibold">Más de 400 millones de latinoamericanos</span>{" "}
                        enfrentan estos desafíos cada vez que reciben un examen médico.
                        La información existe, pero no es accesible.
                    </p>
                </motion.div>

                {/* Problems Grid - Enhanced with 3D tilt effect */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group"
                        >
                            <motion.div
                                className="h-full flex flex-col p-8 bg-gradient-to-br from-background to-muted/30 rounded-3xl border border-border hover:border-amber-500/40 transition-all duration-300"
                                whileHover={{
                                    scale: 1.02,
                                    rotateX: 2,
                                    rotateY: -2,
                                    boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.15)"
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <motion.div
                                        className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/20"
                                        animate={hoveredCard === index ? { rotate: [0, -10, 10, 0] } : {}}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <item.icon className="h-8 w-8 text-amber-500" />
                                    </motion.div>

                                    {/* Stat Badge */}
                                    <div className="ml-auto text-right">
                                        <div className="text-3xl font-bold text-amber-500">{item.stat}</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wide">{item.statLabel}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mt-6 text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mt-3 flex-grow">
                                    {item.description}
                                </p>

                                {/* Example Quote */}
                                <motion.div
                                    className="mt-6 p-4 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-xl border-l-4 border-amber-500"
                                    initial={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <div className="flex items-start gap-2">
                                        <HelpCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm italic text-muted-foreground">{item.example}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl sm:text-2xl text-muted-foreground">
                        <span className="text-foreground font-semibold">¿Te suena familiar?</span>{" "}
                        No estás solo. Y hay una solución.
                    </p>
                </motion.div>
            </Container>
        </section>
    )
}
