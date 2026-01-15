'use client'

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle } from "lucide-react"
import Link from "next/link"

const benefits = [
    "Explicaciones claras con IA",
    "Tu historial siempre organizado",
    "100% privado y seguro",
]

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden">
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 px-5 py-2.5 text-sm font-medium text-primary mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Beta gratuita — Disponible para Latinoamérica
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                    >
                        Entiende tus exámenes médicos{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                sin complicaciones
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        Sube tus resultados de laboratorio y recibe explicaciones claras,
                        en un lenguaje que puedas entender. Tu historial médico organizado,
                        seguro y siempre contigo.
                    </motion.p>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6"
                    >
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            size="lg"
                            className="h-14 px-10 text-base font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
                        >
                            Comenzar gratis
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-10 text-base font-semibold rounded-full group hover:bg-muted"
                        >
                            <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                            Ver cómo funciona
                        </Button>
                    </motion.div>

                    {/* Trust Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 text-sm text-muted-foreground/70"
                    >
                        Sin tarjeta de crédito · Configuración en 2 minutos · Cancela cuando quieras
                    </motion.p>
                </div>
            </Container>

            {/* Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></div>
                </motion.div>
            </motion.div>
        </section>
    )
}
