'use client'

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function Closing() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
            </div>

            <Container className="max-w-4xl">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        Nuestra razón de ser
                    </div>
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
                        ¿Por qué hacemos esto?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-12 space-y-8 text-center"
                >
                    <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                        Porque nadie debería sentirse solo frente a un resultado médico.
                    </p>
                    <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                        Porque entender tu salud no debería ser un privilegio.
                    </p>
                    <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
                        Y porque la tecnología solo tiene sentido cuando cambia vidas reales.
                    </p>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-14"
                >
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
                        <span className="bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                            MedAssist existe para eso.
                        </span>
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-16 flex flex-col items-center"
                >
                    <Button
                        size="lg"
                        className="h-16 px-12 text-lg font-semibold rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
                    >
                        Comenzar gratis
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <p className="mt-5 text-sm text-muted-foreground">
                        Únete a los primeros usuarios en Latinoamérica
                    </p>
                </motion.div>
            </Container>
        </section>
    )
}
