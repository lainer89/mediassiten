'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { FileQuestion, FolderSearch, TrendingDown, AlertCircle } from "lucide-react"

const problems = [
    {
        icon: FileQuestion,
        title: "Resultados que no entiendes",
        description: "Abreviaturas, valores de referencia, términos médicos... Cada examen parece escrito en otro idioma.",
        example: "\"¿Qué significa que mi LDL está en 142? ¿Es grave?\"",
    },
    {
        icon: FolderSearch,
        title: "Información dispersa",
        description: "Papeles en casa, PDFs en el correo, portales de laboratorios con contraseñas olvidadas. Tu historial está en todos lados.",
        example: "\"No encuentro el examen del año pasado para comparar.\"",
    },
    {
        icon: TrendingDown,
        title: "Sin visión de evolución",
        description: "¿Mejoraste o empeoraste? Sin poder comparar exámenes anteriores, es imposible saber cómo avanza tu salud.",
        example: "\"¿Mi glucosa subió o bajó desde la última vez?\"",
    },
]

export function Problem() {
    return (
        <section id="problema" className="py-28 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden scroll-mt-20">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium">
                        <AlertCircle className="w-4 h-4" />
                        El problema
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Tu salud no debería ser
                        <br />
                        <span className="text-muted-foreground">un rompecabezas.</span>
                    </h2>

                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        Millones de personas en Latinoamérica enfrentan estos desafíos cada vez que reciben un examen médico.
                    </p>
                </motion.div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full flex flex-col p-8 bg-background rounded-3xl border border-border hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-6">
                                    <item.icon className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{item.description}</p>

                                {/* Example Quote */}
                                <div className="p-4 bg-muted/50 rounded-xl border-l-4 border-amber-500/50">
                                    <p className="text-sm italic text-muted-foreground">{item.example}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
