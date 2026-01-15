'use client'

import { Container } from "@/components/layout/container"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Quote, Stethoscope, Users, Shield } from "lucide-react"
import { useRef } from "react"

const values = [
    {
        icon: Stethoscope,
        title: "Precisión Médica",
        description: "Interpretaciones basadas en estándares clínicos internacionales"
    },
    {
        icon: Users,
        title: "Accesibilidad",
        description: "Democratizamos el acceso a información de salud comprensible"
    },
    {
        icon: Shield,
        title: "Confidencialidad",
        description: "Tu información médica protegida con los más altos estándares"
    }
]

export function Mission() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95])

    return (
        <section
            ref={containerRef}
            id="mision"
            className="py-32 relative overflow-hidden scroll-mt-20"
        >
            {/* Enhanced Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-pink-500/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary/10 to-teal-500/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <Container className="max-w-5xl">
                <motion.div style={{ opacity, scale }}>
                    {/* Header with animated heart */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        {/* Animated Heart Icon */}
                        <motion.div
                            className="inline-flex items-center justify-center w-20 h-20 mb-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl shadow-2xl shadow-rose-500/30"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Heart className="h-10 w-10 text-white" fill="currentColor" />
                        </motion.div>

                        {/* Main Quote - More Professional */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                            Nuestra Misión:
                            <br />
                            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-primary bg-clip-text text-transparent animated-gradient">
                                Humanizar la Salud Digital
                            </span>
                        </h2>

                        <p className="mt-8 text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Transformamos la complejidad médica en{" "}
                            <span className="text-foreground font-semibold">claridad y tranquilidad</span>.
                            Porque entender tu salud es el primer paso para cuidarla.
                        </p>
                    </motion.div>

                    {/* Values Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group"
                            >
                                <div className="h-full p-8 bg-gradient-to-br from-background to-muted/30 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                                    <motion.div
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <value.icon className="h-7 w-7 text-primary" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Story Block - More Professional */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mt-20 relative"
                    >
                        <div className="absolute -left-6 top-0 text-primary/10">
                            <Quote className="w-20 h-20 rotate-180" />
                        </div>

                        <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed pl-10 border-l-4 border-gradient-to-b from-primary to-teal-500">
                            <p>
                                <span className="text-foreground font-semibold">MedAssist nació de una necesidad real:</span>{" "}
                                la brecha entre la información médica disponible y la capacidad de las personas para comprenderla.
                            </p>
                            <p>
                                En Latinoamérica, millones de pacientes reciben resultados de exámenes sin contexto,
                                sin explicaciones claras y sin las herramientas para tomar decisiones informadas sobre su salud.
                            </p>
                            <p className="text-foreground font-medium text-xl sm:text-2xl">
                                Creemos que la tecnología debe servir para{" "}
                                <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                                    empoderar, no para complicar
                                </span>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Promise Block - Enhanced */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-20"
                    >
                        <div className="relative p-12 sm:p-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[2rem] border border-primary/20 overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

                            <p className="relative text-2xl sm:text-3xl font-medium text-foreground text-center leading-relaxed">
                                Nuestro compromiso es simple:
                            </p>

                            <p className="relative text-2xl sm:text-3xl text-center mt-6">
                                <span className="font-bold bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                    Claridad. Privacidad. Confianza.
                                </span>
                            </p>

                            <p className="relative mt-8 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                                Cada línea de código, cada decisión de diseño, cada política de datos
                                está pensada para protegerte y ayudarte a entender mejor tu salud.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}
