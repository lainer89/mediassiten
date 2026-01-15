'use client'

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Heart, Activity } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const benefits = [
    "Explicaciones claras con IA",
    "Tu historial siempre organizado",
    "100% privado y seguro",
]

// Animated text component
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
    return (
        <motion.span className={className}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.03,
                        delay: delay + index * 0.03,
                        ease: "easeOut"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    )
}

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

// Medical particle component
function MedicalParticle({ icon: Icon, className, delay = 0 }: { icon: React.ElementType; className: string; delay?: number }) {
    return (
        <motion.div
            className={`absolute ${className}`}
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 0.3, 0],
                y: [0, -100],
                rotate: [0, 360]
            }}
            transition={{
                duration: 10,
                delay,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <Icon className="w-4 h-4 text-primary/20" />
        </motion.div>
    )
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig)
    const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden"
        >
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge with glow effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary mb-8 shadow-lg shadow-primary/10"
                        style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                        </span>
                        <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent font-semibold">
                            Beta gratuita
                        </span>
                        <span className="text-primary/70">—</span>
                        <span>Disponible para Latinoamérica</span>
                    </motion.div>

                    {/* Headline with animated text */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Entiende tus exámenes médicos{" "}
                        </motion.span>
                        <span className="relative inline-block">
                            <motion.span
                                className="bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent bg-[length:200%_auto] animated-gradient"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                sin complicaciones
                            </motion.span>
                            {/* Underline decoration */}
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
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
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-10 text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        Sube tus resultados de laboratorio y recibe{" "}
                        <span className="text-foreground font-medium">explicaciones claras</span>,
                        en un lenguaje que puedas entender. Tu historial médico{" "}
                        <span className="text-foreground font-medium">organizado, seguro</span> y siempre contigo.
                    </motion.p>

                    {/* Benefits with stagger animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-8"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </motion.div>
                                <span className="group-hover:text-foreground transition-colors">{benefit}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTAs with premium effects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-14 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                size="lg"
                                className="shimmer-btn h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg font-semibold rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all bg-gradient-to-r from-primary to-teal-500 border-0"
                            >
                                Comenzar gratis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg font-semibold rounded-full group hover:bg-muted/80 backdrop-blur-sm border-2"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Play className="mr-2 h-5 w-5 fill-current" />
                                </motion.div>
                                Ver cómo funciona
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Trust Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-10 text-sm text-muted-foreground/70 flex items-center justify-center gap-2 flex-wrap"
                    >
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Sin tarjeta de crédito
                        </span>
                        <span className="hidden sm:inline">·</span>
                        <span>Configuración en 2 minutos</span>
                        <span className="hidden sm:inline">·</span>
                        <span>Cancela cuando quieras</span>
                    </motion.p>
                </div>
            </Container>

            {/* Enhanced Background with animated orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Main gradient orbs */}
                <FloatingOrb
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-teal-500/10 rounded-full blur-3xl"
                    delay={0}
                />
                <FloatingOrb
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl"
                    delay={2}
                />
                <FloatingOrb
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/10 to-primary/5 rounded-full blur-3xl"
                    delay={4}
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--background)_70%)]"></div>

                {/* Medical particles */}
                <MedicalParticle icon={Heart} className="bottom-20 left-[10%]" delay={0} />
                <MedicalParticle icon={Activity} className="bottom-40 left-[30%]" delay={3} />
                <MedicalParticle icon={Heart} className="bottom-20 right-[20%]" delay={5} />
                <MedicalParticle icon={Activity} className="bottom-60 right-[10%]" delay={7} />
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
                    className="w-7 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-3 hover:border-primary/50 transition-colors cursor-pointer"
                >
                    <motion.div
                        className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-primary/50"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
