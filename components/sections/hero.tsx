'use client'

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Heart, Activity } from "lucide-react"
import { useRef, useState } from "react"
import Image from "next/image"

const benefits = [
    "Explicaciones claras con IA",
    "Tu historial siempre organizado",
    "100% privado y seguro",
]

// Floating orb component
function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 8,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    )
}

export function Hero() {
    const [showModal, setShowModal] = useState(false)

    const scrollToWaitlist = () => {
        const element = document.getElementById('waitlist')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden">
            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge with glow effect */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-100 via-emerald-50 to-cyan-100 border border-teal-200 px-5 py-2.5 text-sm font-medium text-teal-700 mb-8 shadow-lg shadow-teal-100"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
                                ✨ Beta Gratuita
                            </span>
                            <span className="text-teal-500">—</span>
                            <span>Disponible para Latinoamérica</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]"
                        >
                            Entiende tus exámenes médicos{" "}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                                    sin complicaciones
                                </span>
                                <motion.div
                                    className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                />
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed"
                        >
                            Sube tus resultados de laboratorio y recibe{" "}
                            <span className="text-gray-900 font-semibold">explicaciones claras</span>
                            {" "}con inteligencia artificial. Tu historial médico{" "}
                            <span className="text-gray-900 font-semibold">organizado y seguro</span>.
                        </motion.p>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: 'rgb(20 184 166 / 0.3)' }}
                                >
                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    <span>{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    size="lg"
                                    onClick={scrollToWaitlist}
                                    className="shimmer-btn h-14 px-10 text-base font-semibold rounded-full shadow-xl shadow-teal-200 hover:shadow-2xl hover:shadow-teal-300 transition-all bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 border-0"
                                >
                                    🚀 Unirse a la Beta Gratis
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-14 px-10 text-base font-semibold rounded-full group hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-300"
                                >
                                    <Play className="mr-2 h-5 w-5 fill-teal-500 text-teal-500" />
                                    Ver Demo
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
                        >
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Sin tarjeta de crédito
                            </span>
                            <span>•</span>
                            <span>Configuración en 2 min</span>
                        </motion.div>
                    </div>

                    {/* Right - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/50 via-emerald-200/30 to-cyan-200/50 rounded-full blur-3xl scale-110"></div>

                            {/* Main illustration */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <Image
                                    src="/hero-illustration.png"
                                    alt="MedAssist - Doctora analizando exámenes médicos con IA"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>

                            {/* Floating elements around the illustration */}
                            <motion.div
                                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-teal-100"
                                animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                                        <Heart className="w-5 h-5 text-white" fill="white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Glucosa</div>
                                        <div className="text-sm font-bold text-emerald-600">Normal ✓</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-orange-100"
                                animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
                                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Colesterol</div>
                                        <div className="text-sm font-bold text-orange-600">Ver más →</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>

            {/* Background with vibrant orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <FloatingOrb
                    className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-teal-200/40 to-emerald-200/20 rounded-full blur-3xl"
                    delay={0}
                />
                <FloatingOrb
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl"
                    delay={2}
                />
                <FloatingOrb
                    className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-pink-200/20 to-orange-200/10 rounded-full blur-3xl"
                    delay={4}
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-7 h-12 rounded-full border-2 border-teal-300 flex justify-center pt-3 hover:border-teal-500 transition-colors cursor-pointer"
                >
                    <motion.div
                        className="w-1.5 h-3 rounded-full bg-gradient-to-b from-teal-500 to-teal-300"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
