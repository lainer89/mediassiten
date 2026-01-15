'use client'

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Heart, Star, Users, Zap, Shield } from "lucide-react"
import { useState } from "react"

const stats = [
    { icon: Users, value: "10K+", label: "Beta Testers" },
    { icon: Star, value: "4.9", label: "Valoración" },
    { icon: Zap, value: "30s", label: "Análisis" },
    { icon: Shield, value: "100%", label: "Privado" },
]

export function Closing() {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Enhanced Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-teal-500/5"></div>

                {/* Large central glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/10 via-teal-500/5 to-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>

            <Container className="max-w-5xl">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-gradient-to-r from-primary/20 to-teal-500/20 text-primary rounded-full text-sm font-semibold border border-primary/30"
                        animate={{ boxShadow: ["0 0 20px rgba(20, 184, 166, 0.2)", "0 0 40px rgba(20, 184, 166, 0.3)", "0 0 20px rgba(20, 184, 166, 0.2)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Únete a la Revolución de la Salud Digital
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-center"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                        El futuro de tu salud{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent animated-gradient">
                                comienza hoy
                            </span>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal-400 to-emerald-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-10 space-y-6 text-center max-w-3xl mx-auto"
                >
                    <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                        Miles de personas en Latinoamérica ya están tomando el control de su salud con MedAssist.
                    </p>
                    <p className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed">
                        Porque entender tu cuerpo no debería ser un privilegio.{" "}
                        <span className="text-primary">Es un derecho.</span>
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="p-6 bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 text-center group hover:border-primary/30 transition-all"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <stat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-16"
                >
                    <div className="relative p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-teal-500/10 rounded-[2rem] border border-primary/20 overflow-hidden">
                        <div className="absolute top-0 right-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex justify-center mb-6"
                        >
                            <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
                        </motion.div>

                        <p className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
                            <span className="bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent animated-gradient">
                                MedAssist: Tu salud, clara y en tus manos.
                            </span>
                        </p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 flex flex-col items-center"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            size="lg"
                            className="shimmer-btn h-16 sm:h-18 px-12 sm:px-16 text-lg sm:text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-[0_25px_50px_-12px_rgba(20,184,166,0.4)] transition-all bg-gradient-to-r from-primary via-teal-500 to-emerald-500 border-0"
                        >
                            <span>Comenzar Gratis Ahora</span>
                            <motion.div
                                animate={{ x: isHovering ? 5 : 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ArrowRight className="ml-3 h-6 w-6" />
                            </motion.div>
                        </Button>
                    </motion.div>

                    <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Sin tarjeta de crédito
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>Configuración en 2 minutos</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Beta gratuita para LATAM</span>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
