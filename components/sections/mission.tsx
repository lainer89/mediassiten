'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { Heart, Quote } from "lucide-react"

export function Mission() {
    return (
        <section id="mision" className="py-28 relative overflow-hidden scroll-mt-20">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background"></div>

            <Container className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl shadow-lg shadow-rose-500/20">
                        <Heart className="h-8 w-8 text-white" />
                    </div>

                    {/* Main Quote */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Tu información médica
                        <br />
                        <span className="bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                            es más que datos.
                        </span>
                    </h2>

                    <p className="mt-6 text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                        Es tu tranquilidad. Tu historia. Tus decisiones.
                    </p>
                </motion.div>

                {/* Story Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-16 relative"
                >
                    <div className="absolute -left-4 top-0 text-primary/10">
                        <Quote className="w-16 h-16 rotate-180" />
                    </div>

                    <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed pl-8 border-l-2 border-primary/20">
                        <p>
                            MedAssist nació de una necesidad real: la dificultad de entender nuestra propia salud
                            cuando no siempre hay un médico disponible, tiempo suficiente o recursos para consultar.
                        </p>
                        <p>
                            Creamos esta herramienta para que puedas revisar tus exámenes con calma,
                            volver a ellos cuando lo necesites y entender cómo evoluciona tu salud,
                            <span className="font-semibold text-foreground"> sin depender de nadie más.</span>
                        </p>
                    </div>
                </motion.div>

                {/* Promise Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-16"
                >
                    <div className="relative p-10 sm:p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-primary/20">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

                        <p className="relative text-xl sm:text-2xl font-medium text-foreground text-center leading-relaxed">
                            Por eso cuidamos tus datos con el mismo compromiso
                            con el que construimos este proyecto:
                        </p>

                        <p className="relative text-xl sm:text-2xl text-center mt-4">
                            <span className="font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                                con respeto, responsabilidad y tecnología bien usada.
                            </span>
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
